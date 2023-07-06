import React from 'react';
import './UserDashBoard.css';
import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar/NavBar';
import Footer from '../Shared/Footer/Footer';

const UserDashBoard = () => {
    return (
        <div>
            {/* <div className='header-div'>
                <h2>Gengenie</h2>
            </div> */}
            <NavBar />
            <div className="dashboard-container">
                <div className='dashboard-links'>

                    <NavLink to='/user/dashboard'>New Post</NavLink>
                    <NavLink to='/user/dashboard/website-list'>website list</NavLink>
                    <NavLink to='/'>Option 3</NavLink>
                    <NavLink to='/'>Option 4</NavLink>
                </div>
                <div>
                    {/* <h1>Test</h1> */}
                    <Outlet />
                </div>
            </div>

            <br />
           <div>

           </div>
        </div>
    );
};

export default UserDashBoard;