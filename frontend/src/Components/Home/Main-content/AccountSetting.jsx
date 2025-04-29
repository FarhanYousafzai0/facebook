import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

const AccountSetting = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed top-0 left-0 bg-black/15 min-h-screen w-full z-40 transition-all duration-300"
      ></div>

      {/* Modal */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="absolute top-14 right-3 h-[350px] w-72 z-50 bg-white rounded-md shadow-lg p-4"
      >
        <div className="w-full rounded-md">
          {/* Profile Info */}
          <div className="flex items-center gap-2">
            <div className="avatar avatar-online relative">
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="profile"
                />
              </div>
            </div>
            <p className="font-semibold text-sm">Farhan Yousafzai</p>
          </div>

          <hr className="my-4 text-gray-300" />

          {/* Button */}
          <button className="w-full p-2 cursor-pointer font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-150">
            <span className="flex items-center gap-2 justify-center">
              <FaUserFriends />
              See all profiles
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default AccountSetting
