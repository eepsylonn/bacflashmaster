
import React from 'react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ReadingTextDisplayProps {
  text: string;
}

const ReadingTextDisplay: React.FC<ReadingTextDisplayProps> = ({ text }) => {
  return (
    <Card className="mb-6 bg-white shadow-md">
      <ScrollArea className="h-[300px] p-6">
        <div className="prose max-w-none">
          {text.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ReadingTextDisplay;
