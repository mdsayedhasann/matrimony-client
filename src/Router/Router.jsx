import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../pages/Main';
import Checking from '../shared/Checking/Checking';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import PrivateRouter from './PrivateRouter';
import BioData from '../pages/BioData/BioData';

  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/checking',
          element: <PrivateRouter><Checking></Checking> </PrivateRouter>
        },
        {
          path: '/biodata',
          element: <BioData></BioData>
        }
      ]
    },
   
  ]);

export default Router;