import { Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

import { PagesEnum } from 'shared/types/enums';

const NotFoundPage = lazy(() => import('pages/not-found'));
const MyBoxPage = lazy(() => import('pages/mybox'));
const MainPage = lazy(() => import('pages/main'));

export enum RouterPathEnum {
  MY_BOX = `/${PagesEnum.MY_BOX}`,
}

export const Router = () => {
  const router = useRoutes([
    {
      // element: <MainLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: RouterPathEnum.MY_BOX,
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
