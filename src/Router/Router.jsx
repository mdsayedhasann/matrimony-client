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
import AddBiodata from '../pages/AddBiodata/AddBiodata';
import Dashboard from '../Dashboard/Dashboard';
import DashboardHome from '../Dashboard/DashboardHome';
import ActionBioData from '../Dashboard/ActionBioData';

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
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard',
          element: <DashboardHome></DashboardHome>
        },
        {
          path: 'addbiodata',
          element: <AddBiodata></AddBiodata>
        },
        {
          path: 'actionbiodata',
          element: <ActionBioData></ActionBioData>
        }
      ]
    }
   
  ]);

export default Router;