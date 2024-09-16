import { FC } from 'react';

import { Button, Text } from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';

import { PredictionsComponent } from '../predictions';
import { CardWithBlurProps } from './card-with-blur.model';
import { useStyles } from './styles';

export const CardWithBlur: FC<CardWithBlurProps> = ({
  text,
  hasActionButton,
  onActionClick,
  icon,
  subtitle,
  isTypingText = false,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {icon && icon}

      {isTypingText ? (
        <PredictionsComponent />
      ) : (
        <Text fw={500} className={classes.text}>
          {text}
        </Text>
      )}

      {hasActionButton && (
        <Button className={classes.button} onClick={onActionClick}>
          Узнать свое предсказание
        </Button>
      )}

      {subtitle && (
        <Text fw={400} className={classes.subtitle}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};
