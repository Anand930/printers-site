import React, { useState } from "react";
import Header from "./Header";
import logo from "../assets/img/bg5.jpg";
import { ReactTyped } from "react-typed";


const Hero = () => {
  
  return (
    <div
      style={{ backgroundImage: `url(${logo})` }}
      className="w-full h-[100vh] bg-cover  bg-no-repeat  "
    >
      <Header />
      <div className="flex flex-col items-center justify-center h-[70vh] max-w-7xl m-auto ">
        <div className="flex items-center justify-center w-[85%]  ">
          <strong className="font-display text-8xl tracking-normal leading-snug text-center mt-20 mb-4 text-blue-500 ">
            Transforming Printing with
            <div>
              <span className="text-red-500">
                <ReactTyped
                  
                  strings={[
                    "Reliability","Quality","Service","Improvement"
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </span>{" "}
              {/* and <span className="text-red-500"><ReactTyped
                  strings={[
                    "Quality"
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                /></span> */}
            </div>
          </strong>
        </div>
        {/* <p className="text-center  max-w-4xl text-blue-800 mt-6">
          Enhance your printing capabilities with our precise and reliable
          services. From routine maintenance to complex repairs, we ensure your
          printers perform exceptionally. Trust us to keep your business running
          smoothly and efficiently, delivering top-notch results every time.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
