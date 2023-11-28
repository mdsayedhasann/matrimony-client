import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../pages/Main';
import Checking from '../shared/Checking/Checking';

  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: 'checking',
            element: <Checking></Checking>
        }
      ]
    },
   
  ]);

export default Router;