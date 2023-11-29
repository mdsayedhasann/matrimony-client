import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-7xl'>
                Hi! {user.displayName}, <br/>
                <span className='text-3xl'>
                Warmly Welcome To the Dashboard
                </span>
            </h1>
        </div>
    );
};

export default DashboardHome;