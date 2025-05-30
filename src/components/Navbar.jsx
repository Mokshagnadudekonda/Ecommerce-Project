import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../Redux-toolkit/productSlice'

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate("/filter-data");
    }

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    }
    const openLogin = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    }
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/">Jollycart</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder='Search For Products' className='w-full border py-2 px-4' onChange={(e) => setSearch(e.target.value)} />
                        <FaSearch className='absolute top-3 right-3 text-blue-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg'></FaShoppingCart>
                        {products.length > 0 && (<span className='absolute top-0 text-xs w-3 left-3 bg-red-500 rounded-full flex justify-center items-center text-white'>{products.length}</span>)}
                    </Link>
                    <button className='hidden md:block ' onClick={() => setIsModalOpen(true)}>Login | Register</button>
                    <button className='block md:hidden' onClick={() => setIsModalOpen(true)}>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center space-x-10 py-4 font-bold'>
                <Link to="/" className='hover:underline'>
                    Home
                </Link>
                <Link to="/shop" className='hover:underline'>
                    Shop
                </Link>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>
    )
}

export default Navbar