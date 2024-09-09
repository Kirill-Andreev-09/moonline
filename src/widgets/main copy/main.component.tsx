import { useState } from 'react';

import { Box } from '@mantine/core';

import { PredictionsComponent, TypingText } from 'shared/components';
import { StepsEnum } from 'shared/types/enums';

import { Start } from './steps/start';
import { useStyles } from './styles';

export const Main = () => {
  const { classes } = useStyles();

  const [step, setStep] = useState<StepsEnum>(StepsEnum.start);

  return (
    <Box className={classes.root}>
      {step === StepsEnum.start && <Start setStep={setStep} />}
      {step === StepsEnum.result && <PredictionsComponent />}
    </Box>
  );
};
