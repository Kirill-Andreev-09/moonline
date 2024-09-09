import { Dispatch, SetStateAction } from 'react';

import { Box, Button, Text } from '@mantine/core';

import { StepsEnum } from 'shared/types/enums';

import { useStyles } from './styles';

export const Start = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<StepsEnum>>;
}) => {
  const { classes } = useStyles();

  const handleClick = () => {
    setStep(StepsEnum.result);
  };

  return (
    <Box className={classes.root}>
      <Text fw={500}>
        Достопочтенный Господин Журавль подготовил предсказание для Вас…
      </Text>

      <Button className={classes.button} onClick={handleClick}>
        Узнать свое предсказание
      </Button>
    </Box>
  );
};
