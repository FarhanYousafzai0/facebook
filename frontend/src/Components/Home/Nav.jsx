import React, { useState } from 'react';
import { FaBell, FaFacebookMessenger, FaGamepad, FaUserFriends, FaVideo } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { TbArrowLeft, TbGridDots } from "react-icons/tb";
import nav_data from './Data/NavData.jsx';
import Menu from './Data/RightSideDataNav/Menu.jsx';
import AccountSetting from './Main-content/AccountSetting.jsx';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [focus, setFocus] = useState(false);
  const {user} = useSelector((state)=>state.auth)
  const [openMenu,setOpenMenu] = useState(false);
  const [openAcount,setOpenAcount] = useState(false);

  const location = useLocation();

  return (
    <>
    
      <div className="flex items-center justify-between px-10 bg-white h-[70px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] sticky top-0 z-50 ">
        
        {/* Left Section - Logo & Search */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 md:flex-none">
          <div className={`flex items-center transition-all duration-300 rounded-md ${focus ? 'p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white w-full' : ''}`}>
            {!focus && (
              <Link to='/home'>

<img 
                src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" 
                alt="Logo" 
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              </Link>
            )}
            
            {focus && (
              <span className="flex items-center justify-center bg-gray-100 rounded-full p-2 mr-2">
                <TbArrowLeft
                  className="text-black text-[1.1rem] cursor-pointer transition-all duration-300"
                  onClick={() => setFocus(false)}
                />
              </span>
            )}

            <div className={`bg-gray-100 px-3 py-1 rounded-full shadow-inner flex items-center transition-all duration-300 ${focus ? 'flex-1' : 'w-[40px] md:w-auto'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                />
              </svg>

              <input
                type="text"
                placeholder={focus ? "Search Facebook" : ""}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className={`p-1 outline-none bg-transparent text-black ${focus ? 'w-full pl-3' : 'w-0 md:w-full md:pl-3'}`}
              />
            </div>
          </div>
        </div>

        {/* Center Icons - Hidden on small screens when search is focused */}
        {(!focus || window.innerWidth >= 768) && (
          <ul className='hidden md:flex items-center list-none gap-1 lg:gap-4 mx-2'>
            {nav_data?.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={index}
                  className={`relative text-2xl px-4 py-3 rounded-md group cursor-pointer
                    ${isActive ? 'text-blue-600' : 'text-gray-600'}
                    hover:bg-gray-100 transition-colors duration-200`}
                >
                  <Link to={item.path} className="flex flex-col items-center">
                    {item.icon}
                    
                    {/* Modern animated underline */}
                    {isActive && (
                      <motion.span 
                        className="absolute w-5 h-[3px] rounded-full bg-blue-600 top-[105%]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                        layoutId="navUnderline"
                      />
                    )}
                  </Link>

                  {/* Enhanced tooltip with animation */}
                  <motion.span 
                    className={`absolute top-full -translate-x-1/2 left-1/2 rounded-md text-white bg-gray-800 px-2 py-1 text-xs whitespace-nowrap pointer-events-none`}
                    initial={{ opacity: 0, y: -5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item?.title}
                    <span className="absolute w-2 h-2 bg-gray-800 rotate-45 -top-1 left-1/2 -translate-x-1/2"></span>
                  </motion.span>
                </li>
              );
            })}
          </ul>
        )}

        {/* Right Icons - Hidden on small screens when search is focused */}
        <div className={`flex items-center gap-2 md:gap-4 ${focus ? 'hidden md:flex' : 'flex'}`}>
          <span 
            onClick={() => setOpenMenu(!openMenu)} 
            className='relative group bg-gray-200 rounded-full p-2 flex items-center justify-center'
          >
            <TbGridDots className="text-gray-600 text-xl cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Menu
            </span>
            {openMenu && <Menu />}
          </span>

          <span className='relative group bg-gray-200 rounded-full p-2 hidden md:flex items-center justify-center'>
            <FaFacebookMessenger className="text-gray-600 text-xl cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Messenger
            </span>
          </span>
          
          <span className='relative group bg-gray-200 rounded-full p-2 hidden md:flex items-center justify-center'>
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap`}>
              Notifications
            </span>
          </span>
          
          <div
            onClick={() => setOpenAcount(!openAcount)}
            className="avatar avatar-online relative group"
          >
            <div className="w-9 h-9 rounded-full cursor-pointer overflow-hidden">
              <img src={`${user?.profilePic}`} alt="Profile" className="w-full h-full object-cover"/>
              <span className="absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-2 py-1 text-xs whitespace-nowrap">
                Account
              </span>
            </div>
            {openAcount && <AccountSetting onClose={() => setOpenAcount(false)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;