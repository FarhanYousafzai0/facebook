import React from "react";
import { IoMdSettings } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import { FriendsSidebar } from "./FriendsSidebar";
import PeopleKNow from "./PeopleKNow";
import SingleFriend from "./SingleFriend"
import Nav from "../../Components/Home/Nav";

const Friends = () => {
  return (
    <>
      <div className="sticky top-0 z-10 shadow-md bg-white ">
        {" "}
       <Nav/>
      </div>

      {/* here we start another section  */}
      <div className="grid grid-cols-12 ">
        {/* Sidebar - 3 columns */}
        <div className="col-span-3 bg-white p-2 shadow-2xl sticky top-16  overflow-hidden hidden sm:block">
          {/* friends */}
          <div className="flex items-center justify-between px-2">
            <h1 className="font-bold text-black text-2xl">Friends</h1>
            <div className="h-[40px] w-[40px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300  cursor-pointer">
              <IoMdSettings size={25} />
            </div>
          </div>

          {/* HOME */}

          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md my-2 cursor-pointer">
            <div className=" h-[40px] w-[40px] bg-[#1877F2] rounded-full flex items-center justify-center">
              <HiMiniUsers size={25} color="white" />
            </div>
            <p className="text-lg font-semibold">Home</p>
          </div>

          {/* sidebar selection */}

          <ul className="flex flex-col items-center gap-1">
            {FriendsSidebar?.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center w-full p-1  hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2 ">
                  <div className="flex gap-2 items-center justify-center h-[40px] w-[40px] rounded-full bg-gray-200">
                    {item.icon}
                  </div>
                  <span className="text-lg text-gray-800 font-semibold ">
                    {item.title}
                  </span>
                </div>
                <div className="text-gray-500">
                  {item.icons_2 && <div>{item.icons_2}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content - 9 columns */}
        <div className="col-span-12 sm:col-span-9 sm:bg-gray-100 sm:p-8 p-2">
          {/* Friends Request */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">Friends requests</p>
            <p className="text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-200">
              See all
            </p>
          </div>
          {/* Grid Friends */}
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <SingleFriend />
            <SingleFriend />
            <SingleFriend />
            <SingleFriend />
            <SingleFriend />
          </div>
          <hr className="border-0 bg-gray-300 my-3   h-[1px]" />
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">Friends requests</p>
            <p className="text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-200">
              People you may know
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <PeopleKNow />
            <PeopleKNow />
            <PeopleKNow />
            <PeopleKNow />
            <PeopleKNow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
