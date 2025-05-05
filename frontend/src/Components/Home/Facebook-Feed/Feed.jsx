import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { FaGlobe, FaRegComment, FaWhatsapp } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import { GoThumbsup } from 'react-icons/go';
import { TbShare3 } from 'react-icons/tb';
import moment from 'moment';

const Feed = ({ caption, background, id, user_id, createdAt }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className='bg-white rounded-md shadow-md xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] my-4'>
        <div className='p-3'>
          <div className="flex gap-2 my-2">
            <Avatar sx={{ width: 46, height: 46 }} />
            <div className="flex flex-col">
              <p className="text-sm m-0 font-semibold">{user?.user?.username || 'Guest'}</p>
              <div className='flex items-center gap-1'>
                <span className='text-xs m-0'>{createdAt ? moment(createdAt).fromNow() : 'Just now'}</span>
                <span className='bg-black h-[2px] w-[2px] rounded-full'></span>
                <Tooltip title='Public'>
                  <span className='m-0 cursor-pointer'><FaGlobe size={10} /></span>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Caption */}
          {(background?.image == '' || background?.startColor == '#ffffff' ) && <p className='text-sm m-0'>{caption}</p>} 
        </div>

        {/* Background or Image */}
        <div
          style={{
            background: background?.image
              ? `url(${background?.image})`
              : `linear-gradient(to right, ${background?.startColor}, ${background?.endColor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={
            (background?.startColor == '' && background?.endColor === '#ffffff' || background?.image === '')
              ? 'hidden'
              : 'h-[400px] w-full bg-gray-200 rounded relative'
          }
        >
      {(background?.image !== '' || background?.startColor !== '#ffffff')&& 
      <p className='absolute top-1/2 left-1/2 capitalize -translate-x-1/2 text-white font-semibold text-3xl'>
        {caption}
      </p>
      
      }
</div>
        <div className='p-3'>
          {/* Like and Comment Count */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <span>❤️👌</span>
              <span>1.6K</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-gray-500'>33 comments</span>
              <span className='text-gray-500'>10 shares</span>
            </div>
          </div>

          <hr className='text-gray-200 my-3 h-[2px]' />

          {/* Like-Comment-Share-Send */}
          <div className='flex items-center justify-around'>
            <div className='flex items-center gap-1'>
              <GoThumbsup className='cursor-pointer' size={20} />
              <p className='m-0 p-0'>Like</p>
            </div>
            <div className='flex items-center gap-1'>
              <FaRegComment className='cursor-pointer' size={20} />
              <p className='m-0 p-0'>Comment</p>
            </div>
            <div className='flex items-center gap-1'>
              <FaWhatsapp className='cursor-pointer' size={20} />
              <p className='m-0 p-0'>Send</p>
            </div>
            <div className='flex items-center gap-1'>
              <TbShare3 className='cursor-pointer' size={20} />
              <p className='m-0 p-0'>Share</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
