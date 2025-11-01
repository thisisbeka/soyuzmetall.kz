import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TypewriterUnderlineProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterUnderline({
  words,
  className = '',
  typingSpeed = 100,
  pauseDuration = 500,
}: TypewriterUnderlineProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showUnderline, setShowUnderline] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(words[currentWordIndex]);
      setShowUnderline(true);
      return;
    }

    const currentWord = words[currentWordIndex];
    let charIndex = 0;

    setIsTyping(true);
    setShowUnderline(false);
    setDisplayedText('');

    const typingInterval = setInterval(() => {
      if (charIndex < currentWord.length) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setShowUnderline(true);

        setTimeout(() => {
          setShowUnderline(false);
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }, 300);
        }, pauseDuration + 1000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, words, typingSpeed, pauseDuration, prefersReducedMotion]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>

      <motion.span
        className="absolute left-0 right-0 bottom-0 h-[3px] origin-left"
        style={{
          background: 'linear-gradient(90deg, #5B8EFF 0%, #7FB3FF 100%)',
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: showUnderline ? 1 : isTyping ? displayedText.length / words[currentWordIndex].length : 0,
        }}
        transition={{
          duration: showUnderline ? 0.3 : 0.1,
          ease: 'easeOut',
        }}
      />
    </span>
  );
}
