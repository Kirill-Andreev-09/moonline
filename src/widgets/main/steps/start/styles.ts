import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#2F4F4F',
    textAlign: 'center',
  },
  text: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#F0F0E8',
  },
  button: {
    backgroundColor: '#B23A48',
    color: '#F0F0E8',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',

    '&:hover': {
      backgroundColor: '#A32E3D',
    },
  },
}));
