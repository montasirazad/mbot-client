import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './UserDashBoard.css'
import { HomeMaxTwoTone, MenuSharp } from '@mui/icons-material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeMini from '@mui/icons-material/HomeMini';
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home';


const UserDashBoard = () => {

  const [toggle, setToggle] = useState(true);
  const [subMenuToggleOne, setSubMenuToggleOne] = useState(false);
  const [subMenuToggleTwo, setSubMenuToggleTwo] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle)
  };

  const subMenuOne = () => {
    setSubMenuToggleOne(!subMenuToggleOne)
  };
  const subMenuTwo = () => {
    setSubMenuToggleTwo(!subMenuToggleTwo)
  };

  return (
    <div>
      <div className="top-nav">

        <MenuSharp onClick={menuToggle} className='menu-btn' />
        {/* <button >menu</button> */}
        <h1>Genegenie</h1>
      </div>

      <div className={toggle ? 'dashboard-container' : 'toggle-container'}>
        <div className={toggle ? 'dashboard-menu' : 'hide-menu'}>

          {/* <h1>menu</h1> */}
          <Link to='/'><HomeIcon /></Link>
          <Link to='/user/dashboard'>Website List</Link>
          {/* <Link to='/user/dashboard/new-post'>New post</Link> */}


          <div>

            <p onClick={subMenuOne}
              className='sub-menu'
            >
              Info Article {subMenuToggleOne ?
                <ArrowDropUpIcon /> :
                <ArrowDropDownIcon />}
            </p>


            {

              subMenuToggleOne ?


                <div className='dashboard-menu'>

                  <Link to='/user/dashboard/new-post'>Auto Publish</Link>


                  <Link to='#'>Manual Publish</Link>


                  <Link to='#'>option 4
                  </Link>
                </div >
                : null}
          </div>
          <div >

            <p onClick={subMenuTwo}
              className='sub-menu'
            >
              Settings {subMenuToggleTwo ?
                <ArrowDropUpIcon /> :
                <ArrowDropDownIcon />}
            </p>


            {
              subMenuToggleTwo ?
                <div className='dashboard-menu'>

                  <Link to='#'>Website Setting</Link>
                  <Link to='#'>Account Setting</Link>
                </div >
                : null}
          </div>

          <Link to='#'>History</Link>
        </div>


        <div className='dashboard-outlet'>
          <Outlet />
        </div>
      </div >

    </div >
  );
};

export default UserDashBoard;