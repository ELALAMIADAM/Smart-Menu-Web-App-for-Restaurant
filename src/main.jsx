import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Layout from './components/Layout';
import DetailDrinkPage from './pages/DetailDrinkPage';
import NewDrinks from './pages/NewDrinks';
import PersonalizedCarte from './pages/PersonalizedCarte';

import './style/index.css';
import { theme } from "./style/Theme"
import { ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Utilisez Layout pour la route "/"
    children: [
      {
        index: true,  // Correspond à la route "/"
        element: <Home />,
      },
      {
        path: "carte",
        element: <PersonalizedCarte />,
      },
      {
        path: "nouveaute",
        element: <NewDrinks />,
      },
      {
        path: "detail",
        element: <DetailDrinkPage />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
);

