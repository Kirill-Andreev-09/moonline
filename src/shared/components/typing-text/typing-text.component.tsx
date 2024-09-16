import { useEffect, useState } from 'react';

import { Text } from '@mantine/core';

import cn from 'classnames';

import { useStyles } from './styles';

export const TypingText = ({
  text,
  speed,
  className,
}: {
  text: string;
  speed: number;
  className?: string;
}) => {
  const { classes } = useStyles();
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <Text fw={400} className={cn(className, classes.text)}>
      {displayedText}
    </Text>
  );
};
