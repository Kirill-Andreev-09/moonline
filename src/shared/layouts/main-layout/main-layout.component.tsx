import { FC } from 'react';

import { Box } from '@mantine/core';

import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

import { useStores } from 'app/store/use-stores';

import { useStyles } from './styles';

interface ICurrentTitle {
  [key: string]: string;
}
interface ILayoutProps {
  prevPage?: string;
}

export const MainLayout: FC<ILayoutProps> = observer(({ prevPage }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <main style={{ height: `calc(100vh - 110px)` }}>
        <Outlet />
      </main>
    </Box>
  );
});
