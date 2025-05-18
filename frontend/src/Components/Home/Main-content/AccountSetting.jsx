import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/Users/userSlice';

const AccountSetting = ({ onClose }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

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
        className="absolute top-14 -right-5 md:right-[0px] h-[350px] w-85 z-50 bg-white rounded-md shadow-lg p-4"
      >
        <div className="w-full rounded-md">
          {/* Profile Info */}
          <div className="flex items-center gap-2">
            <div className="avatar avatar-online relative">
              <div className="w-10 rounded-full overflow-hidden">
                <img src={`${user?.profilePic}`} alt="profile" />
              </div>
            </div>
            <p className="font-semibold text-sm">{user?.username}</p>
          </div>

          <hr className="my-4 text-gray-300" />

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full p-2 cursor-pointer font-semibold text-black rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-150"
          >
            <span className="flex items-center gap-2 justify-center">
              <FaUserFriends />
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
