import { Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

import { NAME_PROJECT } from 'shared/constants';
import { PagesEnum } from 'shared/types/enums';

const NotFoundPage = lazy(() => import('pages/not-found'));
const MyBoxPage = lazy(() => import('pages/mybox'));
const MainPage = lazy(() => import('pages/main'));

export enum RouterPathEnum {
  HOME = `/${NAME_PROJECT}`,
  ALLOW_ACCESS = `/${PagesEnum.MY_BOX}`,
}

export const Router = () => {
  const router = useRoutes([
    {
      // element: <MainLayout />,
      children: [
        {
          path: RouterPathEnum.HOME,
          element: <MainPage />,
        },
        {
          path: '/mybox',
          element: <MyBoxPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense>{router}</Suspense>;
};
