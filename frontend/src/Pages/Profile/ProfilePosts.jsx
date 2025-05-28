import React from 'react'

const ProfilePosts = ({myInfo}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={myInfo.profilePic}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-black">{myInfo?.name}</p>
                      <p className="text-xs text-gray-500">Yesterday at 3:45 PM · <span className="text-blue-500">Public</span></p>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
                <p className="mb-3">Just finished my new album! Can't wait to share it with all of you next month. Stay tuned for updates!</p>
                <img
                  src="https://picsum.photos/800/400"
                  alt="Post"
                  className="w-full rounded-lg mb-3"
                />
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <div className="flex items-center space-x-1">
                    <div className="bg-blue-500 text-white rounded-full p-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>120</span>
                  </div>
                  <div>
                    <span>42 comments · 12 shares</span>
                  </div>
                </div>
                <div className="border-t border-b border-gray-200 py-1 flex">
                  <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Like
                  </button>
                  <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    Comment
                  </button>
                  <button className="flex-1 flex items-center justify-center text-gray-500 hover:bg-gray-100 py-1 rounded font-medium">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
    </>
  )
}

export default ProfilePosts
