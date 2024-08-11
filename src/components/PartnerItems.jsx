import React from "react";

const PartnerItems = ({partnerName,src}) => {
  return (
    <div className="border-2  p-6 rounded-2xl  border-blue-800 transition-all ">
      <img width={"280px"} src={src} alt={`${src}`} />
      <p className="flex items-center justify-center font-display text-3xl">
        {partnerName}
      </p>
    </div>
  );
};

export default PartnerItems;
