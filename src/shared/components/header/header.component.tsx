import { FC, ReactNode, SyntheticEvent, useCallback } from 'react';

import { Box } from '@mantine/core';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { useStores } from 'app/store/use-stores';

import { useStyles } from './styles';

interface IHeader {
  title: string;
  prevPage?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Header: FC<IHeader> = observer(
  ({ title, prevPage = '', iconLeft, iconRight }) => {
    const navigate = useNavigate();
    const { PanelStore } = useStores();
    const { classes } = useStyles();

    const handleClick = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
      const name = event.currentTarget.dataset.name ?? '';
      PanelStore.setActivePanel(name);
      navigate(`/${name}`);
    }, []);

    return (
      <Box className={classes.header}>
        <Box
          data-name={prevPage}
          className={classes.icon}
          onClick={handleClick}
        >
          {prevPage !== '' && iconLeft}
        </Box>

        <Box className={classes.title}> {title}</Box>
        <Box className={classes.icon}> {prevPage !== '' && iconRight}</Box>
      </Box>
    );
  },
);

export { Header };
