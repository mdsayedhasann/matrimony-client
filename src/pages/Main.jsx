import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Navbar/Nav';
import WebsiteFooter from '../shared/Footer/WebsiteFooter';


const Main = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
             <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
             </div>
             <div className='max-w-7xl mx-auto'>
                 <WebsiteFooter></WebsiteFooter>
             </div>
        </div>
    );
};

export default Main;