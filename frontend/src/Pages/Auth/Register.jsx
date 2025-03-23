import React from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='w-screen h-screen relative  '>
        <div className='grid grid-cols-1  md:grid-cols-2 relative w-full h-full overflow-scroll md:overflow-hidden '>


        <div className='relative w-full h-full '>
    <img src='/Svgs/Register.svg' className='h-[90%]' alt='register' />
</div>


{/* Form */}

<div className=" flex flex-col  items-center py-5 justify-content-center relative text-start w-full h-screen  ">
      {/* Heading */}
      

      {/* Form */}
      <form className="w-full max-w-md shadow-sm shadow-[#9d4edda2] mt-5 p-10 rounded-md  ">
        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="mb-1">Email address*</label>
          <div className="relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md"
            />
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="mb-1">Password*</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 pl-10 pr-4 rounded-md bg-gray-100 focus:outline-[#0F9E99]"
            />
            <FaLock className="absolute left-3 top-4 text-gray-400" />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-4">
          <label className="mb-1">Confirm Password*</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 pl-10 pr-4 rounded-md bg-gray-100 focus:outline-[#0F9E99]"
            />
            <FaLock className="absolute left-3 top-4 text-gray-400" />
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-[#9d4edd] cursor-pointer font-semibold text-white py-3 rounded-md  transition"
        >
          Sign Up
        </button>

        {/* Social Sign Up */}
        <div className="mt-5 text-center text-sm text-gray-500">or</div>
        <div className="flex flex-col gap-3 mt-3">
          <button className="flex items-center cursor-pointer justify-center gap-3 w-full bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition">
            <FcGoogle
             size={20} /> Sign up with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-md hover:bg-[#166FE5] transition">
            <FaFacebook size={20} /> Sign up with Facebook
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <Link
        
          className="text-[#9d4edd] font-semibold transition-all hover:underline"
        >
          Login here
        </Link>
        </p>
      </form>
    </div>




{/*  */}


        </div>
      
    </div>
  )
}

export default Register
