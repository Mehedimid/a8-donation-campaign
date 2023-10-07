import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <div className="navbar pt-5 border">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal gap-7 text-base px-1">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/donation'>Donation</NavLink>
    <NavLink to='/stat'>Statistics</NavLink>
    </ul>
  </div>

</div>
        </div>
    );
}

export default Navbar;