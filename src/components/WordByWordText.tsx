import React, { useState, useEffect } from 'react';

interface WordByWordTextProps {
  text?: string;
  paragraphs?: string[];
  className?: string;
  delay?: number;
  wordDelay?: number;
}

const WordByWordText: React.FC<WordByWordTextProps> = ({ 
  text, 
  paragraphs: paragraphsProp,
  className = '', 
  delay = 100,
  wordDelay = 150
}) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  
  const paragraphs = paragraphsProp || (text ? text.split('\n\n').filter(p => p.trim()) : []);

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
    <div className={`space-y-6 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`transition-all duration-500 ease-out ${
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
