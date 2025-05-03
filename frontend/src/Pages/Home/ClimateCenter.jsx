import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Home/Nav'
import { TbTooltip } from 'react-icons/tb'
import { MdFollowTheSigns, MdPersonAddAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoMdShareAlt } from 'react-icons/io'
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

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }

  const buttonTap = {
    scale: 0.95
  }

  return (
    <>
      <div className='w-screen min-h-screen bg-white overflow-x-hidden'>
        <Nav/>

        {/* Hero Section with animations */}
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
              {/* Left */}
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

              {/* Right */}
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

        {/* Content Section */}
        
        
         
      </div>
    </>
  )
}

export default ClimateCenter