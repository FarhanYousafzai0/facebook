import React, { useState } from "react";
import { motion } from "framer-motion";
import AddPostModal from "./AddPostModel";
import { useSelector } from "react-redux";
import { Avatar } from '@mui/material';

const AddPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow mb-4 p-4"
      >
        {/* Top Row: Profile Image and Placeholder Input */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar
            src={user?.profilePic}
            alt={user?.username}
            sx={{ width: 40, height: 40 }}
            className="cursor-pointer"
          />
          <input
            type="text"
            placeholder={`What's on your mind, ${user?.username}?`}
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-full bg-gray-100 border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsModalOpen(true)}
            readOnly
          />
        </div>

        <hr className="my-3 border-gray-200" />

        {/* Action Buttons Row */}
        <div className="flex justify-between items-center gap-1">
          <button 
            className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
            </svg>
            <span className="text-gray-600 font-medium text-sm">Live Video</span>
          </button>
          
          <button 
            className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium text-sm">Photo/Video</span>
          </button>
          
          <button 
            className="flex-1 flex items-center justify-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium text-sm">Feeling/Activity</span>
          </button>
        </div>
      </motion.div>

      <AddPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AddPost;