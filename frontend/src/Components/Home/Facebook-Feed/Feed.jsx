import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import { FaComment, FaGlobe, FaRegComment, FaRegThumbsUp, FaWhatsapp } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import { GoThumbsup } from 'react-icons/go';
import { TbRewindForward10, TbShare2, TbShare3 } from 'react-icons/tb';
const Feed = () => {

    const {user} = useSelector((state)=>state.auth)
  return (
    <>
      <div className='bg-white rounded-md  shadow-md xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] my-4'>

           <div className='p-3'>
           <div className="flex  gap-2 my-2">
<Avatar
//   alt="Remy Sharp"
  src={`${user?.user?.profilePic}`}
  sx={{ width: 46, height: 46 }}
/>
<div className="flex flex-col  ">
<p className="text-sm m-0 font-semibold ">{user?.user?.username || 'Guest'} </p>

<div className='flex items-center gap-1'>
   <span className='text-xs m-0'>8h</span>
   <span className='bg-black h-[2px] w-[2px] rounded-full  '></span>
  <Tooltip title='Public' >
  <span className='m-0 cursor-pointer'><FaGlobe size={10}/></span>
  </Tooltip>







</div>

</div>
     </div>

{/* Capiton: */}
<p>This implementation maintains all your functionality while making it much more responsive and polished across all screen sizes.
</p>


           </div>
           <div className='h-[400px] bg-blue-200 '>


<img src='https://scontent.fxjm2-1.fna.fbcdn.net/v/t39.30808-6/492995737_122149814600523252_4629410182500821109_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IgLE27OvThoQ7kNvwGKXZ7Y&_nc_oc=AdnTDWqHho-Da4Yg-snzUV7cISi163l7-EzHjgXne0O2AmFlnPguS9QeTaUCVey_tOI&_nc_zt=23&_nc_ht=scontent.fxjm2-1.fna&_nc_gid=5oHLRNP7hlv6sWsb-oQ6Kw&oh=00_AfHkVrxSV3DU5r0ytNdkPaa0XVN5QbsOqBfaGdmFdBW8bA&oe=681ABD51' alt='' className='object-cover object-center'/>

           </div>

           <div className='p-3'>
            {/* Like and Comments-Count */}
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

<hr className='text-gray-200 my-3 h-[2px]'/>
{/* Like-Comments-Shares */}


<div className='flex items-center justify-around'>
{/* LIke */}
    <div className='flex items-center gap-1 '>
<GoThumbsup className='cursor-pointer' size={20}/>
<p className='m-0 p-0'>Like</p>

    </div>
    
{/* Comment */}
<div className='flex items-center gap-1 '>
<FaRegComment className='cursor-pointer' size={20}/>
<p className='m-0 p-0'>Comment</p>

    </div>

    {/* Share */}
    <div className='flex items-center gap-1 '>
<FaWhatsapp className='cursor-pointer' size={20}/>
<p className='m-0 p-0'>Send</p>

    </div>

    {/* Send */}
    <div className='flex items-center gap-1 '>
<TbShare3 className='cursor-pointer' size={20}/>
<p className='m-0 p-0'>Share</p>

    </div>


</div>
           </div>
      </div>
    </>
  )
}

export default Feed
