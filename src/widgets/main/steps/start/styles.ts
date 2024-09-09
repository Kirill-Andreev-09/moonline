import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#2F4F4F',
    textAlign: 'center',
  },
  text: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#B23A48',
    color: '#FFFFFF',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',

    '&:hover': {
      backgroundColor: '#A32E3D',
    },
  },
}));
