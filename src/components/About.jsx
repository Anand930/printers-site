import React from "react";
import AboutItems from "./AboutItems";

const About = () => {
  return (
    <div className="mt-10">
      <div className="max-w-7xl m-auto" id="about">
        <div className="flex items-center justify-center">
          <p className="font-display text-5xl m-10 font-extrabold text-blue-700">
            About Us
          </p>
        </div>
        <div className="px-4 sm:px-20">
          <div>
            <AboutItems
              Question1="Who We Are?"
              Answer1={
                "At Jay Mahadev Printer Services, we are dedicated to providing comprehensive solutions for all your printer and computer needs. Specializing in offering printer machines on a rental basis, we ensure seamless service and maintenance to keep your operations running smoothly. Our expertise and commitment to excellence make us a trusted partner for businesses of all sizes."
              }
              Question2={"What Services Do We Offer?"}
              Answer2={
                "At Jay Mahadev Printer Services, we offer a wide range of solutions tailored to meet your printer and computer needs. Our core services include providing printers and computers (desktops/laptops) on a rental basis, ensuring you have the right equipment without the hassle of ownership. We also specialize in cartridge refilling, supply all necessary accessories for printers and computers, and offer software solutions. Whether you need an operating system installation or specific paid or unpaid software, we've got you covered with our reliable and efficient services."
              }
            />
            <AboutItems
              Question1="Where Are We Located and Where Do We Provide Services?"
              Answer1={
                "Jay Mahadev Printer Services is located in Jamalpur, Gurgaon, Haryana. Our full address is [address]. We serve customers within a 60 km radius, covering areas like Pataudi, Gurgaon, Manesar, Bawal, and more. So far, we have provided services to over 15 clients, and this number is growing rapidly as more people trust us for their printer and computer needs."
              }
              Question2={"Why Choose Us??"}
              Answer2={
                "With over 10 years of experience in the business, Jay Mahadev Printer Services has the expertise to meet all your printer and computer needs. We are dedicated to making our customers happy with our services and are available 24/7 to help you. Just one call, and we’re ready to assist. We offer all the tech solutions a corporate office needs, all in one place, making us the reliable choice for your business."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
