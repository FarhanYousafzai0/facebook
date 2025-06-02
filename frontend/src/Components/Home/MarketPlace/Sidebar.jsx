import React from 'react'
import { FcSettings } from 'react-icons/fc'
import { Search } from 'lucide-react';
import  marketSidebarData  from './Market.jsx'; // make sure this file exports the sidebar data
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='w-[400px] h-full hidden md:block bg-white shadow-xl p-4  text-black'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Marketplace</h1>
        <span className='flex items-center justify-center w-[30px] h-[30px] cursor-pointer bg-gray-300 rounded-full'>
          <FcSettings className='text-xl hover:rotate-180 transition-all duration-300 transform' />
        </span>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-sm mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 outline-none"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* Sidebar Links */}
      <div className='mt-6 space-y-3'>
        {marketSidebarData.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
 

    {/*  */}
    <button className=' mt-2 w-full p-3 rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500 transition-all gap-2 flex items-center justify-center font-semibold text-white'>
     <FaPlus/>   Create new listing
    </button>


    </div>
  );
};

export default Sidebar;
