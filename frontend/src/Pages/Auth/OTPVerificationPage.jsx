import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { otpVerifyData, userReset } from '../../features/Users/userSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [activeInput, setActiveInput] = useState(0);
  const [resendTime, setResendTime] = useState(30);
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (resendTime > 0) {
      const timer = setTimeout(() => setResendTime((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTime]);

  useEffect(() => {
    if (isError) {
      toast.error(message || 'Something went wrong!');
    }
    if (isSuccess) {
      toast.success(message || 'Verified Successfully!');
      navigate('/home');
    }
    dispatch(userReset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newOtp = pasteData.split('').slice(0, 6);
      setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);
      setActiveInput(Math.min(newOtp.length, 5));
      inputRefs.current[Math.min(newOtp.length - 1, 5)]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    if (finalOtp.length === 6) {
      const otpData = {
        otp: finalOtp,
        id: user?._id,// adjust according to your user object
      };
      dispatch(otpVerifyData(otpData));
    } else {
      toast.error('Please fill all fields!');
    }
  };

  const resendOTP = () => {
    if (resendTime === 0) {
      setResendTime(30);
      toast.success('New OTP has been sent!');
      // Dispatch API to resend OTP if needed here
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-blue-500 flex items-center justify-center p-4 overflow-hidden">
      <AnimatePresence>
        {!isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md p-8"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-gradient-to-r from-blue-50 to-blue-500 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-center text-black mb-2"
            >
              Verify Your Account
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-black mb-8"
            >
              We've sent a verification code to your device
            </motion.p>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-8">
                {otp.map((digit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      onFocus={() => setActiveInput(index)}
                      className={`w-12 h-12 text-2xl text-center font-bold text-black rounded-lg border-2 bg-white bg-opacity-10 backdrop-blur-sm focus:outline-none transition-all duration-200 ${
                        isError
                          ? 'border-red-500'
                          : activeInput === index
                          ? 'border-purple-400'
                          : 'border-purple-200 border-opacity-50'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={otp.some((digit) => digit === '') || isLoading}
                className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 ${
                  otp.some((digit) => digit === '') || isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-pink-500 hover:shadow-lg'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Verifying...
                  </div>
                ) : (
                  'Verify Account'
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-black">
                Didn't receive code?{' '}
                <button
                  onClick={resendOTP}
                  disabled={resendTime > 0}
                  className={`font-medium ${
                    resendTime > 0
                      ? 'text-purple-300 cursor-not-allowed'
                      : 'text-white hover:text-purple-200 underline'
                  }`}
                >
                  {resendTime > 0 ? `Resend in ${resendTime}s` : 'Resend OTP'}
                </button>
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="mb-6 inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Verification Successful!
            </h2>
            <p className="text-black mb-6">
              Your account has been verified successfully.
            </p>
            <div
              onClick={() => navigate('/home')}
              className="w-full bg-gradient-to-r from-green-400 to-teal-500 py-3 px-4 rounded-xl font-bold text-white cursor-pointer hover:opacity-90 transition-all"
            >
              Continue to Dashboard
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating background circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="absolute rounded-full bg-blue-500 mix-blend-overlay blur-xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
    </div>
  );
};

export default OTPVerificationPage;
