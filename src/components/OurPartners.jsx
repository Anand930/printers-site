import React from 'react'
import partnerImg from '../assets/img/pngegg.png'
import PartnerItems from './PartnerItems'

const OurPartners = () => {
  return (
    <div className="" id="partners">
      <div className="flex flex-col max-w-7xl m-auto items-center justify-center animate-slide-top  ">
        <p className="font-display text-3xl sm:text-5xl m-10 font-extrabold text-blue-700">
          Our Business Partners
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 sm:gap-14 px-10 md:px-4 ">
          <PartnerItems src={partnerImg}/>
          <PartnerItems src={partnerImg}/>
          <PartnerItems src={partnerImg}/>
          <PartnerItems src={partnerImg}/>
        </div>
      </div>
    </div>
  )
}

export default OurPartners