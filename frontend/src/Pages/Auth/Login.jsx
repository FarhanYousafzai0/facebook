import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const [formFiedls,setFormFiedls]= useState({
 username:'',
 password:'',

});
const {username,password} = formFiedls;



  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>
        {/* Image Section */}
        <div className='hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-400 to-indigo-600 p-8 items-center justify-center'>
          <div className='text-white text-center space-y-6'>
            <img 
              src='/Svgs/1.svg' 
              className='max-h-80 mx-auto ' 
              alt='Login Illustration'
            />
            <h2 className='text-3xl font-bold'>Welcome Back!</h2>
            <p className='text-blue-100'>Sign in to access your personalized dashboard</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 py-12 px-6 md:px-12 flex flex-col justify-center">
          <div className='mb-8 text-center md:text-left'>
            <h1 className='text-3xl font-bold text-gray-800'>Sign In</h1>
            <p className='text-gray-600 mt-2'>Enter your credentials to access your account</p>
          </div>

          <form className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none text-black transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-3 border text-black border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition duration-200"
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 cursor-pointer to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-sm text-gray-500">or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                className="flex items-center justify-center gap-2 cursor-pointer w-full text-black bg-white border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Google</span>
              </button>

              <button 
                type="button"
                className="flex items-center justify-center gap-2  cursor-pointer w-full bg-[#1877F2] text-white py-2.5 px-4 rounded-lg hover:bg-[#166FE5] transition duration-200"
              >
                <FaFacebook size={20} />
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>

            {/* Redirect to Register */}
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-blue-500 hover:text-blue-700 hover:underline transition duration-200"
              >
                Create one
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
