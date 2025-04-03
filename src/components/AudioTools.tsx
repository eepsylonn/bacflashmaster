
import React, { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Mic, Volume2, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface TextToSpeechProps {
  text: string;
  voice?: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export const TextToSpeech: React.FC<TextToSpeechProps> = ({ 
  text, 
  voice = 'alloy',
  onPlayStateChange
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const handleTextToSpeech = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      onPlayStateChange?.(false);
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text, voice },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.audioContent) {
        throw new Error('No audio content returned');
      }

      // Create audio from base64
      const audioSrc = `data:audio/mp3;base64,${data.audioContent}`;
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.onended = () => {
          setIsPlaying(false);
          onPlayStateChange?.(false);
        };
      }
      
      audioRef.current.src = audioSrc;
      audioRef.current.play();
      setIsPlaying(true);
      onPlayStateChange?.(true);
    } catch (error) {
      console.error('Error in text-to-speech:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de convertir le texte en audio. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
      onClick={handleTextToSpeech}
      disabled={isLoading || !text}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isPlaying ? (
        <Volume2 className="h-4 w-4 text-green-500" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
      {isPlaying ? 'Arrêter' : 'Écouter'}
    </Button>
  );
};

interface SpeechToTextProps {
  onTranscription: (text: string) => void;
}

export const SpeechToText: React.FC<SpeechToTextProps> = ({ onTranscription }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        setIsProcessing(true);
        try {
          // Convert audio to base64
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
          const reader = new FileReader();
          
          reader.onloadend = async () => {
            try {
              const base64data = (reader.result as string).split(',')[1];
              
              // Call speech-to-text endpoint
              const { data, error } = await supabase.functions.invoke('speech-to-text', {
                body: { audio: base64data },
              });

              if (error) {
                throw new Error(error.message);
              }

              if (data.text) {
                onTranscription(data.text);
              } else {
                throw new Error('No text transcription returned');
              }
            } catch (transcribeError) {
              console.error('Error in transcription:', transcribeError);
              toast({
                title: 'Erreur',
                description: 'Impossible de transcrire l\'audio. Veuillez réessayer.',
                variant: 'destructive',
              });
            } finally {
              setIsProcessing(false);
            }
          };
          
          reader.readAsDataURL(audioBlob);
        } catch (error) {
          console.error('Error processing audio:', error);
          setIsProcessing(false);
          toast({
            title: 'Erreur',
            description: 'Erreur lors du traitement de l\'audio',
            variant: 'destructive',
          });
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible d\'accéder au microphone',
        variant: 'destructive',
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      
      // Stop all audio tracks
      if (mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
      
      setIsRecording(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={`flex items-center gap-2 ${isRecording ? 'bg-red-100 border-red-400' : ''}`}
      onClick={isRecording ? stopRecording : startRecording}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Mic className={`h-4 w-4 ${isRecording ? 'text-red-500 animate-pulse' : ''}`} />
      )}
      {isProcessing ? 'Traitement...' : isRecording ? 'Arrêter' : 'Dicter'}
    </Button>
  );
};
