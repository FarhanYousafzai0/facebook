import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FaRegComment, FaUser } from 'react-icons/fa';
import { PiGifFill, PiShareFat, PiSticker } from 'react-icons/pi';
import { RxAvatar } from 'react-icons/rx';
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { BiCamera, BiSolidSend } from 'react-icons/bi';
import FacebookReaction from './FacebookReaction';
import { HiOutlineGif } from "react-icons/hi2";
import { Avatar, Tooltip } from '@mui/material';
import {motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { addCommentsData } from '../../../features/Posts/postSlice';
import { useEffect } from 'react';


export default function CommentsModel({post_id,background,image,Commentcaption,comments}) {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
const {user} = useSelector((state)=>state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
     

 
  const handleComment = () => {
    
   const postComment = {
    post_id,
    comment,
   }
dispatch(addCommentsData(postComment));
setComment("")

  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="flex gap-2 items-center w-full cursor-pointer hover:bg-gray-100 py-2 rounded-md justify-center">
          <FaRegComment className="text-gray-600 text-lg" />
          <h6 className="text-sm text-gray-600">Comment</h6>
        </div>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className='flex items-center justify-center h-[70px] border-b border-gray-300'>
            <h1 className='font-semibold text-2xl'></h1>
          </div>

          {/* Actual Post */}
          <div className="bg-white w-full  rounded-md shadow-md font-sans">
            {/* Top Header */}
            <div className='p-4'>

              <div className="flex items-center  ">
              <img
                src="https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/498948044_698083949390945_3426704093410471690_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SAwTJYo9lJQQ7kNvwE9-brH&_nc_oc=AdkHhE2aF_tBiReICULCv8K1pwhvQplGq1mBeeIP9aCRcJOHQl87cSFXLMr5ziFhsoP1AArJIJV089mwhOwM4mZo&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=7iXnqBY0ekePYa002ONIbA&oh=00_AfJWVotPTD1TqVuXudrKuxLKekbtIMF2Sldjf6JiNrQlgQ&oe=682E25B0"
                alt="profile"
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <p className="font-semibold text-sm">
                  Imtiaz Hussain Photography <span className="text-gray-500">is in</span>{" "}
                  <span className="font-semibold text-sm">Gilgit-Baltistan.</span>
                </p>
                <p className="text-xs text-gray-500">5h · 🌐</p>

           
              </div>
            </div>
     <p className='mt-2'>{Commentcaption}</p>
            </div>

            {/* Post Image */}
            <div className="w-full">
              <div
          className="h-[400px] relative"
          style={{
            background: background.image || image
              ? `url(${background.image || image})`
              : `linear-gradient(${background?.startColor}, ${background?.endColor})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 text-white capitalize text-4xl">
            {Commentcaption}
          </p>
        </div>
            </div>

            {/* Like, Comment, Share */}
            <div className="flex px-15 border-b-2 border-gray-200   py-3 items-center justify-between">
              <FacebookReaction  />
              <div className="flex gap-2 cursor-pointer justify-center hover:bg-gray-200 transition-all p-2 rounded  items-center ">
                <FaRegComment className="text-gray-600" />
                <h6 className="font-semibold text-sm text-gray-600 bg-b">Comment</h6>
              </div>
              <div className="flex gap-2 justify-center cursor-pointer items-center hover:bg-gray-200 transition-all p-2 rounded ">
                <PiShareFat className="text-gray-600" />
                <h6 className="font-semibold text-sm  text-gray-600">Share</h6>
              </div>
            </div>

            {/* Single Comment Display */}
            <div className="p-4 text-sm w-full ">
              <div className='flex gap-2'>
              <Avatar  sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div className='flex flex-col gap-1 p-1 bg-gray-100 rounded'>
                 <h1 className='user font-normal'>Farhan</h1>
                 <p className='comment'>Nice to see you</p>
              </div>

              <span className='w-[30px] h-[30px] mt-2 rounded-full cursor-pointer hover:bg-gray-100 flex items-center justify-center'>
                <BsThreeDots className='text-xl text-gray-500'/>
              </span>
              </div>


            </div>

            {/* Comment Input Box */}
           <motion.div
  initial={{ y: 100, opacity: 0 }} // starts off 100px lower and invisible
  animate={{ y: 0, opacity: 1 }}   // animates to original position and visible
  transition={{ duration: 0.4, ease: 'easeOut' }}
  className="flex w-full p-3 gap-2 sticky border-t-2 border-gray-200 bottom-0 left-0 bg-white"
>
  <Avatar
    sx={{ width: 30, height: 30 }}
    alt="Remy Sharp"
    src="/static/images/avatar/1.jpg"
  />

  <div className="bg-gray-100 rounded-xl w-full text-sm text-gray-800">
    <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder={`Comment as ${user?.f_name}`}
      className="outline-none resize-none w-full border-0 p-3 rounded-xl"
      rows={1}
    ></textarea>

    <div className="flex gap-2 justify-between items-center px-3 pb-2">
      <div className="flex gap-3 text-lg text-gray-500">
        <Tooltip
          title="Avatar"
          sx={{ '& .MuiTooltip-tooltip': { backgroundColor: '#000', color: '#fff' } }}
        >
          <span className="cursor-pointer"><RxAvatar /></span>
        </Tooltip>

        <Tooltip title="Emoji">
          <span className="cursor-pointer"><BsEmojiSmile /></span>
        </Tooltip>

        <Tooltip title="Camera">
          <span className="cursor-pointer"><BiCamera /></span>
        </Tooltip>

        <Tooltip title="GIF">
          <span className="cursor-pointer"><HiOutlineGif /></span>
        </Tooltip>

        <Tooltip title="Sticker">
          <span className="cursor-pointer"><PiSticker /></span>
        </Tooltip>
      </div>

      <BiSolidSend onClick={handleComment} className="cursor-pointer text-gray-500" />
    </div>
  </div>
</motion.div>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
