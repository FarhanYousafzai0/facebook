import React, { useEffect } from 'react';
import ProfilePosts from './ProfilePosts';
import Nav from '../../Components/Home/Nav';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfoData } from '../../features/Users/userSlice';
import MessagePanel from '../../Components/Home/Chat/MessagePanel';

const ProfilePage = () => {



    const {id} = useParams();

    const {myInfo} = useSelector((state)=>state.auth);

    const disptach = useDispatch();


    useEffect(()=>{

   disptach(UserInfoData(id));

    },[])




  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Main Content Container */}

        <Nav/>
      
        
      <div className="max-w-6xl mx-auto">
        {/* Cover Photo Section */}
        <div className="relative bg-gray-200 h-80 text-black w-full">
          <img
            src="https://picsum.photos/1600/400"
            alt="Cover"
            className="w-full h-full object-cover"
          />

        
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-medium px-3 py-1.5 rounded shadow flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>Edit Cover Photo</span>
            </button>
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-medium px-3 py-1.5 rounded shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="relative px-4 sm:px-8">
          {/* Profile Picture */}
          <div className="absolute -top-16 left-4 sm:left-8 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <img
              src={myInfo.profilePic}
              alt="Profile"
              className="w-32 h-32 object-cover"
            />
            <div className="absolute bottom-2 z-40 left-20 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>

           
          </div>




          {/* Profile Actions */}
          <div className="flex justify-end pt-4 pb-2">
            <div className="flex space-x-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white  cursor-pointer font-medium px-3 py-1.5 rounded shadow flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800  cursor-pointer font-medium px-3 py-1.5 rounded shadow flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>More</span>
              </button>
              <MessagePanel myInfo={myInfo} />
              <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer  font-medium px-3 py-1.5 rounded shadow">
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Profile Name and Info */}
          <div className="mt-16 mb-4">
            <h1 className="text-3xl font-bold">{myInfo.name}</h1>
            <p className="text-gray-600">420 friends · 1.2K followers</p>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-300 flex">
            {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Check-ins', 'More'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 font-medium text-sm ${tab === 'Posts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row px-4 sm:px-8 py-4 space-y-4 md:space-y-0 md:space-x-4">
          {/* Left Column - Intro */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-3">Intro</h2>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Lives in San Francisco, California</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Joined June 2015</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Followed by 1.2K people</span>
                </div>
              </div>
              <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-4 rounded">
                Edit Details
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-3">Photos</h2>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <img
                    key={item}
                    src={`https://picsum.photos/200/200?random=${item}`}
                    alt={`Photo ${item}`}
                    className="w-full h-24 object-cover rounded"
                  />
                ))}
              </div>
              <button className="w-full mt-3 text-blue-500 font-medium py-1.5 px-4 rounded hover:bg-blue-50">
                See All Photos
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-3">Friends</h2>
              <p className="text-gray-600 mb-3">420 friends</p>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="text-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${item}`}
                      alt={`Friend ${item}`}
                      className="w-full h-24 object-cover rounded mb-1"
                    />
                    <p className="text-sm font-medium">Friend {item}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-blue-500 font-medium py-1.5 px-4 rounded hover:bg-blue-50">
                See All Friends
              </button>
            </div>
          </div>

          {/* Right Column - Posts */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center space-x-2 mb-4">
                <img
                   src={myInfo.profilePic}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder={`What's on your mind? ${myInfo.name}`}
                  className="flex-1 bg-gray-100 text-black rounded-full px-4 py-2 hover:bg-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex border-t pt-3">
                <button className="flex-1 flex items-center justify-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                  <svg className="w-5 h-5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                  Live Video
                </button>
                <button className="flex-1 flex items-center justify-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Photo/Video
                </button>
                <button className="flex-1 flex items-center justify-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                  <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                  Feeling/Activity
                </button>
              </div>
            </div>

            {/* Sample Post */}
            <ProfilePosts myInfo={myInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;