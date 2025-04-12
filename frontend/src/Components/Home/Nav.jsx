import React, { useState } from 'react';
import { FaBell, FaFacebookMessenger, FaGamepad, FaUserFriends, FaVideo } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { TbArrowLeft, TbGridDots } from "react-icons/tb";

const Nav = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex p-3 justify-between bg-blue-500 rounded-md shadow-md">

      {/* Logo & Search Input */}
      <div className={`flex items-center transition-all duration-300 gap-4 p-2 ${focus ? 'rounded shadow-3xl shadow-blue-300/50 bg-white' : ''}`}>
        
        {/* Show back arrow only when focused */}
        {focus && (
  <span className="flex items-center justify-center bg-gray-100 rounded-full p-2">
    <TbArrowLeft
      className="text-black text-[1.1rem] cursor-pointer"
      onClick={() => setFocus(false)}
    />
  </span>
)}

        <div className="bg-white p-1 rounded-full shadow-md flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Facebook"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="w-full p-1 pl-3 outline-none bg-transparent text-gray-700"
          />
        </div>
      </div>

      {/* Center Icons */}
      <div className='flex items-center gap-10'>
        <GoHomeFill className="text-white text-2xl cursor-pointer" />
        <FaUserFriends className="text-white text-2xl cursor-pointer" />
        <FaVideo className="text-white text-2xl cursor-pointer" />
        <FaGamepad className="text-white text-2xl cursor-pointer" />
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-5'>
        <span className='flex items-center justify-center bg-white rounded-full p-2'>
          <TbGridDots className="text-black text-xl cursor-pointer" />
        </span>
        <span className='flex items-center justify-center bg-white rounded-full p-2'>
          <FaFacebookMessenger className="text-black text-xl cursor-pointer" />
        </span>
        <span className='flex items-center justify-center bg-white rounded-full p-2'>
          <FaBell className="text-black text-xl cursor-pointer" />
        </span>
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full cursor-pointer">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
