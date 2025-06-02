import React from 'react'
import Nav from '../../Components/Home/Nav'
import Sidebar from '../../Components/Home/MarketPlace/Sidebar'
import MarektLIsting from '../../Components/Home/MarketPlace/MarektLIsting'

const Marketplace = () => {
  return (
    <>
<Nav/>


<div className='flex  items-center r w-screen h-[80vh]'>
<Sidebar/>
<MarektLIsting/>

</div>

      
    </>
  )
}

export default Marketplace
