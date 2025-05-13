import React from 'react'

const Login = ({ openSignUp }) => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <form>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input type="email" className='border w-full py-2 px-3' placeholder='Enter Email' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" className='border w-full py-2 px-3' placeholder='Enter Password' />
                </div>
                <div className='mb-4 flex justify-between items-center'>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" className='form-checkbox' />
                        <span className='ml-2 text-gray-600'>Remeber Me</span>
                    </label>
                    <a href="#" className='text-red-500'>Forget Password</a>
                </div>
                <div className='mb-4'>
                    <button className='w-full bg-blue-500 hover:bg-blue-600 rounded-sm text-xl font-semibold text-white py-2'>Login</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>New User?</span>
                <button className='text-blue-600 text-bold ml-1 text-lg' onClick={() => openSignUp()}>Create An Account</button>
            </div>
        </div>
    )
}

export default Login