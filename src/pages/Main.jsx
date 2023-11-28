import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Navbar/Nav';


const Main = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
             <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default Main;