'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h2',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  let charCounter = 0;

  return (
    <Tag ref={containerRef as any} className={`inline-flex flex-wrap items-baseline ${className}`}>
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="inline-flex overflow-hidden pt-1 pb-1 -mt-1 -mb-1"
          style={{
            marginRight: wIdx < words.length - 1 ? '0.35em' : '0',
            verticalAlign: 'baseline',
          }}
        >
          {word.split('').map((char, cIdx) => {
            const currentIdx = charCounter++;
            const charDelay = delay + currentIdx * 35;
            return (
              <span
                key={cIdx}
                className="char inline-block will-change-transform"
                style={{
                  transform: isVisible ? 'translateY(0%)' : 'translateY(110%)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${charDelay}ms, opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${charDelay}ms`,
                  lineHeight: 'inherit',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
