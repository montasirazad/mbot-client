import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';


const NavBar = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    };

    return (
        <div>
            <div className='nav-text-div'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Learn more</button>
            </div>
            <header>
                <h3>logo</h3>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">My Work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
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