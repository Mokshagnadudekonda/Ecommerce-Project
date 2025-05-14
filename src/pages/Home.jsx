import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import heroBanner from "../assets/images/heroBanner.jpg";
import Infosection from '../components/Infosection';
import CategoreySection from '../components/CategoreySection';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux-toolkit/productSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(setProducts(mockData));
    }, [dispatch]);

    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
            <div className='mx-auto py-4 flex flex-col md:flex-row gap-6'>
                {/* Categories Section */}
                <div className='w-full md:w-3/12'>
                    <div className='bg-red-400 text-white text-xs font-bold px-2 py-2.5'>
                        Shop By Categories
                    </div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Categories.map((category, index) => (
                            <li key={index} className='flex items-center text-sm font-medium'>
                                <div className='w-2 h-2 border border-red-400 rounded-full mr-2'></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hero Banner Section */}
                <div className='w-full relative'>
                    <img src={heroBanner} alt="Hero Banner" className='w-full h-52 md:h-full object-cover rounded-md' />
                    <div className='absolute top-10 left-4 md:top-28 md:left-32 text-center md:text-left'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Welcome To Jollycart</h2>
                        <p className='text-lg md:text-xl mt-2.5 font-bold text-gray-800'>Millions of Products</p>
                        <button className='bg-red-500 px-6 md:px-8 py-1.5 mt-4 text-white hover:bg-red-600 rounded transform transition-transform duration-300 hover:scale-105'>
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Section & Category Section */}
            <Infosection />
            <CategoreySection />

            {/* Top Products */}
            <div className='mx-auto py-12'>
                <h1 className='text-2xl text-center font-bold mb-6'>Top Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {products.slice(0, 5).map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
