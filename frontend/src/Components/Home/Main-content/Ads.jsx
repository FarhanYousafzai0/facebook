import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Ads = () => {
  return (
    <div className='h-full p-4'>

<h1 className=' font-semibold text-[1.2rem]'>Sponsored</h1>

{/* Ads */}
<div className='h-200px rounded-md w-full flex gap-1 my-4 text-start hover:bg-gray-200 p-2 cursor-pointer'>

<img width={100} src='https://scontent.fpew5-1.fna.fbcdn.net/v/t45.1600-4/488630671_1011267017098407_827561486294938569_n.jpg?stp=cp0_dst-jpg_q75_s526x296_spS444_tt6&_nc_cat=101&ccb=1-7&_nc_sid=c02adf&_nc_ohc=HMCzia3xwtAQ7kNvwEdxM-6&_nc_oc=AdlrdZNeYaaU_ViyeR3Ud01SWmMFl29bYuAn4mg7DPbfClrQewzB8LId-C28EwMuUkg&_nc_zt=1&_nc_ht=scontent.fpew5-1.fna&_nc_gid=0p7p8b3400rTMk47cPEmRg&oh=00_AfFkAleIpEL79RU3b_kQDZvrdACwcImiEiXh0WN1lDnDHA&oe=68159A39'alt='Ads' loading='' className='rounded-md'/>

<div className='flex flex-col '>

    <p className='font-semibold '>No interuption,just cricket-HBLPSL Live in HD,only on tapmad.</p>
    <a className='text-xs'>tapmad.com</a>
</div>




</div>
<hr className='my-4 text-gray-300'/>

{/* Chats- */}
<div className='flex flex-col'>
<h1 className=' font-semibold text-[1.2rem] text-black/90'>Group chats</h1>


<button className='w-full p-2 mt-2 hover:bg-gray-200 transition-all duration-100 cursor-pointer rounded-lg flex items-center gap-3 '>
    
    <spam className="flex items-center justify-center w-[35px] h-[35px] bg-gray-300 rounded-full"><FaPlus/></spam>
    Create a group chat</button>
</div>


    </div>
  )
}

export default Ads