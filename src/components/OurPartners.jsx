import React from 'react'
import PartnerItems from './PartnerItems'
import partner1 from '../assets/img/partner1.png'
import partner2 from '../assets/img/partner2.png'
import partner3 from '../assets/img/partner3.png'
import partner4 from '../assets/img/partner4.png'

const OurPartners = () => {
  return (
    <div className="" id="partners">
      <div className="flex flex-col max-w-7xl m-auto items-center justify-center animate-slide-top  ">
        <p className="font-display text-3xl sm:text-5xl m-10 font-extrabold text-blue-700">
          Our Business Partners
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 sm:gap-14 px-10 md:px-4 ">
          <PartnerItems src={partner1}/>
          <PartnerItems src={partner2}/>
          <PartnerItems src={partner3}/>
          <PartnerItems src={partner4}/>
        </div>
      </div>
    </div>
  )
}

export default OurPartners