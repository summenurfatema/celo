import React from 'react';
import Lottie from 'lottie-react'
import cube1 from '../../../lottie/cube1.json'
import {IoMdArrowDropright} from 'react-icons/io'
const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center px-1 lg:px-10 py-8 bg-[#FBF6F1]'>
            {/* left side */}
            <div className='w-3/5 pl-5 lg:pl-10'>
                <h1 className='font-thin text-2xl lg:text-5xl font-sans'>Build together</h1>
      <h1 className='font-thin text-2xl lg:text-5xl font-Sansita pl-8 lg:pl-16'>and prosper</h1>
      <p className='pr-24 py-6 text-2xl font-thin hidden md:block'>Celo is the carbon-negative, mobile-first, EVM-compatible blockchain ecosystem 
        leading a thriving new digital economy for all.</p>
        <div className='md:flex space-x-7 hidden'>
                <button className='bg-yellow-300 font-semibold rounded-full lg:px-16 lg:py-5  md:px-6 md:py-4 text-xl'>Build with celo</button>
                <button className='font-semibold text-xl'>Join the community <span><IoMdArrowDropright className='inline text-xl md:text-2xl rounded-full text-white bg-gray-900 hover:bg-yellow-300 hover:text-black'/></span> <span className='h-7 w-7 bg-black rounded-full hover:bg-yellow-300'></span></button>
            </div>
            </div>
           
            {/* right side */}
            <div  className='lg:w-2/5'>
                <Lottie  animationData={cube1}/>
              
            </div>

            <div className='md:hidden'>
            <p className='px-3 py-6 text-xl font-thin'>Celo is the carbon-negative, mobile-first, EVM-compatible blockchain ecosystem 
        leading a thriving new digital economy for all.</p>
        <div className='flex space-x-2 p-3 items-center'>
                <button className='bg-yellow-300 font-semibold px-4 rounded-full py-3 text-sm'>Build with celo</button>
                <button className='font-semibold text-sm'>Join the community <span><IoMdArrowDropright className='inline text-xl md:text-2xl rounded-full text-white bg-gray-900 hover:bg-yellow-300 hover:text-black'/></span> <span className='h-7 w-7 bg-black rounded-full hover:bg-yellow-300'></span> </button>
           </div>
            </div>
        </div>
    );
};

export default HeroSection;