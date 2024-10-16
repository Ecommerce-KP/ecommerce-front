import { lazy } from 'react';
import AuthLayout from '@/layouts/Auth';
import ClientLayout from '@/layouts/Client';
import { createBrowserRouter } from 'react-router-dom';
import paths from '@/configs/routes';

const HomePage = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const RegisterPage = lazy(() => import('@/pages/Register'));
const LoginPage = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const routes = createBrowserRouter([
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: paths.LOGIN,
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: paths.REGISTER,
  //       element: <RegisterPage />,
  //     },
  //   ],
  // },
  {
    path: paths.INDEX_PATH,
    element: <ClientLayout />,
    children: [
      { element: <HomePage />, index: true },
      { path: paths.ABOUT, element: <AboutPage /> },
      { path: paths.CONTACT, element: <ContactPage /> },
      {
        path: paths.LOGIN,
        element: <LoginPage />,
      },
      {
        path: paths.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: paths.OTHER_PATH,
    element: <NotFound />,
  },
]);
