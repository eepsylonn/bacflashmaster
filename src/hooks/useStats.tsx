
import { useState, useMemo } from 'react';
import { TrainingResult } from '@/types';

export const useStats = (trainingHistory: TrainingResult[]) => {
  const [selectedMatiere, setSelectedMatiere] = useState<string | 'all'>('all');

  // Filter history based on selected matiere
  const filteredHistory = useMemo(() => {
    if (selectedMatiere === 'all') return trainingHistory;
    return trainingHistory.filter(result => result.matiere === selectedMatiere);
  }, [trainingHistory, selectedMatiere]);

  // Get all unique matieres from history
  const matieres = useMemo(() => {
    const set = new Set<string>();
    trainingHistory.forEach(result => set.add(result.matiere));
    return Array.from(set);
  }, [trainingHistory]);

  // Calculate average note
  const averageNote = useMemo(() => {
    if (filteredHistory.length === 0) return 0;
    const sum = filteredHistory.reduce((acc, result) => acc + result.note, 0);
    return sum / filteredHistory.length;
  }, [filteredHistory]);

  // Calculate data for chart
  const chartData = useMemo(() => {
    return filteredHistory.map(result => ({
      date: new Date(result.date).toLocaleDateString(),
      note: parseFloat(result.note.toFixed(2)),
      matiere: result.matiere,
      niveau: result.niveau
    })).reverse();
  }, [filteredHistory]);

  // Calculate improvement rate
  const improvementRate = useMemo(() => {
    if (filteredHistory.length < 2) return null;
    
    const first = filteredHistory[filteredHistory.length - 1].note;
    const last = filteredHistory[0].note;
    
    return ((last - first) / first) * 100;
  }, [filteredHistory]);

  // Calculate weakest subject
  const weakestSubject = useMemo(() => {
    if (trainingHistory.length === 0) return null;
    
    const subjectScores: Record<string, { totalScore: number, count: number }> = {};
    
    trainingHistory.forEach(result => {
      if (!subjectScores[result.matiere]) {
        subjectScores[result.matiere] = { totalScore: 0, count: 0 };
      }
      
      subjectScores[result.matiere].totalScore += result.note;
      subjectScores[result.matiere].count += 1;
    });
    
    let weakestSubj = '';
    let lowestAvg = 20;
    
    Object.entries(subjectScores).forEach(([subject, data]) => {
      const avg = data.totalScore / data.count;
      if (avg < lowestAvg) {
        lowestAvg = avg;
        weakestSubj = subject;
      }
    });
    
    return { subject: weakestSubj, average: lowestAvg };
  }, [trainingHistory]);

  return {
    selectedMatiere,
    setSelectedMatiere,
    matieres,
    averageNote,
    chartData,
    improvementRate,
    weakestSubject
  };
};
