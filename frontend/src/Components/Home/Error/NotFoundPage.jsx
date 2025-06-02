import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Apple Logo */}
       
        
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        
        {/* Message */}
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        {/* Home Button */}
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center mx-auto"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;