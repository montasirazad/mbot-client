import { MenuSharp } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './UserDashBoard.css';
import genGenieLogo from '../../images/GenGenie.png';

const UserDashBoard = () => {

  const [toggle, setToggle] = useState(true);
  const [subMenuToggleOne, setSubMenuToggleOne] = useState(false); //Info article Sub menu state
  const [subMenuToggleTwo, setSubMenuToggleTwo] = useState(false); //Setting Sub menu state

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

        <Link to='/'>
          <img src={genGenieLogo} alt="" style={{width:'200px',marginLeft:'50px'}}/>
        </Link>
      </div>

      <div className={toggle ? 'dashboard-container' : 'toggle-container'}>
        <div className={toggle ? 'dashboard-menu' : 'hide-menu'}>
          <Link to='/user/dashboard'>Website List</Link>

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


                  <Link to='/user/dashboard/manual-publish'>Manual Publish</Link>

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