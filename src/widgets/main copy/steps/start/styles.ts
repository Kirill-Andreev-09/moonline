import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    backgroundColor: '#2F4F4F',
  },
  button: {
    backgroundColor: '#B23A48',
    color: '#FFFFFF',
    border: 'none',
    fontSize: 16,
    cursor: 'pointer',
    borderRadius: 5,

    '&:hover': {
      backgroundColor: '#A32E3D',
    },
  },
}));
