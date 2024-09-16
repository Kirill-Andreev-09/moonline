import { useEffect, useState } from 'react';

import { Box } from '@mantine/core';

import { PredictionsComponent } from 'shared/components';
import { useRedirectCheck } from 'shared/hooks';
import { StepsEnum } from 'shared/types/enums';

import { Result } from './steps/result';
import { Start } from './steps/start';
import { useStyles } from './styles';

export const Main = () => {
  const { classes } = useStyles();
  const shouldRedirect = useRedirectCheck();
  const [step, setStep] = useState<StepsEnum>(StepsEnum.start);

  useEffect(() => {
    if (shouldRedirect) {
      setStep(StepsEnum.result);
    } else {
      setStep(StepsEnum.start);
    }
  }, [shouldRedirect]);

  return (
    <Box className={classes.root}>
      {step === StepsEnum.start && <Start setStep={setStep} />}
      {step === StepsEnum.result && <Result />}
    </Box>
  );
};
