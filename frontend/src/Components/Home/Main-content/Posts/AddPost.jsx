import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

import AddPostModal from "./AddPostModel";

const AddPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] p-5 rounded-md border border-gray-200 my-5"
      >
        {/* Top Row: Profile Image and Placeholder Input */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-[45px] h-[45px] bg-gray-200 border border-gray-300 rounded-full flex justify-center items-center">
            <FaUser size={25} className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none"
            onClick={() => setIsModalOpen(true)}
            readOnly
          />
        </div>

        <hr className="my-3 border-gray-200" />

        {/* Action Buttons Row */}
        <div className="flex justify-between items-center gap-2 whitespace-nowrap">
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png" alt="Live Video" width={20} />
            <span className="text-gray-600 font-medium text-sm">Live Video</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png" alt="Photo/Video" width={20} />
            <span className="text-gray-600 font-medium text-sm">Photo/Video</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png" alt="Feeling/Activity" width={20} />
            <span className="text-gray-600 font-medium text-sm">Feeling/Activity</span>
          </div>
        </div>
      </motion.div>

      <AddPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AddPost;