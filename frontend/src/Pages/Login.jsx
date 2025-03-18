import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-screen h-screen relative bg-[#efe9e0b3] p-10'>
        
        <div className='flex items-center w-full h-full justify-center gap-10'>

            <div className='lg:flex hidden flex-col items-start gap-5 w-1/2'>
                
                <h1 className='text-[#0F9E99] text-7xl font-semibold'>Social Nest</h1>
                <p className='text-black font-semibold w-xl text-2xl '>Social Nest helps you connect and share with the people in your life.</p>
            </div>


            <div className="flex h-120 items-center justify-center bg-gray-100">
      <div className="md:max-w-md max-w-full p-8 rounded-xl ">
  
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-[#0F9E99] rounded-md  "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-[#0F9E99] "
          />
          <button
            type="submit"
            className="w-full bg-facebook text-white font-bold py-3 rounded-md cursor-pointer bg-[#0F9E99] transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-facebook text-sm hover:underline">Forgotten password?</a>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
        <button
  className="
    relative transition-all duration-300 ease-in-out
    shadow-[0_10px_20px_rgba(0,0,0,0.2)] 
    py-3 px-7 bg-[#0F9E99] 
    rounded-lg flex items-center 
    justify-center text-white gap-2 
    font-bold 
    outline-none overflow-hidden text-[15px] 
    cursor-pointer 
    hover:scale-105 hover:border-[#fff9]
    before:content-[''] before:absolute 
    before:w-[100px] before:h-full 
    before:bg-gradient-to-r 
    before:from-transparent 
    before:via-white/80 
    mx-auto
    before:to-transparent 
    before:top-0 before:-left-[100px] 
    before:opacity-60 
    hover:before:animate-[shine_1.5s_ease-out_infinite]
  "
>
  Create new account

</button>

        </div>
      </div>
    </div>
        </div>
        
         </div>
    </>
  )
}

export default Login
