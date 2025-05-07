import React from 'react'
import kid from '../assets/images/kid.png'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.png'

const CategoreySection = () => {
    const categorey = [
        {
            image: men,
            title: "Men"
        },
        {
            image: women,
            title: "Women"
        },
        {
            image: kid,
            title: "Kids"
        }
    ]
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {
                categorey.map((categorey, index) => {
                    const { image, title } = categorey;
                    return (
                        <div key={index} className='relative h-64 md:h-72 transition-transform duration-300 hover:scale-105 cursor-pointer'>
                            <img src={image} alt="Image" className='md:w-full h-full rounded shadow-lg' />
                            <div className='absolute top-20 left-12'>
                                <p className='text-2xl font-bold'>{title}</p>
                                <p className='text-gray-700'>View All</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoreySection