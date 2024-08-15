import React from 'react'


const AboutItems = ({Question1,Question2,Answer1,Answer2, src1, src2}) => {
  return (
    <div className='md:mx-0 mx-8'>
        <div className="gap-3 py-4 md:flex justify-between ">
          <div className='md:w-[70%] w-full'>
            <h1 className="flex font-semibold text-3xl my-5 ">{Question1}</h1>
            <p>
            {Answer1}
            </p>
          </div>
          <div className="border-2 md:flex items-center justify-center md:mt-0 mt-10 my-auto border-blue-800 bg-blue-300 rounded-3xl ">
            <img className='rounded-3xl md:w-[400px] md:h-[300px] '  src={src1} alt="" />
          </div>
        </div>
        <div className="md:flex flex-row-reverse items-center justify-between gap-10 py-14 ">
          <div className='md:w-[70%] '>
            <h1 className="flex font-semibold text-3xl my-5">{Question2}</h1>
            <p>
            {Answer2}
            </p>
          </div>
          <div className="border-2 border-blue-800 bg-blue-300 rounded-3xl md:mt-0 mt-10  flex items-center justify-center">
            <img className='rounded-3xl md:w-[400px] md:h-[300px]'  src={src2} alt=""  />
          </div>
        </div>
        
    </div>
  )
}

export default AboutItems;