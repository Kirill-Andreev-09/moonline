import { createStyles } from '@mantine/core';

import bgDesktop from '../../app/public/img/bg-desktop.png';
import bgMobile from '../../app/public/img/bg-mobile.png';
import bgTablet from '../../app/public/img/bg-tablet.png';

export const useStyles = createStyles(() => ({
  root: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',

    // Фон по умолчанию для desktop
    backgroundImage: `url(${bgDesktop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    // Фон для планшетов
    '@media (max-width: 1024px)': {
      backgroundImage: `url(${bgTablet})`,
    },

    // Фон для мобильных устройств
    '@media (max-width: 768px)': {
      backgroundImage: `url(${bgMobile})`,
      padding: '0 16px',
    },
  },
}));
