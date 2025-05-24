import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import gsap from 'gsap';
import { RxCross2 } from "react-icons/rx";
import { Avatar } from '@mui/material';

const Ads = () => {
  const groupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleGroup = () => {
    if (!isOpen) {
      gsap.to(groupRef.current, {
        width: 330,
        height: 350,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(groupRef.current, {
        width: 0,
        height: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white rounded-lg shadow p-4 mb-4'>
      {/* Sponsored Section */}
      <div className='mb-4'>
        <h2 className='text-lg font-semibold text-gray-800 mb-3'>Sponsored</h2>
        <div className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors'>
          <img
            src='https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max'
            alt='Ad'
            className='w-20 h-20 object-cover rounded-md'
          />
          <div>
            <p className='font-medium text-gray-900'>No interruption, just create your projects in MERN</p>
            <p className='text-sm text-gray-500'>NeoCoder.com</p>
          </div>
        </div>
      </div>

      <hr className='border-gray-200 my-3' />

      {/* Group Chats Section */}
      <div>
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>Group chats</h2>
        <button
          onClick={handleToggleGroup}
          className='w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors'
        >
          <div className='flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full'>
            <FaPlus className='text-gray-700' />
          </div>
          <span className='text-gray-800 font-medium'>Create a group chat</span>
        </button>
      </div>

      {/* Animated Group Chat Box */}
      <div
        ref={groupRef}
        style={{ width: 0, height: 0, overflow: 'hidden' }}
        className='absolute z-10 bg-white rounded-lg shadow-xl border border-gray-200 mt-2 left-4 right-4'
      >
        <div className='p-3'>
          <div className='flex items-center justify-between mb-3'>
            <h3 className='font-semibold text-gray-800'>New Message</h3>
            <button 
              onClick={handleToggleGroup}
              className='p-1 rounded-full hover:bg-gray-100 transition-colors'
            >
              <RxCross2 className='text-gray-600' size={20} />
            </button>
          </div>
          
          {/* Search and contacts would go here */}
          <div className='p-4 text-center text-gray-500'>
            <p>Search for friends to add to your group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;