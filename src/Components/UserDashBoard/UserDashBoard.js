import React, { useRef } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './UserDashBoard.css';

const UserDashBoard = () => {

    const menuRef = useRef()

    const handleMenuButton = () => {
        menuRef.current.classList.toggle('menuShow')
    }

    return (
        <div>
            <div className='header-div'>
                <span onClick={handleMenuButton} className='open-btn'>
                    &#9776;
                </span>


                <h2>Gengenie</h2>
                <div>
                    <p>hi, ....</p>
                </div>
            </div>



            <div className="dashboard-container">

                <div className='dashboard-links' ref={menuRef}>

                    <span onClick={handleMenuButton}
                        className='close-btn'>
                        &times;

                    </span>

                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/user/dashboard'>New Post  +</NavLink>
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