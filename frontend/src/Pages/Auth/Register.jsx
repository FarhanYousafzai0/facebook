import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { registerUserData, userReset } from '../../features/Users/userSlice';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const { name, username, email, password, confirmPassword, gender } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });

    if (e.target.value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [e.target.name]: false }));


    }
  }


  const {isErrror,isLoading,isSuccess,message} = useSelector((state) => state.auth);

const navigate = useNavigate()
useEffect(()=>{

if(isErrror){
  toast.error(message || "Something went wrong")
}

if(isSuccess){
  toast.success(message || "User registered successfully")

navigate('/otp')

}

disptach(userReset());


},[isErrror,isLoading,isSuccess,message])








  // Handle form submission

  const disptach = useDispatch();
  const handleSubmit = (e)=>{


    e.preventDefault();
      const user ={
        name,
        username,
        email,
        password,
        confirmPassword,
        gender,
      }
      disptach(registerUserData(user));


      setFormFields({
        name: '',
        username: '',
        gender : '',
        email: '',
        password: '',
        confirmPassword: '',
      })

  }





  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === '',
    }));
  };

 

  const inputClass = (field) =>
    `block w-full pl-10 pr-10 py-2.5 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none text-black transition duration-200`;

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>
        <div className='hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-400 to-indigo-600 p-8 items-center justify-center'>
          <div className='text-white text-center space-y-6'>
            <img src='/Svgs/2.svg' className='max-h-80 mx-auto animate-float' alt='Register Illustration' />
            <h2 className='text-3xl font-bold'>Join Us Today!</h2>
            <p className='text-blue-100'>Create your account to get started</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-h-[90vh] py-6 px-4 md:py-8 md:px-10 flex flex-col justify-center">
          <div className='mb-6 text-center md:text-left'>
            <h1 className='text-2xl font-bold text-black'>Create Account</h1>
            <p className='text-black mt-1'>Fill in your details to register</p>
          </div>

          <form className="space-y-6 shadow-md shadow-blue-300 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Full Name*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={inputClass('name')}
                    required
                  />
                  {errors.name && (
                    <PiWarningOctagonFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
              </div>

              {/* Username */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Username*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="johndoe123"
                    className={inputClass('username')}
                    required
                  />
                  {errors.username && (
                    <PiWarningOctagonFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Email*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                    required
                  />
                  {errors.email && (
                    <PiWarningOctagonFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
              </div>

              {/* Gender */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Gender*</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                 
                  className={inputClass('gender')}
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <PiWarningOctagonFill className="absolute right-3 top-9 transform -translate-y-1/2 text-red-500" />
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Password*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    className={inputClass('password')}
                    required
                  />
                  <div className="absolute inset-y-0 right-8 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </div>
                  {errors.password && (
                    <PiWarningOctagonFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-black">Confirm Password*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    className={inputClass('confirmPassword')}
                    required
                  />
                  <div className="absolute inset-y-0 right-8 pr-3 flex items-center cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </div>
                  {errors.confirmPassword && (
                    <PiWarningOctagonFill className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r cursor-pointer from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-sm text-black">or sign up with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition duration-200 text-black"
              >
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full bg-[#1877F2] text-white py-2.5 px-4 rounded-lg hover:bg-[#166FE5] transition duration-200"
              >
                <FaFacebook size={20} />
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>

            {/* Already have an account */}
            <div className="text-center text-sm text-black">
              Already have an account?{' '}
              <Link to="/" className="font-semibold text-blue-500 hover:text-blue-700 hover:underline transition duration-200">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
