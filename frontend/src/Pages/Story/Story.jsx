import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <div className='bg-white shadow-md xl:w-[70%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] p-2 rounded-lg border border-gray-200 my-3'>

        <Link className='flex  gap-2 transition-colors hover:bg-gray-100 rounded px-3 py-3'>
               <span className='flex items-center bg-blue-100 justify-center w-[45px] h-[45px] rounded-full'>
                <IoMdAdd className='text-blue-500' size={25}/>
               </span>



        <div className='flex flex-col '>
            <h2 className='text-1xl font-semibold'>Create Story</h2>
            <p className='text-neutral-600'>Share a photo or write something</p>
        </div>
        </Link>
      
    </div>
  )
}

export default Story
