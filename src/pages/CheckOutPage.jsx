import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const cart = useSelector(state => state.cart);
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zip: ""
    })
    const navigate = useNavigate();

    const handleOrder = () => {
        const randomOrderNumber = Math.floor(Math.random() * 999999) + 1;
        const newOrder = {
            products: cart.products,
            orderNumber: randomOrderNumber.toString().padStart(6, '0'),
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        };
        setOrder(newOrder);
        navigate("/order-conformation");
    };

    return (
        <div className='container mx-auto py-8 px-4 sm:px-6 md:px-12 lg:px-20'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col lg:flex-row gap-6'>
                <div className='w-full lg:w-2/3 space-y-6'>
                    {/* Billing Information */}
                    <div className='border rounded-md p-4'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-sm text-gray-700'>Name</label>
                                <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border rounded' />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700'>Email</label>
                                <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border rounded' />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700'>Phone</label>
                                <input type="text" placeholder='Enter Phone Number' className='w-full px-3 py-2 border rounded' />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className='border rounded-md p-4'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-sm text-gray-700'>Address</label>
                                <input type="text" placeholder='Enter Address' className='w-full px-3 py-2 border rounded' onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700'>City</label>
                                <input type="text" placeholder='Enter City Name' className='w-full px-3 py-2 border rounded' onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-700'>Zip Code</label>
                                <input type="text" placeholder='Enter Zip Code' className='w-full px-3 py-2 border rounded' onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className='border rounded-md p-4'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center'>
                                <input type="radio" name='payment' className='mr-2' checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                <label className='text-sm text-gray-700'>Cash on Delivery</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name='payment' className='mr-2' checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                <label className='text-sm text-gray-700'>Debit Card</label>
                            </div>

                            {paymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg space-y-4'>
                                    <h3 className='text-lg font-semibold'>Debit Card Information</h3>
                                    <div>
                                        <label className='block text-sm text-gray-700 mb-1'>Card Number</label>
                                        <input type="text" placeholder='Enter Card Number' className='w-full px-3 py-2 border rounded' />
                                    </div>
                                    <div>
                                        <label className='block text-sm text-gray-700 mb-1'>Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card Holder Name' className='w-full px-3 py-2 border rounded' />
                                    </div>
                                    <div className='flex flex-col sm:flex-row gap-4'>
                                        <div className='w-full'>
                                            <label className='block text-sm text-gray-700 mb-1'>Expire Date</label>
                                            <input type="text" placeholder='MM/YY' className='w-full px-3 py-2 border rounded' />
                                        </div>
                                        <div className='w-full'>
                                            <label className='block text-sm text-gray-700 mb-1'>CVV</label>
                                            <input type="text" placeholder='CVV' className='w-full px-3 py-2 border rounded' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className='w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md border space-y-4'>
                    <h3 className='text-lg font-semibold'>Order Summary</h3>
                    {cart.products.map(({ id, image, name, price, quantity }) => (
                        <div key={id} className='flex items-start justify-between gap-4'>
                            <img src={image} alt={name} className='w-16 h-16 object-contain rounded' />
                            <div className='flex-1'>
                                <h4 className='text-sm font-semibold'>{name}</h4>
                                <p className='text-sm text-gray-600'>&#8377; {price} x {quantity}</p>
                            </div>
                            <div className='text-sm text-gray-800'>&#8377;{(price * quantity).toFixed(2)}</div>
                        </div>
                    ))}
                    <div className='border-t pt-4 flex justify-between'>
                        <span>Total Price:</span>
                        <span className='font-semibold'>&#8377; {cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button onClick={handleOrder} className='w-full bg-green-500 text-white py-2 hover:bg-green-600 rounded'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;
