import { Dispatch, SetStateAction } from 'react';

import { CardWithBlur } from 'shared/components';
import { StepsEnum } from 'shared/types/enums';

export const Start = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<StepsEnum>>;
}) => {
  const handleClick = () => {
    setStep(StepsEnum.result);
  };

  return (
    <CardWithBlur
      text="Достопочтенный Господин Журавль подготовил предсказание для вас..."
      hasActionButton={true}
      onActionClick={handleClick}
    />
  );
};
