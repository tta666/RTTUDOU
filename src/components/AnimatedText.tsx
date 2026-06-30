import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={className} style={{ position: 'relative' }}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 0.6 / characters.length;
        
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <motion.span
            key={index}
            style={{ opacity, display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </p>
  );
}