import { useEffect, useRef, useState } from 'react';

export const TypingText = ({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1); // Увеличиваем индекс в состоянии
      }, speed);

      return () => clearTimeout(timeout); // Очищаем таймаут при изменении
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};
