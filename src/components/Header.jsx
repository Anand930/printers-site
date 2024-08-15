import React, { useState } from "react";
import NavLinks from "./NavLinks";
import menuIcon from "../assets/img/more.png";
import removeIcon from "../assets/img/close.png";

const Header = () => {
  const [visible, setVisible] = useState("none");
  return (
    <header className="py-2 mx-auto  md:max-w-4xl xl:max-w-7xl lg:max-w-5xl ">
      <div className="  py-1">
        <nav className="flex justify-between items-center  lg:max-w-7xl m-auto ">
          <h1 className="font-extrabold mx-2 text-red-500 bg-blue-100 rounded-lg p-1 font-logo text-sm text-center tracking-widest lg:text-2xl md:text-xl lg:ml-5 xl:text-3xl sm:text-lg">
            Jay Mahadev <br />
            Printer Services
          </h1>
          <div style={{display:`${visible}`}} className="sm:hidden  flex-col right-[8px] top-[8px] absolute bg-blue-950 px-4  py-4 rounded-xl">
            <div className="flex items-center justify-end mb-6  " onClick={()=>{setVisible("none")}}>
              <img className="w-5" src={removeIcon} alt="removeicon" />
            </div>
            <NavLinks onClick={()=>setVisible("none")} links="Products" linkName="product" />
            <NavLinks onClick={()=>setVisible("none")} links="Services" linkName="service" />
            <NavLinks onClick={()=>setVisible("none")} links="partners" linkName="partners" />
            <NavLinks onClick={()=>setVisible("none")} links="About" linkName="about" />
          </div>
          <ul className="md:flex gap-3 items-center hidden  ">
            <NavLinks onClick={()=>{}} links="Products" linkName="product" />
            <NavLinks onClick={()=>{}} links="Services" linkName="service" />
            <NavLinks onClick={()=>{}} links="partners" linkName="partners" />
            <NavLinks onClick={()=>{}} links="About" linkName="about" />
          </ul>
          <div className="flex items-center justify-center w-8 mx-4 md:hidden" onClick={()=>{setVisible("flex")}}>
            <img src={menuIcon} alt="" />
          </div>
          <div className="md:flex hidden flex-col bg-blue-100 p-1 rounded-xl">
            <div className="flex  lg:mr-5 items-center justify-center ">
              {/* <img src={iphone} width={"30px"} alt="" /> */}
              <p className="text-red-500 font-bold  sm:text-base text-xs">
                +91 &nbsp; 9812149626
              </p>
            </div>
            <div className="flex">
              {/* <img src={letter} width={"30px"} alt="" /> */}
              <p className="text-red-500 font-bold tracking-tighter text-xs">
                sharma.madan1234@gmail.com
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
