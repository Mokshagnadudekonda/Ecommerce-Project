import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {
    const products = useSelector(state => state.product)
    return (
        <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24'>
            <h1 className='text-2xl text-center font-bold mb-6'>Shop</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {
                    products.products.map((product) => {
                        return (
                            <ProductCard product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop