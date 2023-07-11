import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';
import genieLogo from '../../../images/genie_logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    };

    return (
        <div className='nav-container'>
            <div className='nav-text-div'>
                <p>Unleash the Power of AI-Powered Content Solutions --</p>

                <Link to='/signup'>Try Now!</Link>
                {/* <button><Link to='/signup'>Try Now!</Link></button> */}
            </div>
            <header>
                <img src={genieLogo} alt="" />
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">My Work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
                    <Link to='user/dashboard'>User dashboard</Link>
                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <ClearIcon />
                    </button>
                </nav>

                <button onClick={showNavBar} className='nav-btn'>
                    <MenuIcon />
                </button>
            </header>
        </div>
    );
};

export default NavBar;