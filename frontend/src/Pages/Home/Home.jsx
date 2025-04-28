import React from 'react'
import Nav from '../../Components/Home/Nav'
import Sidebar from '../../Components/Home/Main-content/Sidebar'
import Main_Content from '../../Components/Home/Main-content/Main_Content'
import Ads from '../../Components/Home/Main-content/Ads'

const Home = () => {
  return (
    <div className='w-screen h-screen relative  bg-[#F2F4F7] text-black '>
      <Nav/>

<div className='min-h-[91vh]  grid grid-cols-1 md:grid-cols-12  '>

{/* Sidebar */}
<div className='xl:col-span-3 xl:block hidden col-span-12 overflow-hidden'>
<Sidebar/>
</div>


{/* Main-Content */}

<div className='xl:col-span-6 md:col-span-8 col-span-12'>
<Main_Content/>
</div>


{/* Ads section */}
<div className='xl:col-span-3 md:col-span-4 md:block hidden '>
<Ads/>
</div>

</div>


    </div>
  )
}

export default Home
