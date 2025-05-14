import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate();

    if (!order) return <p className='text-center mt-10'>No order information available.</p>;

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-semibold mb-4'>Thank you for your order!</h2>
            <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>

            <div className='mt-6 p-4 border rounded-lg bg-gray-100'>

                <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
                <p className='mb-4'>Order Number: <strong>{order.orderNumber}</strong></p>


                <div className='mb-4'>
                    <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
                    <p>{order.shippingInformation.address}</p>
                    <p>{order.shippingInformation.city}</p>
                    <p>{order.shippingInformation.zip}</p>
                </div>


                <div>
                    <h4 className='text-md font-semibold mb-2'>Products Ordered</h4>
                    {order.products?.map(({ id, name, quantity, price }) => (
                        <div key={id} className='flex justify-between mt-2'>
                            <p>{name} × {quantity}</p>
                            <p>&#8377; {(price * quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>


                <div className='mt-4 flex justify-between text-lg font-medium'>
                    <span>Total Price:</span>
                    <span>&#8377; {order.totalPrice.toFixed(2)}</span>
                </div>
            </div>


            <div className='mt-6 flex flex-wrap gap-4'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded-sm'>
                    Order Tracking
                </button>
                <button
                    className='bg-red-500 text-white py-2 px-4 hover:bg-red-600 rounded-sm'
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default Order;
