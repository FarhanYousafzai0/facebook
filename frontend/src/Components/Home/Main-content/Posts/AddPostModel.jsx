import React from "react";
import Avatar from '@mui/material/Avatar';

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaSmile, FaMapMarkerAlt, FaUserTag, FaImage, FaLayerGroup, FaUserFriends, FaArrowCircleDown, FaArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";

const AddPostModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
        onClick={onClose}
        
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-50">
          <motion.div
          onClick={(e)=>e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-[35%] overflow-hidden"
          >
            {/* Header */}
         <div className="flex items-center justify-center py-3">
            <h2 className="text-[1.4rem] font-bold" >Create Post</h2>
         </div>

<hr className="text-gray-300 "/>
{/* Model-Body */}
<div className="p-4">
{/* User-info */}
<div className="flex items-center gap-2 my-2">
<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 46, height: 46 }}
/>
<div className="flex flex-col gap-1 items-start ">
<p className="text-sm m-0 font-semibold">Farhan Yousafzai</p>

<span className="m-0 text-sm font-semibold cursor-pointer bg-gray-200 p-1 rounded ">
    <div className="flex items-center justify-center gap-[3px]">
    <FaUserFriends/>
    Friends <IoMdArrowDropdown />
    </div>
   </span>
</div>
     </div>
{/* Text-area */}
<textarea 
className="w-full outline-0 text-2xl my-2"
placeholder="What's on your mind?"
rows={5}

></textarea>

{/* Backgrounds-images and emjoes */}

<div className="flex items-center justify-between">
<div className="cursor-pointer  rounded-md h-[45px] w-[45px]">
    <img width={100} src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
</div>
<div className="cursor-pointer  rounded-md ">
<IoHappyOutline className="text-gray-400 text-2xl" />
</div>


</div>



{/* Add-post */}
<div className="rounded-md w-full p-4 flex items-center border-gray-300 justify-between border-[0.1em] my-2">

<p className="font-semibold">Add to your post</p>

</div>


{/* Post-button */}

<button type="submit" className="w-full p-2 rounded-md text-white cursor-pointer hover:bg-blue-500 transition-all bg-blue-600">Post</button>




</div>



          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddPostModal;