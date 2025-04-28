import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

const AccountSetting = () => {


  return (
    <>
          <div className="fixed top-0 left-0 bg-black/15 min-h-screen w-full transition-all duration-300 "></div>

      <div
      onClick={(e)=>e.stopPropagation()}
    
      className='top-15 absolute right-3 -transalte-x-[100] h-[350px] z-50 bg-white rounded-md drop-shadow-lg p-3'>
       
      <div className="drop-shadow-lg w-full p-4 rounded-md bg-white">

       <div className="flex items-center gap-1">
          {/* Profile Image */}
          <div className="avatar avatar-online relative group">
            <div className="w-10 rounded-full cursor-pointer">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="profile"
              />
            </div>
          </div>

          {/* Username */}
          <p className="font-semibold text-sm">Farhan Yousafzai</p>
        </div>
<hr className='my-4 text-gray-300'/>

<button className='w-full p-2 cursor-pointer font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-100 '>
    <span className='flex items-center gap-1 justify-center '>
    <FaUserFriends/>
    Sell all profiles
    </span>
   </button>
       </div>


      </div>

    </>
  )
}

export default AccountSetting
