import React from "react";
import NavLinkFooter from "./NavlinkFooter";

const Footer = () => {
  return (
    <div className="w-full bg-blue-500 ">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center ">
        <ul className="flex items-center justify-center sm:gap-[10vw] gap-2 py-10">
          <NavLinkFooter links="Products" linkName="product" />
          <NavLinkFooter links="Services" linkName="service" />
          <NavLinkFooter links="About" linkName="about" />
          <NavLinkFooter links="partners" linkName="partners" />
        </ul>
        <p className="my-5 mb-14 text-white text-center">&copy; 2024 Jay Mahadev Printer Services.<br className="sm:flex text-center"/> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
