import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Programming_IQ.png";

const Header = () => {
  return (
    <nav className=' bg-[#06283D] h-12 flex align-middle justify-between  text-white font-semibold md:px-12'>
      <div className='logo py-1'>
        <Link to='/'>
          <img src={logo} alt='Programming_IQ' className='h-10' />
        </Link>
      </div>
      <div className='navLink flex align-middle py-2'>
        <NavLink
          to='/home'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454]  rounded-sm duration-500 '
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Home
        </NavLink>
        <NavLink
          to='/about'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          About
        </NavLink>
        <NavLink
          to='/topic'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Topic
        </NavLink>
        <NavLink
          to='/blog'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
