import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import Typed from "react-typed";

export default function Navbar({ navmenu }) {
  const [nav, setNav] = useState(false);

  //   for closing and opening of slide menu on mobile
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between h-18 max-w-[1240] mx-auto px-8 text-white shadow-lg bg-black ">
      {/* image for navbar */}

      <Link to="/">
        <div
          onClick={() => {
            nav && handleNav();
          }}
          className="text-red-500 text-2xl"
        >
          <Typed
            strings={["NILABH ANJAN CHUTIA"]}
            typeSpeed={40}
            backSpeed={50}
          />
        </div>
      </Link>

      {/* menu for navbar mapped */}
      <ul className="hidden md:flex text-white">
        {navmenu.map((link) => (
          <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* burger button and cross button on mobile view */}

      <div onClick={handleNav} className=" flex md:hidden z-10 ">
        {nav ? (
          <AiOutlineClose size={20}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={20}></AiOutlineMenu>
        )}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "absolute right-0 top-0 w-[60%] border-r border-r-gray-900 bg-black h-auto ease-in-out duration-1000 md:hidden"
            : "fixed right-[-100%] top-0 h-full "
        }
      >
        {/*1st nav bar  mobile menu list mapped */}
        <ul className="text-xs p-3 uppercase ">
          {navmenu.map((link) => (
            <li
              onClick={handleNav}
              key={link.name}
              className="p-4 border-b border-red-500"
            >
              <Link to={link.link} className="text-white-900 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* a close button on mobile menu itself */}
        <AiOutlineClose
          className="m-5"
          onClick={handleNav}
          size={20}
        ></AiOutlineClose>
      </div>
    </div>
  );
}
