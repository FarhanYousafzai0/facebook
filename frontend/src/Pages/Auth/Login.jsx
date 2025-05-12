import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { loginUserData, userReset } from '../../features/Users/userSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [count, setCount] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const { username, password } = formFields;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: value.trim() === '' }));
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserData({ username, password }));
  };

  useEffect(() => {
    const blockedUntil = localStorage.getItem('blockedUntil');
    if (blockedUntil && Date.now() < parseInt(blockedUntil)) {
      setBlocked(true);
      const remaining = parseInt(blockedUntil) - Date.now();
      setTimeout(() => {
        setBlocked(false);
        localStorage.removeItem('blockedUntil');
        setCount(0);
      }, remaining);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      const newCount = count + 1;
      setCount(newCount);

      if (newCount >= 5) {
        const unblockTime = Date.now() + 20000;
        localStorage.setItem('blockedUntil', unblockTime.toString());
        setBlocked(true);
        toast.error('Too many attempts. Try again after 20 seconds.');

        setTimeout(() => {
          setBlocked(false);
          localStorage.removeItem('blockedUntil');
          setCount(0);
        }, 20000);
      }
    }

    if (isSuccess) {
      toast.success(message || 'Login Successfully!');
      setCount(0);
      setBlocked(false);
      dispatch(userReset());
      navigate('/home');
    }

    return () => {
      dispatch(userReset());
    };
  }, [isError, isSuccess, message, dispatch]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>
        <div className='hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-400 to-indigo-600 p-8 items-center justify-center'>
          <div className='text-white text-center space-y-6'>
            <img src='/Svgs/1.svg' className='max-h-80 mx-auto' alt='Login Illustration' />
            <h2 className='text-3xl font-bold'>Welcome Back!</h2>
            <p className='text-blue-100'>Sign in to access your personalized dashboard</p>
          </div>
        </div>

        <div className='w-full md:w-1/2 py-12 px-6 md:px-12 flex flex-col justify-center'>
          <div className='mb-8 text-center md:text-left'>
            <h1 className='text-3xl font-bold text-gray-800'>Sign In</h1>
            <p className='text-gray-600 mt-2'>Enter your credentials to access your account</p>
          </div>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-gray-700'>Username</label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaEnvelope className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type='text'
                  name='username'
                  value={username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='your@email.com'
                  className={`block w-full pl-10 pr-10 py-3 border rounded-lg bg-gray-50 outline-none text-black transition duration-200 ${
                    errors.username
                      ? 'border-red-500 focus:ring-red-300 focus:border-red-300'
                      : 'border-gray-300 focus:ring-blue-300 focus:border-blue-300'
                  }`}
                  required
                />
                {errors.username && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-red-500'>
                    <PiWarningOctagonFill size={20} />
                  </div>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FaLock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='••••••••'
                  className={`block w-full pl-10 pr-10 py-3 border text-black rounded-lg bg-gray-50 outline-none transition duration-200 ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-300 focus:border-red-300'
                      : 'border-gray-300 focus:ring-blue-300 focus:border-blue-300'
                  }`}
                  required
                />
                <div
                  className='absolute inset-y-0 right-0 pr-10 flex items-center cursor-pointer text-gray-400 hover:text-gray-600'
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                {errors.password && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-red-500'>
                    <PiWarningOctagonFill size={20} />
                  </div>
                )}
              </div>
              <div className='flex justify-end'>
                <Link to='/forgot-password' className='text-sm text-blue-500 hover:text-blue-700 hover:underline'>
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type='submit'
              disabled={blocked}
              className={`w-full ${
                blocked
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 cursor-pointer to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
              } font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5`}
            >
              {blocked ? 'Blocked' : 'Login'}
            </button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center'>
                <span className='px-2 bg-white text-sm text-gray-500'>or continue with</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <button
                type='button'
                className='flex items-center justify-center gap-2 w-full text-black bg-white border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition duration-200'
              >
                <FcGoogle size={20} />
                <span className='text-sm font-medium'>Google</span>
              </button>

              <button
                type='button'
                className='flex items-center justify-center gap-2 w-full bg-[#1877F2] text-white py-2.5 px-4 rounded-lg hover:bg-[#166FE5] transition duration-200'
              >
                <FaFacebook size={20} />
                <span className='text-sm font-medium'>Facebook</span>
              </button>
            </div>

            <div className='text-center text-sm text-gray-600'>
              Don't have an account?{' '}
              <Link
                to='/register'
                className='font-semibold text-blue-500 hover:text-blue-700 hover:underline transition duration-200'
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
