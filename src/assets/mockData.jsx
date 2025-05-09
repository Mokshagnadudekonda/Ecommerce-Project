import { FaStar } from 'react-icons/fa'
import bag from './images/bag.webp'
import boots from './images/boots.webp'
import cap from './images/cap.webp'
import dove from './images/dove.webp'
import headset from './images/headset.webp'
import perfume from './images/perfume.webp'
import sandle from './images/sandle.webp'
import shirt from './images/shirt.webp'
import toys from './images/toys.webp'
import watch from './images/watch.webp'


export const Categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sport",
    "Automotive"
];

export const mockData = [
    {
        id: 1,
        image: bag,
        name: "Bag",
        price: 959,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 2,
        image: boots,
        name: "Boots",
        price: 840,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 3,
        image: cap,
        name: "Cap",
        price: 250,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 4,
        image: perfume,
        name: "Perfume",
        price: 750,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 5,
        image: headset,
        name: "Head Set",
        price: 1750,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 6,
        image: dove,
        name: "Dove Shampoo",
        price: 350,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 7,
        image: sandle,
        name: "Sandle",
        price: 1120,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' /></>
    },
    {
        id: 8,
        image: shirt,
        name: "Shirt",
        price: 650,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' />
            <FaStar className='text-gray-400' /></>
    },
    {
        id: 9,
        image: toys,
        name: "Toys",
        price: 1650,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' /></>
    },
    {
        id: 10,
        image: watch,
        name: "Watch",
        price: 2450,
        stars: <><FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-gray-400' /></>
    }
]