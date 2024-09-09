import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 32,
    backgroundColor: '#2F4F4F',
    textAlign: 'center',
  },
}));
