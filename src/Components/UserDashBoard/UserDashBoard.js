import React, { useRef } from 'react';
import './UserDashBoard.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar/NavBar';
import Footer from '../Shared/Footer/Footer';

const UserDashBoard = () => {

    const menuRef = useRef()

    const handleMenuButton = () => {
        menuRef.current.classList.toggle('menuHide')
    }

    return (
        <div>
            <div className='header-div'>
                <Link to='/'>Home</Link>
                <h2>Gengenie</h2>
                <button onClick={handleMenuButton}><span style={{ fontSize: '30px', cursor: 'pointer' }}>&#9776;</span></button>
            </div>
            {/* <NavBar /> */}
            <div className="dashboard-container">

                <div className='dashboard-links' ref={menuRef}>
                    <button className='close-btn' onClick={handleMenuButton}>
                        <span style={{ fontSize: '30px', cursor: 'pointer' }}>
                            &times;
                        </span>
                    </button>
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