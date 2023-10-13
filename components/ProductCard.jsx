import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link
    className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer shadow-md rounded-lg' 
    href={"/product/1"}
    >
        <img className='w-full' src='/product/product-1.webp' alt='Product Image'/>
        <div className='p-4 text-black/[0.9]'>
          <h2 className='text-lg font-medium'>Product Name</h2>
          <div className='flex items-center text-black/[0.5]'>
            <p className='mr-2 text-lg font-semibold'>$20</p>
            <p className='text-base font-medium line-through'>$25.00</p>
            <p className='ml-auto text-base font-medium text-red-400'>20% off</p>
          </div>
          
        </div>
    </Link>
  )
}

export default ProductCard