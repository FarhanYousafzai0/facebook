import React, { useState } from 'react';
import { menu_data } from '../Data/RightSideDataNav/MenuData/MenuData';
import { motion } from "framer-motion";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const visibleItems = showAll ? menu_data : menu_data.slice(0, 2);

  return (
    <div className="h-full p-5">
      {/* Profile */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={user?.profilePic}
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="font-semibold text-sm">{user?.username}</p>
      </div>

      {/* Menu List */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col gap-2 pr-2 h-[70vh] overflow-y-auto ${
          isHovered ? 'scrollbar-thin scrollbar-thumb-gray-300' : 'scrollbar-none'
        }`}
      >
        {visibleItems.map((item, index) => (
          <div key={index} className="space-y-1">
            {item?.list?.map((item2, index2) => (
             <Link to="/climatecenterinfo" key={index2}>
               <motion.div
               
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index2 * 0.05, duration: 0.2 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <img src={item2?.image} width={40} alt="icon" className="rounded-full" />
                <h5 className="text-sm font-medium">{item2?.heading}</h5>
              </motion.div>
             </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {menu_data.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 justify-center mt-5 w-full py-2 text-sm font-semibold bg-gray-200 hover:bg-gray-300 rounded-md transition"
        >
          {showAll ? (
            <>
              Show Less <IoChevronUp />
            </>
          ) : (
            <>
              Show More <IoChevronDown />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default Sidebar;
