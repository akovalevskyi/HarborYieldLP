import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function AnimatedText({ words, interval = 3000, className = '' }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentIndex];
    let charIndex = 0;
    
    if (isTyping) {
      // Typing effect
      if (charIndex <= currentWord.length) {
        const typingTimer = setInterval(() => {
          if (charIndex <= currentWord.length) {
            setDisplayedText(currentWord.substring(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typingTimer);
            setIsTyping(false);
          }
        }, 50);
        
        return () => clearInterval(typingTimer);
      }
    } else {
      // Wait before deleting
      const waitTimer = setTimeout(() => {
        // Deleting effect
        let deleteIndex = currentWord.length;
        const deleteTimer = setInterval(() => {
          if (deleteIndex >= 0) {
            setDisplayedText(currentWord.substring(0, deleteIndex));
            deleteIndex--;
          } else {
            clearInterval(deleteTimer);
            setCurrentIndex((prev) => (prev + 1) % words.length);
            setIsTyping(true);
          }
        }, 30);
        
        return () => clearInterval(deleteTimer);
      }, interval);
      
      return () => clearTimeout(waitTimer);
    }
  }, [currentIndex, isTyping, words, interval]);

  return (
    <div className={`relative whitespace-nowrap ${className}`}>
      <span className="inline-block">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}