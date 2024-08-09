import React from "react";
import Header from "./Header";
import logo from "../assets/img/bgImg.jpg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${logo})` }}
      className="w-full h-[100vh] bg-cover backdrop-blur-3xl bg-no-repeat "
    >
      <Header />
      <div className="flex flex-col items-center justify-center max-w-7xl m-auto ">
        <div className="flex items-center justify-center ">
          <strong className="font-display text-8xl tracking-tighter text-center mt-20 mb-4 text-blue-800 ">
            Transforming Printing with{" "}
            <span className="text-red-500">Reliability</span> and{" "}
            <span className="text-red-500">Quality</span>
          </strong>
        </div>
        <p className="text-center  max-w-4xl text-gray-300">
          Enhance your printing capabilities with our precise and reliable
          services. From routine maintenance to complex repairs, we ensure your
          printers perform exceptionally. Trust us to keep your business running
          smoothly and efficiently, delivering top-notch results every time.
        </p>
      </div>
    </div>
  );
};

export default Hero;