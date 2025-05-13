import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import noProductFound from "../assets/images/no-product-found.webp"
const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
    return (
        <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24'>
            {filterProducts.length > 0 ?
                <>
                    <h1 className='text-2xl text-center font-bold mb-6'>Shop</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                        {
                            filterProducts.map((product) => {
                                return (
                                    <ProductCard product={product} />
                                )
                            })
                        }
                    </div>
                </> :
                <div className='flex justify-center'>
                    <img src={noProductFound} alt="" className='w-1/2 h-1/2 rounded-lg' />
                </div>
            }

        </div>
    )
}

export default FilterData