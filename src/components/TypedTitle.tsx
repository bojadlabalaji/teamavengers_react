import React, { useState, useEffect } from 'react';

interface TypedTitleProps {
  strings: string[];
  className?: string;
}

const TypedTitle: React.FC<TypedTitleProps> = ({ strings, className = '' }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = strings[currentStringIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        // Typing forward
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length === 0) {
        // Move to next string
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setIsTyping(true);
      } else {
        // Deleting
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isTyping, currentStringIndex, strings]);

  return (
    <span className={className}>
      {currentText + "_"}
    </span>
  );
};

export default TypedTitle;