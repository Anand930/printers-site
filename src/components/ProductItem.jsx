import React from 'react'

const ProductItem = ({src, alt, productName}) => {
  return (
    <div className='border-2  p-6 rounded-2xl bg-blue-300 border-blue-800 transition-all '>
        <img   width={"280px"}  src={src} alt={alt} />
        <p className='flex items-center justify-center font-display text-3xl'>{productName}</p>
      </div>
  )
}

export default ProductItem