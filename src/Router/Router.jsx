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
import BioProfile from '../pages/BioProfile/BioProfile';
import useAxiosSecure from '../hooks/useAxiosSecure';
import AboutUs from '../pages/AboutUs/AboutUs';
import ReceiveRequest from '../Dashboard/ReceiveRequest/ReceiveRequest';
import DashboardUsers from '../Dashboard/DashboardUsers';

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
        {
          path: '/profile/:id',
          element: <PrivateRouter> <BioProfile></BioProfile></PrivateRouter> ,
          loader: ({params}) => fetch(` https://matrimony-server-three.vercel.app/bioData/${params.id}`)
        },
        {
          path: 'aboutus',
          element: <AboutUs></AboutUs>
        },
        
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children: [
        {
          path: '/dashboard',
          element: <PrivateRouter> <DashboardHome></DashboardHome></PrivateRouter>
        },
        {
          path: 'addbiodata',
          element: <PrivateRouter><AddBiodata></AddBiodata></PrivateRouter>
        },
        {
          path: 'actionbiodata',
          element: <PrivateRouter><ActionBioData></ActionBioData></PrivateRouter>
        },
        {
          path: 'receive_request',
          element: <PrivateRouter><ReceiveRequest></ReceiveRequest></PrivateRouter>
        },
        {
          path: 'users',
          element: <PrivateRouter><DashboardUsers></DashboardUsers></PrivateRouter>
        }
      ]
    }
   
  ]);

export default Router;