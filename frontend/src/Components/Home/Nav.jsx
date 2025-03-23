import React from 'react';
import {  FaBell, FaFacebookMessenger, FaGamepad, FaUserFriends, FaVideo } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { TbGridDots } from "react-icons/tb";

const Nav = () => {
  return (
    <div className="flex p-3 justify-between bg-[#9d4edd] rounded-md shadow-md ">

      {/* Logo & Search Input */}
      <div className="flex items-center gap-4  ">
        <div className="bg-white p-2 rounded-full shadow-md flex items-center  ">
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
            className="w-full p-1 pl-3 outline-none bg-transparent text-gray-700"
          />
        </div>
      </div>

      {/* Center Icons (Home, Friends, etc.) */}
      <div className='flex items-center gap-10'>
        <GoHomeFill className="text-white text-3xl cursor-pointer" />
        <FaUserFriends className="text-white text-3xl cursor-pointer" />
        <FaVideo className="text-white text-3xl cursor-pointer" />
        <FaGamepad className="text-white text-3xl cursor-pointer" />
      </div>

      {/* Right Side Icons (Messenger, Bell, Menu) */}
      <div className='flex items-center gap-5'>
<span className='flex items-center justify-center bg-white rounded-full p-2'>
<TbGridDots className=" text-black text-2xl   cursor-pointer " />

    </span> 
    <span className='flex items-center justify-center bg-white rounded-full p-2'>
    <FaFacebookMessenger className=" text-black text-2xl cursor-pointer " />

    </span>
    <span className='flex items-center justify-center bg-white rounded-full p-2'>
                <FaBell className=" text-black text-2xl   cursor-pointer " />

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
