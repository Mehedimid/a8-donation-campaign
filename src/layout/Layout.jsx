import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div className='sizing'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;