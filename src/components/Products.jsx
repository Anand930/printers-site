import React from "react";
import ProductItem from "./ProductItem";
import canon from "../assets/img/canon.png";
import hp from "../assets/img/hp.png";
import konica_minolta from "../assets/img/konica_minolta.png";
import kyocera from "../assets/img/kyocera.png";

const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col max-w-7xl m-auto items-center justify-center animate-slide-top  ">
        <p className="font-display text-5xl m-10 font-extrabold text-blue-700">
          Our Products
        </p>
        <div className="grid grid-cols-3 gap-[80px] ">
          <ProductItem
            src={canon}
            alt={"canon"}
            productName={"canon printer"}
          />
          <ProductItem src={hp} alt={"hp"} productName={"hp printer"} />
          <ProductItem
            src={canon}
            alt={"canon"}
            productName={"canon printer"}
          />
          <ProductItem
            src={canon}
            alt={"canon"}
            productName={"canon printer"}
          />
          <ProductItem
            src={canon}
            alt={"canon"}
            productName={"canon printer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
