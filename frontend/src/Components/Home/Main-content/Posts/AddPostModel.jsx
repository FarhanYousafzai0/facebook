import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaSmile, FaMapMarkerAlt, FaUserTag, FaImage, FaLayerGroup, FaUserFriends, FaArrowCircleDown, FaArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { colors } from "./PostData/colorsData";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPostData, postReset } from "../../../../features/Posts/postSlice";







const AddPostModal = ({ isOpen, onClose }) => {
    const { user } = useSelector((state) => state.auth);
    const [OpenColor,setOpenColor] = useState(false);
  const [changed,setChanged] = useState(false);

    const [selectedColor,setSelectedColor] = useState({
startColor:'#fff',
endColor:'#fff',
image:''
    })
    const {startColor,endColor} = selectedColor;



// To Check the States:
const {post,postLoading,postError,postMessage,postSuccess} = useSelector((state)=>state.post)
const dispatch = useDispatch();
useEffect(()=>{
    if(postError){

    }

    if(postSuccess){

    }
dispatch(postReset());


},[postError,postSuccess,])




    // Handle-Sumbit-Post
    const handlePostSumbit = ()=>{

   dispatch(addPostData());

    }

  

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
            className="bg-white rounded-lg shadow-xl w-[100%] md:max-w-[35%] overflow-hidden"
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
//   alt="Remy Sharp"
  src={`${user?.user?.profilePic}`}
  sx={{ width: 46, height: 46 }}
/>
<div className="flex flex-col gap-1 items-start ">
<p className="text-sm m-0 font-semibold ">{user?.user?.username || 'Guest'} </p>

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
style={{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }}
className={`w-full outline-0 text-2xl my-2 rounded-md ${changed ? 'text-white font-semibold flex items-center ' : ''} `}
rows={changed ? 10 : 5}
placeholder={`What's on your mind? ${user?.user?.username}`}

>


</textarea>

{/* Backgrounds-images and emjoes */}

<div className="flex items-center  h-[50px] justify-between">



{OpenColor ? (
<>
<div onClick={()=>setOpenColor(false)}  className="cursor-pointer bg-gray-300  flex items-center justify-center rounded-md h-[35px] w-[35px]">

<MdArrowBackIosNew />
</div>

</>

) : (
<>
<div onClick={()=>setOpenColor(true)}  className="cursor-pointer  rounded-md ">
    <img className="h-[45px] w-[45px]" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
</div></>
)}


{OpenColor && colors.map((item, index) => (
  <motion.div
    key={index}
    onClick={() =>{

      setSelectedColor({
        endColor: item.endColor,
        startColor: item.startColor,
      });
     index == 0 ? ( setChanged(false)) : ( setChanged(true))
    }

      
    }
    initial={{scale:0,rotate:0}}
    animate={{scale:1,rotate:360}}
    transition={{delay : index * 0.1,duration :0.3,stiffness:200,type:'spring'
        ,staggerChildren:1
    }}
    className="h-[35px] w-[35px] rounded-md cursor-pointer border border-gray-300"
    style={{
      background: item.image
        ? `url(${item.image}) center/cover`
        : `linear-gradient(135deg, ${item.startColor}, ${item.endColor})`,
    }}
    whileHover={{ scale: 1.1 }}
  />
))}






<div className="cursor-pointer  rounded-md hover:animate-pulse ">
<IoHappyOutline size={30} className="text-gray-400 " />
</div>


</div>



{/* Add-post */}
<div className="rounded-md w-full p-4 flex items-center border-gray-300 justify-between border-[0.1em] my-2">

<p className="font-semibold">Add to your post</p>


<div className="flex items-center gap-3">
    <Tooltip title="Photo/video" arrow>
    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png" alt=""/>
    </Tooltip>
    <Tooltip title="Tag people" arrow>
    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/b37mHA1PjfK.png" alt=""/>
    </Tooltip>
    <Tooltip title="Feeling/activity" arrow>
    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png" alt=""/>
    </Tooltip>
    <Tooltip title="Check in" arrow>
    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/8zlaieBcZ72.png" alt=""/>
    </Tooltip>
    <Tooltip title="GIF" arrow>
    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/q7MiRkL7MLC.png" alt=""/>
    </Tooltip>
</div>



</div>


{/* Post-button */}

<button
onClick={()=>handlePostSumbit()}
type="submit" className="w-full p-2 rounded-md text-white cursor-pointer hover:bg-blue-500 transition-all bg-blue-600">Post</button>




</div>



          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddPostModal;