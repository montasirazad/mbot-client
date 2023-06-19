import React from 'react';
import NavBar from '../Shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import './Main.css';


const Main = () => {
    return (
        <div className='main-div'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;