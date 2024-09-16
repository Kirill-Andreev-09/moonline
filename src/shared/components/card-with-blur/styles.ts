import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    width: '464px',
    minHeight: '287px',
    padding: '50px',
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(20px)',
    borderRadius: '32px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      width: '320px',
    },
  },
  text: {
    fontSize: '24px',
    color: '#F0F0E8',
    textAlign: 'center',
    wordWrap: 'break-word',

    '@media (max-width: 768px)': {
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
  subtitle: {
    fontSize: '14px',
    color: '#F0F0E8',
    textAlign: 'center',
  },
  button: {
    width: '260px',
    height: '64px',
    backgroundColor: '#FFF374',
    borderRadius: '48px',
    fontSize: '16px',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    boxShadow:
      '0 4px 64px rgba(255, 243, 106, 0.16), 0 4px 32px rgba(255, 243, 106, 0.16)',
    padding: '20px 24px',

    '&:hover': {
      backgroundColor: '#ffff8d',
      boxShadow:
        '0 4px 64px rgba(255, 243, 106, 0.4), 0 4px 32px rgba(255, 243, 106, 0.4), 0 0 16px rgba(255, 243, 106, 0.8)',
    },
  },
}));
