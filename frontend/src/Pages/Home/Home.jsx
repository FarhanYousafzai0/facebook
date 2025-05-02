import React from 'react';
import Nav from '../../Components/Home/Nav';
import Sidebar from '../../Components/Home/Main-content/Sidebar';
import Main_Content from '../../Components/Home/Main-content/Main_Content';
import Ads from '../../Components/Home/Main-content/Ads';

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#F2F4F7] text-black flex flex-col overflow-hidden">
      {/* Navbar */}
      <Nav />

      {/* Main layout area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Sidebar (shown on lg and up) */}
        <div className="hidden lg:block lg:col-span-3 h-full sticky top-[64px] overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main Content (always shown) */}
        <div className="col-span-12 lg:col-span-6 h-full overflow-y-auto">
          <Main_Content />
        </div>

        {/* Ads (only shown on xl and up) */}
        <div className="hidden xl:block xl:col-span-3 h-full sticky top-[64px] overflow-y-auto">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Home;
