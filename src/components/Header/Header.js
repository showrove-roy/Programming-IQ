import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Programming_IQ.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=' bg-[#06283D] h-12 flex align-middle justify-between  text-white font-semibold md:px-12 sticky top-0 z-30'>
      <div className=' py-1 ml-8 z-40'>
        <Link to='/'>
          <img src={logo} alt='Programming_IQ' className='h-10' />
        </Link>
      </div>
      <div
        className={`flex align-middle w-full justify-end py-2 absolute md:static duration-500 ease-in ${
          open
            ? "top-12 bg-[#06283D]  h-36 pb-5 border-t flex-col"
            : "top-[-150px] bg-[#06283D] md:flex-row flex-col"
        }`}>
        <NavLink
          to='/home'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454]  rounded-sm duration-500 '
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Home
        </NavLink>
        <NavLink
          to='/topics'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Topics
        </NavLink>
        <NavLink
          to='/statistics'
          className='px-5 py-[2px] mx-2 hover:bg-[#F05454] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Statistics
        </NavLink>

        <NavLink
          to='/blog'
          className='px-5 py-[2px] mx-2 hover:bg-[#f0545468] rounded-sm duration-500'
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#F05454" } : undefined
          }>
          Blog
        </NavLink>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className='h-10 w-10 flex align-middle cursor-pointer md:hidden  mr-8 z-40'>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default Header;
