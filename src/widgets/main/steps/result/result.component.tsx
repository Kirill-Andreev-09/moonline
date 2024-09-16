import { Box } from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';

import { CardWithBlur, PredictionsComponent } from 'shared/components';
import { PREDICTIONS } from 'shared/constants/projects';
import { usePrediction } from 'shared/hooks';
import { numberToWords, timeToWords } from 'shared/utils';

export const Result = () => {
  const prediction = usePrediction({
    predictions: PREDICTIONS,
    cacheDurationHours: 6,
  });

  return (
    <Box>
      <CardWithBlur
        text={prediction}
        subtitle={`Предсказание можно получить раз в ${numberToWords(
          6,
        )} ${timeToWords(6, 'hours')}`}
        isTypingText
        icon={<IconCircleCheck size={40} color="#FFF36A" />}
      />
    </Box>
  );
};
