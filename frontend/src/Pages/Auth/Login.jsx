import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-screen h-screen bg-white relative overflow-scroll'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-5 relative w-full h-full place-content-center overflow-scroll md:overflow-hidden'>

        {/* Image Section */}
        <div className='relative hidden md:flex items-center justify-center'>
          <img src='/Svgs/1.svg' className='h-full w-full' alt='login' />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center relative text-start w-full h-screen">
          <form className="w-full max-w-md shadow-sm shadow-blue-300 mt-5 p-10 rounded-md bg-white">
            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-black">Email address*</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full h-12 pl-10 pr-4 outline-0 bg-gray-100 rounded-md focus:outline-blue-300 text-black"
                />
                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-black">Password*</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-12 pl-10 pr-4 outline-0 rounded-md bg-gray-100 focus:outline-blue-300 text-black"
                />
                <FaLock className="absolute left-3 top-4 text-gray-400" />
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-300 cursor-pointer  font-semibold text-white  py-3 rounded-md transition"
            >
              Sign In
            </button>

            {/* Social Login */}
            <div className="mt-5 text-center text-sm text-gray-500">or</div>
            <div className="flex flex-col gap-3 mt-3">
              <button className="flex items-center justify-center cursor-pointer gap-3 w-full bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition">
                <FcGoogle size={20} /> Sign in with Google
              </button>

              <button className="flex items-center justify-center cursor-pointer gap-3 w-full bg-[#1877F2] text-white py-3 rounded-md hover:bg-[#166FE5] transition">
                <FaFacebook size={20} /> Sign in with Facebook
              </button>
            </div>

            {/* Redirect to Register */}
            <p className="text-center mt-4 text-sm text-black">
              Don't have an account?{' '}
              <Link
                to="/user/register"
                className="text-blue-300 font-semibold transition-all "
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
