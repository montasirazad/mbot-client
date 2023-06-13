import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BiMenu, BiMenuAltRight, BiArrowBack } from "react-icons/bi";
import { FaDiceSix } from "react-icons/fa";

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    //console.log(toggle);
    return (

        <nav>
            <div className='menu-icon'>
                <FaDiceSix onClick={() => setToggle(!toggle)} />
            </div>
            <div className='logo-div'>

                <h1>LOGO</h1>
            </div>


            <div className='menu-div'>

                <Link to="/">MENU-1</Link>
                <Link to="/">MENU-3</Link>
                <Link to="/">MENU-2</Link>
                <Link to="/login">Log in</Link>
            </div>


            {
                toggle && <div className='mobile-menu-link'>

                    <Link to="/">MENU-1</Link>
                    <Link to="/">MENU-3</Link>
                    <Link to="/">MENU-2</Link>
                    <Link to="/">MENU-4</Link>

                </div>
            }

        </nav>

    );
};

export default NavBar;