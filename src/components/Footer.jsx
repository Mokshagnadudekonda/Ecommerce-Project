import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-gray-600 text-white py-8 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
                <div>
                    <h3 className='text-2xl font-semibold'>Jollycart</h3>
                    <p className='mt-4'>Your One-step for all your needs. Shop with us and experience the best online shopping experience</p>
                </div>
                <div className='flex flex-col md:items-center'>
                    <h2 className='text-xl font-semibold'>Quick Links</h2>
                    <ul className='mt-4 space-y-2'>
                        <li>
                            <Link to="/" className='hover:underline'>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='hover:underline'>Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='hover:underline'>Contact</Link>
                        </li>
                        <li>
                            <Link to="/about" className='hover:underline'>About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Follow Us</h2>
                    <div className='flex mt-4 space-x-4 text-xl'>
                        <a href="https://www.instagram.com/mokshagna_08/?next=%2F" className='text-red-500'><FaInstagram /></a>
                        <a href="https://x.com/DudekondaMoksh1" className='text-blue-500'><FaTwitter /></a>
                        <a href="https://github.com/Mokshagnadudekonda" className='text-white'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mokshagna-dudekonda-4b1384320/" className='text-blue-500'><FaLinkedinIn /></a>
                    </div>
                    <form className='flex items-center mt-6'>
                        <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
                        <button className='bg-red-500 text-white rounded-r-lg py-2 px-4'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='mt-8 pt-4 border-t border-gray-700'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <p>&copy; 2025 Jollycart All rights reserved</p>
                    <div className='flex space-x-4 mt-4 md:mt-0'>
                        <a href="" className='hover:underline'>Privacy Policy</a>
                        <a href="" className='hover:underline'>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer