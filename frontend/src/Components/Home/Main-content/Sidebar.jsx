import React from 'react'

const Sidebar = () => {




  return (
    <>
      <div className='h-full p-4 '>

        <div className='flex items-center gap-1'>
{/* profile-images */}
        <div className="avatar avatar-online relative group">
    <div className="w-10 rounded-full cursor-pointer " >
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>

{/* User-name */}

<p className='font-semibold text-sm'>
    Username
</p>


        </div>

        
      </div>
    </>
  )
}

export default Sidebar
