import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-screen h-screen relative bg-[#F2F4F7] p-10'>
        
        <div className='flex items-center w-full h-full justify-center gap-10'>

            <div className='flex  flex-col items-start gap-5 w-1/2'>
                
                <h1 className='text-[#1877F2] text-7xl font-semibold'>facebook</h1>
                <p className='text-black font-semibold w-xl text-2xl '>Facebook helps you connect and share with the people in your life.</p>
            </div>


            <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-facebook text-center mb-4">facebook</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-blue-400 rounded-md  "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-400 "
          />
          <button
            type="submit"
            className="w-full bg-facebook text-white font-bold py-3 rounded-md cursor-pointer bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-facebook text-sm hover:underline">Forgotten password?</a>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
          <button
            className="bg-green-500 text-white py-2 px-4 cursor-pointer rounded-md font-bold hover:bg-green-600 transition duration-300"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
        </div>
        
         </div>
    </>
  )
}

export default Login
