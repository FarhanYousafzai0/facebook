import React from 'react'

const AccountSetting = () => {
  return (
    <>
      <div className='top-15 absolute right-0 -transalte-x-[100] h-[350px] rounded-md shadow-lg p-3'>
       
       <div className='shadow-lg w-full p-4'>
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
          <p className="font-semibold text-sm">Username</p>
        </div>

       </div>


      </div>

    </>
  )
}

export default AccountSetting
