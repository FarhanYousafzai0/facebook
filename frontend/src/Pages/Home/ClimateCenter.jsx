import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Home/Nav'
import { MdGppGood, MdPersonAddAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoIosInformationCircleOutline, IoMdShareAlt } from 'react-icons/io'
import { FcAbout, FcRight } from 'react-icons/fc'

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
      type: 'spring',
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
  transition: { type: 'spring', stiffness: 400, damping: 10 }
}

const buttonTap = {
  scale: 0.95
}

const ClimateCenter = () => {
  return (
    <div className="w-full min-h-screen bg-[#F2F4F7] overflow-x-hidden">
      <Nav />

      {/* Hero Section */}
      <motion.div
        className="w-[90%] max-w-7xl mx-auto h-[300px] md:h-[400px] bg-gradient-to-r from-[#E4F5FE] via-[#E6EBE0] to-[#FEF3DF] rounded-b-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full flex flex-col justify-end p-4 md:p-6">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title & Icon */}
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <h3 className="text-2xl md:text-4xl font-bold text-black">Climate Science Center</h3>
              <motion.img
                width={50}
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/ktw4C8enVa3.png"
                alt="climate"
                animate={{
                  rotate: [0, 5, -5, 5, 0],
                  y: [0, -5, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <motion.button
                type="submit"
                className="h-10 px-4 bg-blue-500 text-white rounded-md font-semibold flex items-center gap-2"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <MdPersonAddAlt />
                Follow
              </motion.button>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-black">
                  <IoMdShareAlt size={22} />
                </Link>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-black">
                  <FcAbout size={22} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] max-w-7xl mx-auto py-10 text-black">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-xl shadow-md col-span-1 md:col-span-2 p-4 flex flex-col gap-4 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <span className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
            <IoIosInformationCircleOutline size={22} />
          </span>

          <p className="text-base md:text-lg">
            <strong>Add a climate frame to your profile picture for Earth Day.</strong><br />
            We can all play a part in fighting climate change. Add a frame to inspire your friends to join the conversation.
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src="https://scontent.fisb9-1.fna.fbcdn.net/v/t39.1997-6/341759877_228988323117671_5533063600566795209_n.png?stp=dst-png_s261x260&_nc_cat=1&ccb=1-7&_nc_sid=ac83ff&_nc_ohc=ja4Q7kwXgGQQ7kNvwHttZLB&_nc_oc=AdkW0xDBlXW8kNrDbf24sUoiI-1-8AapFeEm25pEmeHhpPGrCuO3J5lnxhEzCqcX9iU&_nc_zt=26&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfGvK5BDK_vvWghbkI7CS_0VrLu4bKNAsovk_kM-tIdpLg&oe=681BED21"
              className="w-40 md:w-48"
              alt="Climate Frame"
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-[80%] md:w-[70%] cursor-pointer p-2 rounded-md font-semibold bg-gray-200"
            >
              Try it
            </motion.button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">In photos: climate solutions</strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

          <p className="text-base md:text-sm">
            See how people are tackling climate change across fashion, farming and more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/176001810_4485808308101057_6994506477478453837_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_LMQVskTRF8Q7kNvwFYCmcB&_nc_oc=AdnN2R3stMed1T5jFoSM4bCvJga-eKxbdmHsYwC_xxpAk-2O5myAXm-dFaZPhK9QZ6g&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=SPcmVASOR7XMue-k9gAdjQ&oh=00_AfFFxGz26EJvJw1jmcv5AkShfeVwR6E4Pod4jre2pn3gjw&oe=683DC932',
              'https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/174208554_4470733129608575_4273380564265836812_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cqeoLRqrSWUQ7kNvwFOViCx&_nc_oc=Admqrs-uEerkCmDkqUP8jY2r2_DR7AnD3774pFY571Bpo1sjuusav0mr34wVLdwere8&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=1to12Hgx0euqLThboiLxTg&oh=00_AfGI_cQThpwSEjKVKhCc7Jx7J6z1wfaoHnRuW2AaHhKFOw&oe=683DC633',
              'https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173687500_4470733079608580_5163306396885478425_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NbYK9iA2NG8Q7kNvwHk1ca3&_nc_oc=AdmIQYgl7nDj44wPShr_OkHjI6_B-s3GUtrTtUynRuXzG5B5Phe1n18MsdPEU7i_poo&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=57zGhnXToyA4kW_M6v5sxQ&oh=00_AfEUbi9UHuJLJyCwz4Jh21uz5fEBXrZYjE95kRDUJG31xA&oe=683DC509',
              'https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/173935299_4470732842941937_6675642113769078470_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EEvQZ3u_cvwQ7kNvwGAL-CJ&_nc_oc=AdnoYwSfnfDMFRN1KBSbNCy4l3WCtnvg4Y2hewelxylJroi88nMmWAeX7W9_wi7LgmI&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=7uJ1xgTVd5F1FdfxheU9ng&oh=00_AfF8OkO_EP09nbWNC2Ye79Swh4GrXOKXPWXf8fsKJMuJ6w&oe=683DC88E',
              'https://scontent.fisb9-1.fna.fbcdn.net/v/t1.6435-9/174125784_4470732686275286_6450400850338838890_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c72nG7zYra4Q7kNvwGA3IHO&_nc_oc=Admqbx4eM9qtvX5UfefQtKEiqOg0qfHDdER-17wuE6tZSw5T0fJYChWCcLX0RtvP4s0&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=KSXUosigPjH2iqzf0ThhsA&oh=00_AfHyhtVdcOXwVgm3DhG0tLNLiqgT55MVNf3LtJ-8vdEstw&oe=683DD8EB'
            ].map((img, i) => (
              <img
                key={i}
                src={`${img}`}
                alt={`Climate ${i}`}
                className="w-full h-28 md:h-32 object-cover rounded"
              />
            ))}
          </div>
        </motion.div>


        <motion.div
          className='rounded-xl shadow-md bg-white col-span-2 p-3 h-[300px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
<div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">IPCC updates on adaptation</strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

        
<div className='flex items-center gap-2'>

<img src='https://static.xx.fbcdn.net/rsrc.php/v4/yY/r/AgIUP2_rv0r.png'/>
<p className='max-w-lg'>
There are many low-cost and effective options available now to adapt to an already changing climate.</p>

</div>

<div className='flex items-center gap-2 my-2'>

<img src='https://static.xx.fbcdn.net/rsrc.php/v4/yL/r/n5bJ1J5bmCt.png'/>
<p className='max-w-lg'>
In order to take advantage of the best adaptation options available, businesses, people, and governments will need to prioritize spending in this area.
</p>
</div>


<div className='flex items-center gap-2 my-2'>

<img src='https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/gWK1Mcy7wJ3.png'/>
<p className='max-w-lg'>
Options for adaptation can only help to a certain extent, and will work best when used together with the immediate roll out of global emission-reducing policies and systems.
</p>
</div>


        </motion.div>

        {/* Card 4 (span 1) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-1 p-3 h-[320px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
<div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">Recognized organizations</strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>


<div className='flex flex-col gap-2'>
<div className='flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded'>

  <div className='flex  gap-2'>
    <img width={60} className='rounded-full' src='https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-1/276176409_275332584771142_507904235747872858_n.png?stp=dst-png_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=f907e8&_nc_ohc=ItlRzBVttRYQ7kNvwHUucvV&_nc_oc=AdnjQP-2AFt5wIC0Qpqps9FmUYdAA1vttg85NR1QQ-Yw96K0G0JyVib3eg9V5xxxKmQ&_nc_zt=24&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfGPywplhLMtxzbY-zhox8JJ7E52fLIRkFx29TlFpvQpbQ&oe=681BE157' alt=''/>
<div className='flex flex-col items-start'>
<span className='flex items-center gap-1 text-blue-500'>
IPPC <MdGppGood  />
</span>
<p className='text-sm'>Nonprofit organization</p>
</div>


  </div>

<button className='bg-blue-200 cursor-pointer  text-blue-500 p-2 px-6 rounded-md  font-semibold'>
<span className='flex items-center gap-1'>
  <MdPersonAddAlt/>
  Follow
</span>

</button>
</div>
{/*  */}

<div className='flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded'>

  <div className='flex  gap-2'>
    <img width={60} className='rounded-full' src='https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-1/271749354_287578106737301_2016233505493951851_n.png?stp=dst-png_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f907e8&_nc_ohc=cH0wwJKx7fkQ7kNvwGu6zLT&_nc_oc=AdmWVJOgkLqAd-Gn4Q5XbczPS1fp_vYx6U-J29yjgPZd4ISazOrNgzwjz05wRgXJx5s&_nc_zt=24&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEmrQCDaQEtjyT0RANBtjaWzTatib3luRJL65C5G4pelw&oe=681BE4CA' alt=''/>
<div className='flex flex-col items-start'>
<span className='flex items-center  text-sm text-blue-500'>
 Meteorological<MdGppGood  />
</span>
<p className='text-sm '> Intergovernmental Organization
</p>
</div>


  </div>

<button className='bg-blue-200 cursor-pointer  text-blue-500 p-2 px-6 rounded-md  font-semibold'>
<span className='flex items-center gap-1'>
  <MdPersonAddAlt/>
  Follow
</span>

</button>
</div>
{/*  */}
<div className='flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded'>

  <div className='flex  gap-2'>
    <img width={60} className='rounded-full' src='https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-1/271714453_288492856644133_2259217072983045887_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f907e8&_nc_ohc=TnfZ-qaJSqUQ7kNvwEgsw-U&_nc_oc=Admf4pSOceecmlZAiXS-8607yiRW4kHoEgLEV9SyzH3HxlhWP5TeIhT4QWaEcuxFKYo&_nc_zt=24&_nc_ht=scontent.fisb9-1.fna&_nc_gid=6legpieiBDbgA3_1rZ3Umw&oh=00_AfEIx7_9LVHx9_G1YaEOfVCS3tyUT8ACq82nEqs8sKnRdg&oe=681BF195' alt=''/>
<div className='flex flex-col items-start'>
<span className='flex items-center gap-1 text-blue-500'>
UN Enviroment<MdGppGood  />
</span>
<p className='text-sm'>Organization</p>
</div>


  </div>

<button className='bg-blue-200 cursor-pointer  text-blue-500 p-2 px-6 rounded-md  font-semibold'>
<span className='flex items-center gap-1'>
  <MdPersonAddAlt/>
  Follow
</span>

</button>
</div>

</div>


        </motion.div>

        {/* New Card 5 (span 1) */}
        <motion.div
          className='rounded-xl shadow-md bg-white col-span-1 p-3 h-[350px]'
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
           <div className="flex justify-between items-start">
    <strong className="text-lg md:text-xl">Average temperature by year</strong>
    <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <IoIosInformationCircleOutline size={22} />
    </span>
  </div>


          
        </motion.div>

        {/* New Card 6 (span 2) */}
        <motion.div
  className='rounded-xl shadow-md bg-white col-span-2 p-3 h-[380px] overflow-y-auto'
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
>
  <div className="flex justify-between items-start">
    <strong className="text-lg md:text-xl">Facts about climate change</strong>
    <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <IoIosInformationCircleOutline size={22} />
    </span>
  </div>

  <p className="mt-2 mb-4">These facts from climate researchers correct common misconceptions about global warming and its impact.</p>

  <div className='flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer'>
    <img 
      src='https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-Scientists-Small_light-4x.png'
      className='w-12 h-12 object-contain flex-shrink-0'
      alt="Scientists fact"
    />
    <p className='text-sm'>
      There are many low-cost and effective options available now to adapt to an already changing climate.
    </p>
  </div>

  <div className='flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer my-2'>
    <img 
      src='https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-CleanEnergy-Small_light-4x.png'
      className='w-12 h-12 object-contain flex-shrink-0'
      alt="Clean energy fact"
    />
    <p className='text-sm'>
      In order to take advantage of the best adaptation options available, businesses, people, and governments will need to prioritize spending in this area.
    </p>
  </div>

  <div className='flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer my-2'>
    <img 
      src='https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-WildFires-Small_light-4x.png'
      className='w-12 h-12 object-contain flex-shrink-0'
      alt="Policy fact"
    />
    <p className='text-sm'>
      Options for adaptation can only help to a certain extent, and will work best when used together with the immediate roll out of global emission-reducing policies and systems.
    </p>
  </div>
</motion.div>
      </div>
    </div>
  )
}

export default ClimateCenter
