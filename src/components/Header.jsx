import React from "react";
import NavLinks from "./NavLinks";
// import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="py-2 ">
      <div className="  py-1 ">
        <nav className="flex justify-between items-center  max-w-7xl m-auto ">
          <h1 className="font-extrabold text-blue-500 font-logo text-3xl">Jay Mahadev Printer Services</h1>
          <ul className="flex gap-3 items-center  ">
            <NavLinks links="Products" linkName ="product"/>
            <NavLinks links="Services" linkName ="service"/>
            <NavLinks links="About" linkName ="about"/>
            <NavLinks links="contact" linkName ="contact"/>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
