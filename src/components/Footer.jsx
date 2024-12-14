import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#F9FAFB] flex flex-col lg:flex-row justify-around px-4 sm:px-8 md:px-16 lg:px-[250px] mt-10 py-10 lg:py-[120px]'>
      {/* First Section: Image and Description */}
      <div className='w-full lg:w-[38%] mb-8 lg:mb-0'>
        <img src="./14.jpg" alt="" className='bg-cover'/>
        <p className='lg:w-[50%] mt-8 text-sm sm:text-base lg:text-lg'>
          Design amazing digital experiences that create more happiness in the world.
        </p>
      </div>
      <div className='text-[#0051AD] flex flex-col font-semibold mt-8 lg:mt-0'>
        <button className='text-[#101828] text-sm sm:text-base lg:text-base mb-2'>Product</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Overview</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Features</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Solutions</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Tutorials</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base'>Pricing</button>
      </div>
      <div className='text-[#0051AD] flex flex-col font-semibold mt-8 lg:mt-0'>
        <button className='text-[#101828] text-sm sm:text-base lg:text-base mb-2'>Resources</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Blog</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Newsletter</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Help centre</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base mb-2'>Tutorials</button>
        <button className='hover:text-blue-900 text-sm sm:text-base lg:text-base'>Support</button>
      </div>
      <div className='mt-8 lg:mt-0'>
        <p className='text-sm sm:text-base lg:text-base mb-2'>Stay up to date</p>
        <input 
          type="text" 
          placeholder='Enter your email'
          className='px-3 rounded-lg py-2 lg:w-[230px] w-full  outline-blue-300 mt-5 text-sm sm:text-base lg:text-base'
        />
      </div>
      <button className="bg-[#0068D6] hover:bg-blue-700 font-semibold h-[45px] rounded-lg px-3 py-2 lg:text-[18px] text-[15px] text-white mt-5 lg:mt-[48px]">
        Subscribe
      </button>
    </footer>
  )
}

export default Footer
