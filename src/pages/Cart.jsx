import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/images/empty-cart.png'
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Redux-toolkit/cartSlice';
import { useNavigate } from 'react-router-dom';
import ChangeAddress from '../components/ChangeAddress';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='container mx-auto py-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 min-h-96'>
            {
                cart.products.length > 0 ?
                    <div>
                        <h3 className='text-xl sm:text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                        <div className='flex flex-col lg:flex-row justify-between gap-8 mt-8'>
                            {/* Left section */}
                            <div className='lg:w-2/3 w-full'>
                                <div className='hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                    <p className='w-1/4'>PRODUCTS</p>
                                    <div className='flex w-3/4 justify-between pr-4'>
                                        <p className='w-1/4 text-center'>PRICE</p>
                                        <p className='w-1/4 text-center'>QUANTITY</p>
                                        <p className='w-1/4 text-center'>SUBTOTAL</p>
                                        <p className='w-1/4 text-center'>REMOVE</p>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    {
                                        cart.products.map((product) => (
                                            <div key={product.id} className='flex flex-col md:flex-row items-center justify-between gap-4 p-4 border rounded-md shadow-sm bg-white'>
                                                <div className='flex items-center space-x-4 w-full md:w-1/4'>
                                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                                    <h3 className='text-sm sm:text-base font-semibold'>{product.name}</h3>
                                                </div>

                                                <div className='flex flex-wrap md:flex-nowrap justify-between md:justify-around items-center w-full md:w-3/4 gap-4 text-sm'>
                                                    <p className='text-center md:w-1/4'>&#8377; {product.price}</p>

                                                    <div className='flex items-center justify-center border md:w-1/4'>
                                                        <button className='text-lg font-bold px-2 border-r' onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                                        <p className='text-lg px-3'>{product.quantity}</p>
                                                        <button className='text-lg font-bold px-2 border-l' onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                                    </div>

                                                    <p className='text-center md:w-1/4'>&#8377; {(product.quantity * product.price).toFixed(2)}</p>

                                                    <button className='text-red-500 hover:text-red-600 md:w-1/4 text-center' onClick={() => dispatch(removeFromCart(product.id))}>
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-md border'>
                                <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                                <div className='flex justify-between mb-5 border-b pb-1 text-sm'>
                                    <span>TOTAL ITEMS:</span>
                                    <span>{cart.totalQuantity}</span>
                                </div>

                                <div className='mb-4 border-b pb-2 text-sm'>
                                    <p className='mb-1'>SHIPPING:</p>
                                    <p className='ml-2 mb-1'>SHIPPING TO <span className='font-bold'>{address}</span></p>
                                    <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={() => setIsModalOpen(true)}>Change Address</button>
                                </div>

                                <div className='flex justify-between mb-4 text-sm font-medium'>
                                    <span>Total Price:</span>
                                    <span>&#8377; {cart.totalPrice.toFixed(2)}</span>
                                </div>

                                <button className='w-full bg-green-500 text-white py-2 hover:bg-green-600 rounded-md text-sm sm:text-base' onClick={() => navigate("/checkOut")}>
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>

                        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
                        </Modal>
                    </div>
                    :
                    <div className='flex justify-center'>
                        <img src={emptyCart} alt="Empty Cart" className='h-64 sm:h-72 md:h-80 lg:h-96 object-contain' />
                    </div>
            }
        </div>
    )
}

export default Cart;
