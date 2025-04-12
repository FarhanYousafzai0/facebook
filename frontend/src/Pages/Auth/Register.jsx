import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='w-screen h-screen bg-white relative p-5   overflow-y-scroll'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full place-content-center'>

        {/* Image Section */}
        <div className='hidden md:flex items-center justify-center'>
          <img src='/Svgs/2.svg' className='h-[80%] object-contain' alt='register' />
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center w-full overflow-y-auto">
          <form className="w-full max-w-2xl shadow-sm shadow-blue-300 p-6 md:p-10 rounded-md bg-white">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="mb-1 text-black">Full Name*</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-12 pl-10 pr-4 outline-0 bg-gray-100 rounded-md focus:outline-blue-300 text-black"
                  />
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              {/* Username */}
              <div className="flex flex-col">
                <label className="mb-1 text-black">Username*</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full h-12 pl-10 pr-4 outline-0 bg-gray-100 rounded-md focus:outline-blue-300 text-black"
                  />
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
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

              {/* Gender */}
              <div className="flex flex-col">
                <label className="mb-1 text-black">Gender*</label>
                <select className="w-full h-12 px-4 bg-gray-100 rounded-md focus:outline-blue-300 text-black">
                  <option value="" disabled selected>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="mb-1 text-black">Password*</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 pl-10 pr-4 outline-0 bg-gray-100 rounded-md focus:outline-blue-300 text-black"
                  />
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label className="mb-1 text-black">Confirm Password*</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full h-12 pl-10 pr-4 outline-0 bg-gray-100 rounded-md focus:outline-blue-300 text-black"
                  />
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-blue-300 cursor-pointer font-semibold text-white  py-3 rounded-md transition"
            >
              Sign Up
            </button>

            {/* Social Sign Up */}
            <div className="mt-5 text-center text-sm text-gray-500">or</div>
            <div className="flex flex-col gap-3 mt-3">
              <button className="flex items-center cursor-pointer justify-center gap-3 w-full bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition">
                <FcGoogle size={20} /> Sign up with Google
              </button>

              <button className="flex items-center cursor-pointer justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-md hover:bg-[#166FE5] transition">
                <FaFacebook size={20} /> Sign up with Facebook
              </button>
            </div>

            {/* Already have an account */}
            <p className="text-center mt-4 text-sm text-black">
              Already have an account?{' '}
              <Link
                to='/user/login'
                className="text-blue-300 font-semibold transition-all "
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
