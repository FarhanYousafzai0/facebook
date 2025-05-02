import React, { useState } from 'react';
import { menu_data } from '../Data/RightSideDataNav/MenuData/MenuData';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'; // Icons for up/down arrow
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const {user} = useSelector((state)=>state.auth)
  const visibleItems = showAll ? menu_data : menu_data.slice(0, 2);

  return (
    <>
      <div className="h-full p-5">
        {/* Profile and Username */}
        <div className="flex items-center gap-1">
          {/* Profile Image */}
          <div className="avatar avatar-online relative group">
            <div className="w-10 rounded-full cursor-pointer">
              <img
  src={`${user?.user?.profilePic}`}                alt="profile"
              />
            </div>
          </div>

          {/* Username */}
          <p className="font-semibold text-sm">{user?.user?.username}</p>
        </div>

        {/* Menu List */}
        <ul
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex  flex-col gap-1 overflow-y-scroll h-[70vh] ${
            isHovered ? 'scrollbar-visible' : 'scrollbar-hidden'
          }`}
        >
          {visibleItems.map((item, index) => (
            <div key={index}>
              {/* Nested list */}
              {item?.list?.map((item2, index2) => (
                <div
                  key={index2}
                  className="flex items-center hover:bg-gray-200 rounded-md cursor-pointer gap-2 py-2 "
                >
                  <img src={item2?.image} width={40} alt="sidebar item" />
                  <div className="flex flex-col">
                    <h5 className="text-sm font-semibold">{item2?.heading}</h5>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </ul>

        {/* Show More / Show Less Button */}
        {menu_data.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1  cursor-pointer justify-center mt-4 w-full py-2 text-sm font-semibold bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            {showAll ? (
              <>
                Show Less <IoChevronUp className="text-lg" />
              </>
            ) : (
              <>
                Show More <IoChevronDown className="text-lg" />
              </>
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;
