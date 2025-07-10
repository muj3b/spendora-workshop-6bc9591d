
import React, { useState, useEffect } from 'react';

interface WordByWordTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

const WordByWordText: React.FC<WordByWordTextProps> = ({ 
  text, 
  className = '', 
  delay = 100,
  wordDelay = 30
}) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  
  // Split text into paragraphs, preserving original structure
  const paragraphs = text.split('\n\n').filter(p => p.trim());

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleParagraphs((prev) => {
          if (prev >= paragraphs.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, wordDelay);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [paragraphs.length, delay, wordDelay]);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`mb-4 transition-all duration-500 ${
            index < visibleParagraphs 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default WordByWordText;
