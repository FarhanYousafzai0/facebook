import React from 'react'
import { motion, scale } from 'framer-motion'
import Nav from '../../Components/Home/Nav'
import { MdPersonAddAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoIosInformationCircleOutline, IoMdShareAlt } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'

const ClimateCenter = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
    }
  }

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }

  const buttonTap = {
    scale: 0.95
  }

  return (
    <div className='w-screen min-h-screen bg-gray-50 overflow-x-hidden'>
      <Nav/>

      {/* Hero Section */}
      <motion.div 
        className="w-[80%] mx-auto h-[400px] bg-gradient-to-r from-[#E4F5FE] via-[#E6EBE0] to-[#FEF3DF] rounded-b-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] max-w-6xl mx-auto h-full flex flex-col justify-end p-4 mb-5">
          <motion.div 
            className="flex items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <h3 className="md:text-3xl text-2xl text-black font-bold">Climate Science Center</h3>
              <motion.img
                width={60}
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/ktw4C8enVa3.png"
                alt="climate"
                animate={{ 
                  rotate: [0, 5, -5, 5, 0],
                  y: [0, -5, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <motion.button
                type="submit"
                className="h-[40px] cursor-pointer w-[10rem] rounded-md bg-blue-500 text-white font-semibold"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <span className='flex items-center justify-center gap-1'> 
                  <MdPersonAddAlt/>
                  Follow
                </span>
              </motion.button>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className='w-[40px] h-[40px] bg-gray-200 rounded-md flex items-center text-black justify-center'>
                  <IoMdShareAlt size={25}/>
                </Link>
              </motion.div>
              
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className='w-[40px] h-[40px] bg-gray-200 rounded-md flex items-center text-black justify-center'>
                  <FcAbout size={25}/>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Korean-Inspired Grid Layout */}
      <div className='grid grid-cols-1 mx-auto gap-5 md:grid-cols-3 my-10 text-black w-[80%] max-w-6xl'>
        {/* Card 1 (span 2) */}
        <motion.div
          className='rounded-xl shadow-md relative bg-white col-span-2 p-3 h-[400px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
<span className='hover:bg-gray-100 cursor-pointer transition-all  w-[40px] h-[40px] rounded-full flex items-center absolute right-3 top-3 justify-center'>
<IoIosInformationCircleOutline size={25}/>
</span>


<p className='max-w-xl'><strong>Beat, add a climate frame to your profile picture for Earth Day </strong>
We can all play a part in fighting climate change. Add a frame to inspire your friends to join the conversation.</p>

<div className='flex flex-col items-center justify-center'>

  <img  src='https://scontent.fisb9-1.fna.fbcdn.net/v/t39.1997-6/341759877_228988323117671_5533063600566795209_n.png?stp=dst-png_s261x260&_nc_cat=1&ccb=1-7&_nc_sid=ac83ff&_nc_ohc=ja4Q7kwXgGQQ7kNvwHttZLB&_nc_oc=AdkW0xDBlXW8kNrDbf24sUoiI-1-8AapFeEm25pEmeHhpPGrCuO3J5lnxhEzCqcX9iU&_nc_zt=26&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfGvK5BDK_vvWghbkI7CS_0VrLu4bKNAsovk_kM-tIdpLg&oe=681BED21'/>


  <motion.button 
  whileTap={{scale:0.9}}
  
  className='w-[60%] p-2 my-2 mx-auto rounded-md font-semibold cursor-pointer bg-gray-200'>Try it</motion.button>
</div>



        </motion.div>

        {/* Card 2 (span 1) */}
        <motion.div
          className='rounded-xl shadow-md relative bg-white p-3 col-span-1 h-[420px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
<div className='flex items-center justify-between'>

<strong>In photos: climate solutions
</strong>
<span className='hover:bg-gray-100 cursor-pointer transition-all  w-[40px] h-[40px] rounded-full flex items-center  justify-center'>
<IoIosInformationCircleOutline size={25}/>
</span>
</div>

<p className='max-w-xl'>
See how people are tackling climate change across fashion, farming and more.
</p>


<div className='grid grid-cols-1 md:grid-cols-3 gap-y-2  my-2'>

<img width={100} src='https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEriNJ0TGgM7diC4Tjg3sqEbQa5h3yqFPj3R0ZX6lkifA&oe=683D8CC9' className='col-span-1 rounded'/>
<img width={100} src='https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEriNJ0TGgM7diC4Tjg3sqEbQa5h3yqFPj3R0ZX6lkifA&oe=683D8CC9' className='col-span-1 rounded'/>
<img width={100} src='https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEriNJ0TGgM7diC4Tjg3sqEbQa5h3yqFPj3R0ZX6lkifA&oe=683D8CC9' className='col-span-1 rounded'/>



<img width={100} src='https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEriNJ0TGgM7diC4Tjg3sqEbQa5h3yqFPj3R0ZX6lkifA&oe=683D8CC9' className='col-span-2 rounded'/>

<img width={100} src='https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEriNJ0TGgM7diC4Tjg3sqEbQa5h3yqFPj3R0ZX6lkifA&oe=683D8CC9' className='col-span-1 rounded'/>

</div>




        </motion.div>

        {/* Card 3 (span 2) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-2 h-[300px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        ></motion.div>

        {/* Card 4 (span 1) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-1 h-[320px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        ></motion.div>

        {/* New Card 5 (span 1) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-1 h-[350px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        ></motion.div>

        {/* New Card 6 (span 2) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-2 h-[380px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        ></motion.div>
      </div>
    </div>
  )
}

export default ClimateCenter