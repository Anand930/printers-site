import React from "react";
// import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="py-2">
      <div className="  py-1 ">
        <nav className="flex justify-between items-center  max-w-7xl m-auto ">
          <h1 className="font-extrabold text-blue-700">LOGO</h1>
          <ul className="flex gap-3 items-center  ">
            <li className="font-display text-blue-800  cursor-pointer font-normal p-3  hover:text-white hover:bg-blue-700 border-2  rounded-2xl hover:border-2 border-transparent hover:border-blue-800 ">About</li>
            <li className="font-display text-blue-800  cursor-pointer font-normal p-3  hover:text-white hover:bg-blue-700 border-2  rounded-2xl hover:border-2 border-transparent hover:border-blue-800 ">Products</li>
            <li className="font-display text-blue-800  cursor-pointer font-normal p-3  hover:text-white hover:bg-blue-700 border-2  rounded-2xl hover:border-2 border-transparent hover:border-blue-800 ">Services</li>
            <li className="font-display text-blue-800  cursor-pointer font-normal p-3  hover:text-white hover:bg-blue-700 border-2  rounded-2xl hover:border-2 border-transparent hover:border-blue-800 ">Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
