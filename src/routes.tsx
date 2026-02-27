import HomePage from './pages/Home';
import ProcessPage from './pages/Process';
import GalleryPage from './pages/Gallery';
import FAQPage from './pages/FAQ';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Process',
    path: '/process',
    element: <ProcessPage />
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <GalleryPage />
  },
  {
    name: 'FAQ',
    path: '/faq',
    element: <FAQPage />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />
  },
  {
    name: 'Not Found',
    path: '/404',
    element: <NotFound />,
    visible: false
  },
  {
    name: 'Redirect',
    path: '*',
    element: <Navigate to="/404" replace />,
    visible: false
  }
];

export default routes;
