import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './DashboardSidebar';
import DashboardSidebar from './DashboardSidebar';
import useBioData from '../hooks/useBioData';

const Dashboard = () => {
    
    return (
        <div className='flex'>
            <DashboardSidebar className=''></DashboardSidebar>
            <div className='p-16 flex-1'>
            <Outlet className='p-8 '></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;