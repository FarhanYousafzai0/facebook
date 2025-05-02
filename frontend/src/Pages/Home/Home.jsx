import React from 'react'
import Nav from '../../Components/Home/Nav'
import Sidebar from '../../Components/Home/Main-content/Sidebar'
import Main_Content from '../../Components/Home/Main-content/Main_Content'
import Ads from '../../Components/Home/Main-content/Ads'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-[#F2F4F7] text-black flex flex-col overflow-hidden'>
      {/* Navbar */}
      <Nav />

      {/* Main layout area */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden'>

        {/* Sidebar - Sticky / Fixed */}
        <div className='xl:col-span-3 md:col-span-4 hidden md:block h-full sticky top-[64px] overflow-y-auto'>
          <Sidebar />
        </div>

        {/* Main Content - Scrollable */}
        <div className='xl:col-span-6 md:col-span-8 col-span-12 h-full overflow-y-auto'>
          <Main_Content />
        </div>

        {/* Ads - Sticky / Fixed */}
        <div className='xl:col-span-3 md:col-span-4 hidden md:block h-full sticky top-[64px] overflow-y-auto'>
          <Ads />
        </div>

      </div>
    </div>
  )
}

export default Home
