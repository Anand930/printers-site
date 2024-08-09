import React from 'react'

const ProductItem = ({src, alt, productName}) => {
  return (
    <div className='border-2 border-transparent p-6 rounded-2xl hover:bg-blue-300 hover:border-blue-900 transition-all '>
        <img  className="" width={"280px"}  src={src} alt={alt} />
        <p className='flex items-center justify-center font-display text-3xl'>{productName}</p>
      </div>
  )
}

export default ProductItem