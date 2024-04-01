import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./Root'),
    children: [
      {
        path: '/',
        lazy: () => import('../pages/Home/Home'),
      },
      {
        path: '/post/:id',
        lazy: () => import('../pages/PostDetails/PostDetails'),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
