import React, { useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { FaImage, FaFont } from "react-icons/fa6";
import { useState } from "react";
import {  useSelector } from "react-redux";
import {motion} from 'framer-motion'
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CreateStory = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [closePreview,setClosePreview] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));





  };

  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-74 bg-white shadow-md ">
<motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", damping: 10, stiffness: 100 }
              }}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 }
              }}
              className='flex items-center gap-4 p-3 border-b border-gray-200 bg-white/80 backdrop-blur-sm'
            >
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                <Link to="/home" className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 hover:bg-gray-300 transition-colors'>
                  <RxCross1 size={20} className="text-la" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  width={45}
                  src='https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png'
                  alt='Logo'
                  className='drop-shadow-sm'
                />
              </motion.div>
            </motion.div>


        <div className="p-3">
            <div className="flex justify-between items-center mb-6">
          <h2  className="text-lg cursor-pointer font-bold text-gray-900">Your story</h2>
          <FiSettings className="text-gray-600 cursor-pointer " size={22} />
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=47"
            className="w-12 h-12 rounded-full object-cover"
            alt="profile"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800"></p>
          </div>
        </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 relative flex flex-col items-center justify-center px-4 py-12 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
          {/* Photo Story */}
          <label
            htmlFor="photoInput"
            className="bg-gradient-to-br from-blue-500 to-blue-300 hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl flex flex-col items-center justify-center h-64 text-white cursor-pointer"
          >
            <div className="bg-white text-black p-3 rounded-full mb-4">
              <FaImage size={24} />
            </div>
            <p className="text-lg font-semibold">Create a photo story</p>
            <input
              id="photoInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileRef}
            />
          </label>

          {/* Text Story */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-400 hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl flex flex-col items-center justify-center h-64 text-white cursor-pointer">
            <div className="bg-white text-black p-3 rounded-full mb-4">
              <FaFont size={24} />
            </div>
            <p className="text-lg font-semibold">Create a text story</p>
          </div>
        </div>

        {/* Preview section */}
        {preview && (
          <div className="absolute bg-white overflow-hidden rounded-md shadow-lg h-[650px] p-4 w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<h3 className="font-semibold text-black m-2 ">Preview </h3>
            <div className="w-full h-[95%] bg-black  border-white rounded flex p-2 items-center justify-center">

                <div className="w-[400px] h-full max-h-[500px] bg-blue-700 rounded overflow-hidden">
  <img
    src={preview}
    alt="Preview_image"
    className="w-full h-full object-contain"
  />
</div>



            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreateStory;
