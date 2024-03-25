import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Contact from './routes/Contact';
import EditContact from './routes/Edit';

import { loader as homeLoader, action as homeAction } from './actions/home';
import { loader as contactLoader } from './actions/contact';
import { action as editAction } from './actions/edit';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
    action: homeAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },

      {
        path: '/contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
