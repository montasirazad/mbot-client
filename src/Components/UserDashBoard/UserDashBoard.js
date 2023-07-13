import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './UserDashBoard.css'
import { MenuSharp } from '@mui/icons-material'

const UserDashBoard = () => {

  const [toggle, setToggle] = useState(true);

  const menuToggle = () => {
    setToggle(!toggle)
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

          <h1>menu</h1>
          <Link to='/'>Home</Link>
          <Link to='/user/dashboard'>New post</Link>
          <Link to='/user/dashboard/website-list'>Website List</Link>
          <Link to='#'>option 3</Link>
          <Link to='#'>option 4</Link>
        </div>
        <div className='dashboard-outlet'>
          <Outlet />
        </div>
      </div >

    </div>
  );
};

export default UserDashBoard;