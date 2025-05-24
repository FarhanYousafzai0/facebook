import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
    <div className='bg-white rounded-lg shadow mb-4 p-4'>
      <Link 
        to="/create-story" 
        className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors'
      >
        <div className='relative'>
          <div className='w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center'>
            <IoMdAdd className='text-blue-500 text-2xl' />
          </div>
          <div className='absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm'>
            <div className='w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center'>
              <IoMdAdd className='text-white text-xs' />
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-md font-semibold text-gray-900'>Create story</h2>
          <p className='text-sm text-gray-500'>Share a photo or write something</p>
        </div>
      </Link>
    </div>
  )
}

export default Story