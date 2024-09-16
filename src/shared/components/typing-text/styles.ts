import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  text: {
    fontSize: '24px',
    color: '#F0F0E8',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
}));
