import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listItemStyle = "p-4 font-light text-lg";
  const navLinkStyle = "text-cyan-300 hover:text-cyan-100";
  return (
    <nav className='flex justify-between items-center sticky h-navHeight top-0 z-50  bg-cyan-900 '>
      {/* left nav */}
      <div className='ml-6 text-[clamp(1rem,1rem_+_1vw,4rem)] font-bold text-cyan-300 hover:text-cyan-100 cursor-pointer'>
        <NavLink to='/this-content-i-collected'>
          This Content I Collected
        </NavLink>
      </div>
      {/* right nav */}
      <div className='mx-6 '>
        <svg
          onClick={() => setOpen((prev) => !prev)}
          className='md:hidden cursor-pointer text-cyan-300 hover:text-cyan-100'
          viewBox='0 0 100 80'
          width='25'
          height='25'
          fill='currentColor'
        >
          <rect width='100' height='20'></rect>
          <rect y='30' width='100' height='20'></rect>
          <rect y='60' width='100' height='20'></rect>
        </svg>
        <div
          className={`-z-10 fixed top-0 right-0 min-h-screen min-w-[15rem] md:min-w-max md:min-h-max md:static bg-cyan-900 transition-transform ${
            open ? ` translate-x-0 ` : "translate-x-full md:translate-x-0"
          } `}
        >
          <ul
            className={`flex flex-col gap-10 text-center py-24 md:py-0 md:flex-row md:gap-0`}
          >
            <li className={`${listItemStyle}`}>
              <NavLink
                end
                className={({ isActive }) => {
                  return `${navLinkStyle} ${
                    isActive ? "text-cyan-100" : undefined
                  }`;
                }}
                to='/this-content-i-collected'
              >
                Home
              </NavLink>
            </li>
            <li className={`${listItemStyle}`}>
              <NavLink
                className={({ isActive }) => {
                  return `${navLinkStyle} ${
                    isActive ? "text-cyan-100" : undefined
                  }`;
                }}
                to='/this-content-i-collected/youtube'
              >
                Youtube
              </NavLink>
            </li>
            <li className={`${listItemStyle}`}>
              <NavLink
                className={({ isActive }) => {
                  return `${navLinkStyle} ${
                    isActive ? "text-cyan-100" : undefined
                  }`;
                }}
                to='/this-content-i-collected/media'
              >
                Media
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
