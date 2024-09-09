import { Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

// const MainLayout = lazy(() => import('shared/layouts/main-layout'));
const NotFoundPage = lazy(() => import('pages/not-found'));
const MyBoxPage = lazy(() => import('pages/mybox'));
const MainPage = lazy(() => import('pages/main'));

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
