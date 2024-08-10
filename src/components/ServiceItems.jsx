import React from "react";

const ServiceItems = ({ src, serviceDescription }) => {
  return (
    <div className=" ">
      <div className="rounded-2xl border-2 border-blue-800 bg-blue-200 ">
        <img src={src} alt={src} />
      </div>

      <p className="font-display text-3xl flex items-center justify-center py-2 ">{serviceDescription}</p>
    </div>
  );
};

export default ServiceItems;
