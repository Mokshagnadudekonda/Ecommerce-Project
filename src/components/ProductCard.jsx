import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white p-4 shadow rounded relative transform transition-transform duration-300 hover:scale-105'>
            <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray-600'>&#8377; {product.price}</p>
            <div className='flex items-center mt-2'>
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-gray-400' />
            </div>
            <div className='absolute bottom-2 right-4 flex justify-center items-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-24 hover:bg-red-600'>
                <span className='group-hover:hidden'>+</span>
                <span className='hidden group-hover:block'>Add to cart</span>
            </div>
        </div>
    )
}

export default ProductCard