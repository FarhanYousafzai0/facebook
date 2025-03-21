import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-900'>
      <div className='w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader
