import React, { useEffect, useState } from 'react';
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const matchedProduct = products.find(p => p.id === parseInt(id));
        setProduct(matchedProduct || null);
    }, [id, products]);

    if (!product) return <div className='text-center py-10 text-xl'>Loading...</div>;

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-x-8'>
                {/* Product Image */}
                <div className='md:w-1/2 p-4 shadow-md flex justify-center items-center h-96 bg-white rounded'>
                    <img src={product.image} alt={product.name} className='h-full object-contain' />
                </div>

                {/* Product Information */}
                <div className='md:w-1/2 p-4 shadow-md flex flex-col justify-center gap-y-4 bg-white rounded'>
                    <h2 className='text-3xl font-semibold'>{product.name}</h2>
                    <p className='text-xl font-bold text-gray-800'>&#8377; {product.price.toFixed(2)}</p>

                    {/* Quantity and Add to Cart */}
                    <div className='flex items-center gap-x-3'>
                        <input
                            type='number'
                            id='quantity'
                            min='1'
                            defaultValue='1'
                            className='border border-gray-300 rounded p-1 w-16 text-center'
                        />
                        <button className='bg-red-500 text-white py-2 px-5 rounded hover:bg-red-600 transition-all'>
                            Add to Cart
                        </button>
                    </div>

                    {/* Product Options */}
                    <div className='mt-4 space-y-2 text-gray-700'>
                        <p className='flex items-center gap-2'>
                            <FaCarSide />
                            Delivery & Return
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaQuestion />
                            Ask a Question
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className='mt-10'>
                <h3 className='text-xl font-semibold mb-2'>Product Description</h3>
                <p className='text-gray-700 leading-relaxed'>
                    Product Description will go here. You can add specifications, usage instructions, or brand info.
                </p>
            </div>
        </div>
    );
};

export default ProductDetails;
