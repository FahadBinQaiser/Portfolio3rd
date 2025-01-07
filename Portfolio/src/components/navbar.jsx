import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="selection:bg-white selection:text-black">
      <nav aria-label="Main Navigation">
        <div className="navbar flex justify-center items-center w-full">
          <div className="bar w-10/12 sm:w-10/12 h-14 m-4 flex justify-between sm:justify-between items-center px-6 sm:px-10 bg-white rounded-xl">
            <h1 className="text-xl sm:text-3xl uppercase font-[Chewy] text-[#2c88f4] font-medium">
              Pookie-Den
            </h1>
            <ul
              className="hidden md:flex flex-row font-[raleway] font-bold text-[15px] gap-10 text-[#2c88f4]"
              role="menu"
            >
              <li
                role="menuitem"
                className="border-b-2 border-transparent hover:border-[#2c88f4] transition-all duration-500 ease-out"
              >
                <a href="#" className="transition-all duration-500 ease-out">
                  Home
                </a>
              </li>
              <li
                role="menuitem"
                className="border-b-2 border-transparent hover:border-[#2c88f4] transition-all duration-500 ease-out"
              >
                <a href="#" className="transition-all duration-500 ease-out">
                  About
                </a>
              </li>
              <li
                role="menuitem"
                className="border-b-2 border-transparent hover:border-[#2c88f4] transition-all duration-500 ease-out"
              >
                <a href="#" className="transition-all duration-500 ease-out">
                  Work
                </a>
              </li>
              <li
                role="menuitem"
                className="border-b-2 border-transparent hover:border-[#2c88f4] transition-all duration-500 ease-out"
              >
                <a href="#" className="transition-all duration-500 ease-out">
                  Blog
                </a>
              </li>
            </ul>
            <div className="md:hidden w-32 pr-2 flex justify-end">
              <button
                id="hamburger"
                className="flex flex-col justify-center gap-1 w-6 h-6 focus:outline-none"
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <span className="block w-full h-[3px] bg-black transition-all"></span>
                <span className="block w-full h-[3px] bg-black transition-all"></span>
                <span className="block w-full h-[3px] bg-black transition-all"></span>
              </button>
            </div>
            <div className="button flex justify-end items-center">
              <button className="transition duration-500 ease-out font-[raleway] rounded-lg w-20 h-8 bg-[#2c88f4] text-sm text-white focus:outline-none">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div
        id="mobile-menu"
        className={`absolute h-full top-20 px-6 w-full shadow-md bg-transparent backdrop-blur-md z-20 transition-all duration-500 ${
          isMenuOpen ? "animate-slide-down" : "animate-slide-up hidden"
        }`}
          >
          <ul
            className="flex flex-col items-start text-white gap-4 py-4 font-[raleway] text-sm"
            role="menu"
          >
            <li role="menuitem">
              <a href="#">Home</a>
            </li>
            <li role="menuitem">
              <a href="#">About</a>
            </li>
            <li role="menuitem">
              <a href="#">Work</a>
            </li>
            <li role="menuitem">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
