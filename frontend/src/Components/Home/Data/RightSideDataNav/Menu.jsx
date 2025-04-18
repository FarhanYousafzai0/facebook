import React from "react";
import { IoIosSearch } from "react-icons/io";

import { menu_data } from "./MenuData/MenuData";
import { create_data } from "./MenuData/Create_data";

const Menu = () => {
  return (
    <>
      {/* <div className="fixed top-0 left-0 bg-transparent min-h-screen w-full"></div> */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F8F9FB] absolute w-[650px] h-[80vh]  overflow-y-scroll shadow-xl  px-4 mt-3 "
      >
        <h2 className="text-black px-3 z-40 py-3 text-2xl   bg-[#F8F9FB] font-bold sticky top-0">
          Menu
        </h2>
        <div className="grid my-2 gap-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="sm:col-span-2  bg-white shadow rounded-md p-5">
              <div
                className={`flex  gap-2 items-center bg-gray-100 text-black px-5 py-2 rounded-full`}
              >
                <IoIosSearch
                  className={`transition-all duration-300 `}
                  size={20}
                />
                <input
                  type="text"
                  className="border-0 outline-0"
                  placeholder="Search Facebook"
                />
              </div>

              {/* items */}
              <ul className="flex  my-5 flex-col gap-1 unstyled">
                {menu_data?.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className="text-md r font-semibold capitalize text-gray-800">
                        {item?.title}
                      </li>
                      {/* nested list */}

                      {item?.list?.map((item2, index2) => {
                        return (
                          <div
                            key={index2}
                            className="flex items-center hover:bg-gray-200 rounded-md cursor-pointer gap-2 p-2"
                          >
                            <img
                              src={item2?.image}
                              width={30}
                              alt="sidebar images"
                            />
                            <div className="flex  flex-col ">
                              <h5 className="text-sm font-semibold">
                                {item2?.heading}
                              </h5>
                              <p className="text-gray-700 text-sm">
                                {item2?.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {index !== menu_data?.length - 1 && (
                        <hr className="my-3 border-0 h-[1px] bg-gray-300" />
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="sm:col-span-1 px-2 sticky top-[59px] bg-white shadow rounded-md p-5 flex self-start flex-col">
              <h2 className="text-xl font-bold">Create</h2>
              <ul className="unstyled flex flex-col">
                {create_data?.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className="flex gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-1 my-1 capitalize items-center">
                        <div className="h-[30px] text-black  rounded-full w-[30px] bg-gray-300 flex items-center justify-center">
                          {item?.icon}
                        </div>

                        <h5 className="font-semibold text-black text-sm">{item?.title}</h5>
                      </li>
                      {index == 3 && (
                        <hr className="border-0 h-[1px] bg-gray-300" />
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;