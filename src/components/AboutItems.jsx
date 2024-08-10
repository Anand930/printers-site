import React from 'react'
import cartilageImg from "../assets/img/cartilageRefilling.png";

const AboutItems = ({Question1,Question2,Answer1,Answer2}) => {
  return (
    <div>
        <div className="flex gap-3 py-4 ">
          <div className='w-[60%]'>
            <h1 className="flex font-semibold text-3xl my-5 ">{Question1}</h1>
            <p>
            {Answer1}
            </p>
          </div>
          <div className="border-2  border-blue-800 bg-blue-300 rounded-3xl ">
            <img src={cartilageImg} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 py-14 ">
          <div className="border-2 border-blue-800 bg-blue-300 rounded-3xl flex items-center justify-center">
            <img  src={cartilageImg} alt=""  />
          </div>
          <div className='w-[60%]'>
            <h1 className="flex font-semibold text-3xl my-5">{Question2}</h1>
            <p>
            {Answer2}
            </p>
          </div>
        </div>
        
    </div>
  )
}

export default AboutItems;