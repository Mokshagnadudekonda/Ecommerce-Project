import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const Infosection = () => {
    const infoItem = [
        {
            icon: <FaShippingFast className='text-3xl text-red-500' />,
            title: "Free Shipping",
            description: "Get Your Orders Delivered With No Extra Cost"
        },
        {
            icon: <FaHeadset className='text-3xl text-red-500' />,
            title: "Support 24/7",
            description: "We are here to assist you at any time"
        },
        {
            icon: <FaMoneyBillWave className='text-3xl text-red-500' />,
            title: "100% Money Back",
            description: "Full refund if you are not satisfied"
        },
        {
            icon: <FaLock className='text-3xl text-red-500' />,
            title: "Payment Secure",
            description: "Your payment information is safe with us"
        },
        {
            icon: <FaTag className='text-3xl text-red-500' />,
            title: "Discount",
            description: "Enjoy the best prices on our products"
        },
    ]
    return (
        <div className='bg-white py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    infoItem.map((item, index) => {
                        const { icon, title, description } = item;
                        return (
                            <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer'>
                                {icon}
                                <h3 className='mt-4 text-xl font-semibold'>{title}</h3>
                                <p className='mt-2 text-gray-600'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Infosection