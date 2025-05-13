import React from 'react'

const Register = ({ openLogin }) => {
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input type="text" className='border w-full py-2 px-3' placeholder='Enter Name' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input type="email" className='border w-full py-2 px-3' placeholder='Enter Email' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Password</label>
                        <input type="password" className='border w-full py-2 px-3' placeholder='Enter Password' />
                    </div>

                    <div className='mb-4'>
                        <button className='w-full bg-blue-500 hover:bg-blue-600 rounded-sm text-xl font-semibold text-white py-2'>Sign Up</button>
                    </div>
                </form>
                <div className='text-center'>
                    <span className='text-gray-700'>Already Have An Account?</span>
                    <button className='text-blue-600 ml-1 text-xl text-bold' onClick={() => openLogin()}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Register