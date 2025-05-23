import React, { useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import { FriendsSidebar } from "./FriendsSidebar";
import PeopleKNow from "./PeopleKNow";
import PeopleKnowSkeleton from "./PeopleKnowSkeleton"; // ✅ Make sure this is created
import SingleFriend from "./SingleFriend";
import Nav from "../../Components/Home/Nav";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserData } from "../../features/Users/userSlice";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Friends = () => {
  const { allUsers, isLoading, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserData());
  }, [dispatch]);

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md bg-white">
        <Nav />
      </div>

      <div className="flex min-h-screen overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="hidden sm:block w-[360px] min-w-[360px] bg-white p-4 shadow-md sticky bottom-0 min-h-screen "
        >
          <div className="flex items-center justify-between px-2 mb-4">
            <h1 className="font-bold text-black text-2xl">Friends</h1>
            <div className="h-[40px] w-[40px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
              <IoMdSettings size={25} />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center text-black gap-2 p-2 bg-blue-50 rounded-md my-2 cursor-pointer"
          >
            <div className="h-[40px] w-[40px] bg-[#1877F2] rounded-full flex items-center justify-center">
              <HiMiniUsers size={25} color="white" />
            </div>
            <p className="text-lg font-semibold text-black">Home</p>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1 mt-4"
          >
            {FriendsSidebar?.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                className="flex justify-between items-center w-full p-2 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-2 text-black items-center justify-center h-[40px] w-[40px] rounded-full bg-gray-200">
                    {item.icon}
                  </div>
                  <span className="text-lg text-black font-semibold">
                    {item.title}
                  </span>
                </div>
                <div className="text-gray-500">
                  {item.icons_2 && <div>{item.icons_2}</div>}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-4 overflow-y-auto"
        >
          {/* Friend Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-lg shadow-sm mb-4"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl text-black font-bold">Friend Requests</p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black cursor-pointer p-2 rounded-md hover:bg-gray-100"
              >
                See all
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <SingleFriend />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* People You May Know */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl font-bold text-black">People You May Know</p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-100"
              >
                See All
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
            >
              {isLoading
                ? Array.from({ length: 8 }).map((_, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <PeopleKnowSkeleton />
                    </motion.div>
                  ))
                : allUsers?.map((item, index) => (
                    <motion.div key={item._id || index} variants={itemVariants}>
                      <PeopleKNow name={item.name} profilePic={item.profilePic} />
                    </motion.div>
                  ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Friends;
