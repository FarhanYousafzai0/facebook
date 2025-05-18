import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const AllStories = () => {
  return (
    <>
      
<div className='min-h-screen w-full bg-black'>

{/* Parent-Div */}
<div className='grid grid-cols-1 md:grid-cols-12 h-full  '>

{/* Left-Section */}
<div className='col-span-3  min-h-screen bg-white  '>
<div className='flex items-center gap-2 border-b-2 border-gray-100 p-2'>
<Link to="/home" className='flex items-center cursor-pointer justify-center h-[40px] w-[40px] rounded-full bg-gray-400'>
    <RxCross1 size={25}/>
</Link>
{/* Logo */}
<img  width={45}  src='https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png' alt='Logo'/>
</div>

<div className='p-2 mt-2'>

<h3 className='font-bold text-2xl text-black '>Stories</h3>

{/* Settting and Archive */}
<div className='flex items-center gap-3 mt-3'>
    <a href='' className='text-blue-600'>Setting</a>
    <a href='' className='text-blue-600'>Archive</a>
     </div>

{/* Your Story */}

<div className='mt-3'>
<h3 className=' text-1xl font-semibold text-black '>Your Stories</h3>


 <Link to="" className='flex mt-3 gap-2   rounded '>
               <span className='flex items-center bg-blue-100 justify-center w-[55px] h-[55px] rounded-full'>
                <IoMdAdd className='text-blue-500' size={35}/>
               </span>



        <div className='flex flex-col '>
            <h2 className='text-1xl font-semibold text-black'>Create Story</h2>
            <p className='text-neutral-600'>Share a photo or write something</p>
        </div>
        </Link>


</div>


</div>



</div>



{/* Right-Sections */}
<div className='col-span-9 min-h-screen'></div>


</div>


</div>
    </>
  )
}

export default AllStories
