import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <li><NavLink className='link' activeClassName="active-link" to='/'>Home</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
