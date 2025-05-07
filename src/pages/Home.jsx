import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import heroBanner from "../assets/images/heroBanner.jpg"
import Infosection from '../components/Infosection'
import CategoreySection from '../components/CategoreySection'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux-toolkit/productSlice'
const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)
    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])

    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                <div className='w-full md:w-3/12'>
                    <div className='bg-red-400 text-white text-xs font-bold px-2 py-2.5'>Shop By Categories</div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {
                            Categories.map((categorey, index) => {
                                return (
                                    <li key={index} className='flex items-center text-sm font-medium'>
                                        <div className='w-2 h-2 border border-red-400 rounded-full mr-2'></div>
                                        {categorey}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='w-full mt-6 md:mt-0 relative'>
                    <img src={heroBanner} alt="Hero Banner" className='w-full h-52 md:h-full object-cover' />
                    <div className='absolute top-10 left-4 md:top-28 md:left-32 text-center md:text-left'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Welcome To Jollycart</h2>
                        <p className='text-lg md:text-xl mt-2.5 font-bold text-gray-800'>Millions of Products</p>
                        <button className='bg-red-500 px-6 md:px-8 py-1.5 mt-4 text-white hover:bg-red-600 rounded transform transition-transform duration-300 hover:scale-105'>
                            SHOP NOW
                        </button>
                    </div>
                </div>

            </div>
            <Infosection />
            <CategoreySection />
            <div>
                <h1>Top Products</h1>
                <div>
                    {
                        products.products.slice(0, 5).map((product) => {
                            return (
                                <div>{product.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
