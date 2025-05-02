import React, { useState } from 'react';
import { FaBell, FaFacebookMessenger, FaGamepad, FaUserFriends, FaVideo } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { TbArrowLeft, TbGridDots } from "react-icons/tb";
import nav_data from './Data/NavData.jsx';
import Menu from './Data/RightSideDataNav/Menu.jsx';
import AccountSetting from './Main-content/AccountSetting.jsx';
import { useSelector } from 'react-redux';

const Nav = () => {
  const [focus, setFocus] = useState(false);
  const {user} = useSelector((state)=>state.auth)
const [openMenu,setOpenMenu] = useState(false);
const [openAcount,setOpenAcount] = useState(false);


  return (
    <>
<div className="flex items-center justify-between p-2 bg-white h-[70px]  shadow-[0_8px_30px_rgba(0,0,0,0.12)] ">

{/* Left Section - Logo & Search */}
<div className={`flex items-center gap-3  transition-all rounded-md duration-300 ${focus ? ' p-2 shadow-[0_8px_30px_rgba(0,0,0,0.50)]  ' : ''}`}>

<img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="Logo" className={`w-10 h-10 transition-all duration-200 rounded-full cursor-pointer ${focus ? 'hidden opacity-0 ' : 'flex opacity-100'}`} />

  {focus && (
    <span className="flex items-center justify-center bg-gray-100 rounded-full p-2">
      <TbArrowLeft
        className="text-black text-[1.1rem] cursor-pointer transition-all duration-300"
        onClick={() => setFocus(false)}
      />
    </span>
  )}

  <div className={`bg-gray-100 px-3 py-1 rounded-full shadow-inner flex items-center transition-all duration-300 ${focus ? 'w-full' : ''}`}>
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
      placeholder="Search Facebook"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className="w-full p-1 pl-3 outline-none bg-transparent text-black"
    />
  </div>
</div>

{/* Center Icons */}

  <ul className='flex items-center  list-unstyled gap-10 transition-all duration-300'>
 {nav_data?.map((item,index)=>{
  return <>
   <li className='text-gray-600  text-2xl relative  px-7 py-3  rounded-md hover:bg-gray-100  group cursor-pointer' key={index}>{item.icon}

   <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200  -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-4 py-1 text-sm`}>{item?.title}</span>

   </li>


  
  </>
 })}
  </ul>


{/* Right Icons */}
<div className={`flex items-center gap-4 ${focus ? 'hidden md:flex' : ''}`}>
  

<span onClick={()=>setOpenMenu(!openMenu)} className='flex items-center justify-center relative group bg-gray-200 rounded-full p-2'>
    <TbGridDots className="text-gray-600 text-xl cursor-pointer" />
    
    <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200  -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-4 py-1 text-sm`}>Menu</span>

    
  {openMenu && <Menu />}

  </span>



  <span className='flex items-center group relative justify-center bg-gray-200 rounded-full p-2'>
    <FaFacebookMessenger className="text-gray-600 text-xl cursor-pointer" />
    
   <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200  -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-4 py-1 text-sm`}>Messenger</span>

  </span>
  <span className='flex items-center relative group justify-center bg-gray-200 rounded-full p-2'>
    <FaBell className="text-gray-600 text-xl cursor-pointer" />

    <span className={`absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200  -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-4 py-1 text-sm`}>Notifications</span>
  </span>
  <div
  onClick={() => setOpenAcount(!openAcount)}
  className="avatar avatar-online relative group"
>
  <div className="w-10 rounded-full cursor-pointer">
    <img   src={`${user?.user?.profilePic}`}/>
    <span className="absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1/2 left-1/2 rounded-md text-white bg-black px-3 py-1 text-sm">
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
