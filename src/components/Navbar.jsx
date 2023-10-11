import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const obj = [
    {path:'/', name:'Home'},
    {path:'/donation', name:'Donation'},
    {path:'/stat', name:'Statistics'}
  ]
    return (
        <div className='sizing relative md:mx-32 lg:mx-0'>
            <div className="navbar py-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
      obj.map(item => <NavLink key={item.id} to={item.path}>{item.name}</NavLink>)
    }
      </ul>
    </div>
    <img src='https://imgtr.ee/images/2023/10/07/850588f93e394fb7fe2fca7400eb40ca.png'  />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal gap-7 text-base px-1">
    {/* <NavLink to=''>Home</NavLink>
    <NavLink to='/donation'>Donation</NavLink>
    <NavLink to='/stat'>Statistics</NavLink> */}
    {
      obj.map(item => <NavLink key={item.id} to={item.path}>{item.name}</NavLink>)
    }
    </ul>
  </div>

</div>
        </div>
    );
}

export default Navbar;