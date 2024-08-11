import React from "react";
import ServiceItems from "./ServiceItems";
import printerRepair from "../assets/img/printerRepair.png";
import cartilageRefiling from "../assets/img/cartilageRefilling.png";

const Services = () => {
  return (
    <div className="max-w-7xl m-auto " id="service">
      <div className="">
        <div className="flex items-center justify-center">
          <p className="font-display text-5xl m-10 mb-2 font-extrabold text-blue-700">
            Our Services
          </p>
        </div>
        <div className="m-10 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-20">
          <ServiceItems src={printerRepair}  serviceDescription={"Printer Repairing"}/>
          <ServiceItems src={cartilageRefiling}  serviceDescription={"Printer Repairing"}/>
          <ServiceItems src={cartilageRefiling}  serviceDescription={"Printer Repairing"}/>
          <ServiceItems src={cartilageRefiling} serviceDescription={"Printer Repairing"}/>
          <ServiceItems src={cartilageRefiling} serviceDescription={"Printer Repairing"}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
