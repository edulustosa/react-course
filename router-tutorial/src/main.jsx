import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import Contact from './routes/Contact';
import EditContact from './routes/Edit';
import Index from './routes/Index';

import { loader as homeLoader, action as homeAction } from './actions/home';
import {
  loader as contactLoader,
  action as contactAction,
} from './actions/contact';
import { action as editAction } from './actions/edit';
import { action as destroyAction } from './actions/delete';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home />}
      loader={homeLoader}
      action={homeAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />

        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />

        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />

        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
