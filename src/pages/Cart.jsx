import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import emptyCart from '../assets/images/empty-cart.png'
import { FaTrashAlt } from 'react-icons/fa';
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState("76/100-3-4-c, Gopi Nagar, Bellari Chowrasta, Kurnool, Andhra Pradesh");
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            {
                cart.products.length > 0 ?
                    <div>
                        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                        <div className='md:grid md:grid-cols-2 md:gap-10 mt-8'>
                            <div className='mr-0 md:mr-10'>
                                <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                    <p>PRODUCTS</p>
                                    <div className='flex space-x-6 md:space-x-11'>
                                        <p>PRICE</p>
                                        <p>QUANTITY</p>
                                        <p>SUBTOTAL</p>
                                        <p>REMOVE</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        cart.products.map((product) => {
                                            return (
                                                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                                    <div className='md:flex items-center space-x-4'>
                                                        <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                                        <div className='flex-1 ml-4'>
                                                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                                                        </div>
                                                    </div>
                                                    <div className='flex space-x-12 items-center'>
                                                        <p >&#8377; {product.price}</p>
                                                        <div className='flex items-center justify-center border'>
                                                            <button className='text-xl font-bold px-1.5 border-r'>-</button>
                                                            <p className='text-xl px-2'>{product.quantity}</p>
                                                            <button className='text-xl px-1 border-l'>+</button>
                                                        </div>
                                                        <p>&#8377; {(product.quantity * product.price).toFixed(2)}</p>
                                                        <button className='text-red-500 hover:text-red-600'>
                                                            <FaTrashAlt />
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md border'>
                                <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                                <div className='flex justify-between mb-5 border-b pb-1'>
                                    <span className='text-sm'>TOTAL ITEMS:</span>
                                    <span>{cart.totalQuantity}</span>
                                </div>
                                <div className='mb-4 border-b pb-2'>
                                    <p>SHIPPING:</p>
                                    <p className='ml-2'>SHIPPING TO{" "}
                                        <span className='text-sm font-bold'>{address}</span>
                                    </p>
                                    <button className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <span>Total Price:</span>
                                    <span>&#8377; {cart.totalPrice.toFixed(2)}</span>
                                </div>
                                <button className='w-full bg-green-500 text-white py-2 hover:bg-green-700 rounded-sm'>
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    : <div className='flex justify-center'>
                        <img src={emptyCart} alt="" className='h-96 bg-white' />
                    </div>
            }
        </div>
    )
}

export default Cart