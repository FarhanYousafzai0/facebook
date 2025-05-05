import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { colors } from "./PostData/colorsData";
import toast from 'react-hot-toast';
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPostData, postReset } from "../../../../features/Posts/postSlice";
import { IoArrowBack } from "react-icons/io5";
import colors_data from "./PostData/decorative";

import { FadeLoader, PropagateLoader } from "react-spinners";




const AddPostModal = ({ isOpen, onClose }) => {
  // Redux state and actions
  const { user } = useSelector((state) => state.auth);
  const { postError, postSuccess,post ,postLoading,postMessage} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [show, setShow] = useState(true);
  const [OpenColor, setOpenColor] = useState(false);
  const [changed, setChanged] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false)
  const [postContent, setPostContent] = useState("");
  const [selectedColor, setSelectedColor] = useState({
    startColor: '#fff',
    endColor: '#fff',
    image: ''
  });

  const { startColor, endColor, image } = selectedColor;



  // Handle the color selection and set the state accordingly
  useEffect(()=>{
caption.length > 0 ? setShow(false) : setShow(true)

  },[caption])

  useEffect(() => {

if(postError){
  // Handle error (e.g., show a notification)
  console.error("Error posting data:", postError);
}


    if (postSuccess) {
      toast.success("Post added successfully!");
      // Reset modal and close it
      setCaption("");
      setSelectedColor({ startColor: "#fff", endColor: "#fff", image: "" });
      setChanged(false);
      setOpenColor(false);
      onClose();
    }
    dispatch(postReset());
  }, [postError, postSuccess]);

  const handlePostSumbit = () => {
    if (!postContent.trim()) return;

    dispatch(addPostData({
      caption,
      background:selectedColor,
      user_id: user._id,
    }));
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-50">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl w-full md:max-w-[35%] overflow-hidden relative"
          >
            {/* Header */}
            <div className="flex items-center justify-center py-3 relative">
              <h2 className="text-[1.4rem] font-bold">Create Post</h2>
              <motion.button
whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={onClose} className="absolute right-4 cursor-pointer text-gray-600 text-4xl font-bold">×</motion.button>
            </div>
            <hr className="text-gray-300" />

            {/* Modal Body */}
            <div className="">
              {/* User Info */}
              <div className="flex items-center gap-2 my-2">
                <Avatar  src={user?.profilePic} sx={{ width: 46, height: 46 }} />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-sm m-0 font-semibold">{user?.user?.username || 'Guest'}</p>
                  <span className="m-0 text-sm font-semibold cursor-pointer bg-gray-200 p-1 rounded">
                    <div className="flex items-center gap-[3px]">
                      <IoMdArrowDropdown />
                      Friends
                    </div>
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                style={{
                  background: startColor === ''
                    ? `url(${image})`
                    : `linear-gradient(to right, ${startColor}, ${endColor})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                className={`px-4 pb-4 text-black relative text-[1.5rem] transition-all duration-150 outline-0 my-3 post-caption ${changed ? 'h-[350px] bg-image bg-no-repeat bg-cover text-white flex justify-center items-center placeholder-gray-400 font-extrabold' : 'h-[250px]'} `}
               
              >
           
           <p
                  className={`pointer-events-none absolute ${
                    show ? "block" : "hidden"
                  }`}
                >
                  What's on your mind?{" "}
                  <span className="capitalize">{user?.f_name}</span>
                </p>


           <textarea
               value={caption}
               onChange={(e) => setCaption(e.target.value)}
                  style={{
                    
                    resize: "none", // Disable manual resizing
                    background: "transparent", // Match gradient background
                    whiteSpace: "pre-wrap", // Allow text wrapping
                    wordBreak: "break-word", // Break long words
                  }}
                  className={`${
                    changed ? "" : ""
                  } w-full outline-0 border-none bg-transparent`}
                  placeholder=""
                />

           
              </div>

              {/* Backgrounds */}
              <div className="p-3"> 

              <div className="flex items-center h-[50px] justify-between">
                {OpenColor ? (
                  <div onClick={() => setOpenColor(false)} className="cursor-pointer bg-gray-300 flex items-center justify-center rounded-md h-[35px] w-[35px]">
                    <MdArrowBackIosNew />
                  </div>
                ) : (
                  <div onClick={() => setOpenColor(true)} className="cursor-pointer rounded-md">
                    <img className="h-[45px] w-[45px]" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />
                  </div>
                )}

                {OpenColor && colors.map((item, index) => (
                  <motion.div
                    key={index}
                    onClick={() => {
                     index === 9 ? setShowBackgrounds(true) : 
                     setSelectedColor(
                      index === 8
                        ? { startColor: '', endColor: '', image: item.image }
                        : { startColor: item.startColor, endColor: item.endColor, image: '' }
                    );

                      setChanged(index !== 0);
                    }}
                    
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      stiffness: 200,
                      type: 'spring'
                    }}
                    className="h-[35px] w-[35px] rounded-md cursor-pointer border border-gray-300"
                    style={{
                      background: item.image
                        ? `url(${item.image})`
                        : `linear-gradient(to right, ${item.startColor}, ${item.endColor})`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}

                <div className="cursor-pointer rounded-md hover:animate-pulse">
                  <IoHappyOutline size={30} className="text-gray-400" />
                </div>
              </div>

              {/* Add to Post Icons */}
              <div className="rounded-md w-full p-4 flex items-center border-gray-300 justify-between border-[0.1em] my-2">
                <p className="font-semibold">Add to your post</p>
                <div className="flex items-center gap-3">
                  <Tooltip title="Photo/video" arrow>
                    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png" alt="" />
                  </Tooltip>
                  <Tooltip title="Tag people" arrow>
                    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/b37mHA1PjfK.png" alt="" />
                  </Tooltip>
                  <Tooltip title="Feeling/activity" arrow>
                    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png" alt="" />
                  </Tooltip>
                  <Tooltip title="Check in" arrow>
                    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/8zlaieBcZ72.png" alt="" />
                  </Tooltip>
                  <Tooltip title="GIF" arrow  >
                    <img className="cursor-pointer" src="https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/q7MiRkL7MLC.png" alt="" />
                  </Tooltip>
                </div>
              </div>

              {/* Submit Button */}
              <button
             
                onClick={handlePostSumbit}
                disabled={show}
                type="submit"
                style={
                  {
                    background: show ? '#ccc' : '#155dfc',
                    cursor: show ? 'not-allowed' : 'pointer',
                  }
                }
                className="w-full p-2 rounded-md text-white cursor-pointer hover:bg-blue-500 transition-all bg-blue-600">
          {postLoading ? 'Loadig...' : 'Post'}
              </button>

              </div>
            </div>

{/* Backgrounds & Gradients */}




<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className={`absolute top-0 left-0 w-full h-full   ${showBackgrounds ?'translate-x-0 ' : 'translate-x-[100%]'} transition-all duration-200 delay-100   bg-white z-40  overflow-y-scroll `}>

  <span
  onClick={()=>setShowBackgrounds(false)}

  className="flex items-center justify-center cursor-pointer absolute left-5 top-4 bg-gray-200 w-[40px] h-[40px] rounded-full"><IoArrowBack/>  </span>

<div className=" text-center p-4 ">
  <h2 className="text-xl font-bold">Choose background</h2>
</div>
<hr className="hr"></hr>

{colors_data?.map((item,index)=>{

return <>

<h3 className="font-semibold text-xl p-4 capitalize">{item.title}</h3>  



{/* Colors */}
<div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 px-3 gap-3   ">





{item?.list.map((item2,index2)=>{


return  <>

<motion.div 
onClick={()=>{
  
    setSelectedColor(
      item2.image ? { startColor: '', endColor: '', image: item2.image } : item2.startColor 

 ? item2 
 : {startColor:item2,endColor:item2}


    );
    setShowBackgrounds(false);
}}
initial={{opacity:0,scale:0,}}
animate={{opacity:100,scale:1,}}
transition={{delay:index2 * 0.2,duration:0.3, stiffness:200}}
whileTap={{scale:0.9}}

key={index2} style={{background:index == 2 ? item2 : `url(${item2.image})`,
backgroundPosition:'center center',
backgroundSize:'100% 100%'
}} className="h-[80px] rounded-xl shadow cursor-pointer "></motion.div>
</>

})}

</div>
</>





})}



</motion.div>


          </motion.div>
        </div>
      )}
    </AnimatePresence>
    
    
    </>
  );
};

export default AddPostModal;
