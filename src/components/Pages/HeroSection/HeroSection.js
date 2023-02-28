import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex justify-around items-center'>
            {/* left side */}
            <div className='w-3/5 pl-10'>
                <h1 className='font-thin text-5xl font-sans'>Build together</h1>
      <h1 className='font-thin text-5xl font-sans pl-16'>and prosper</h1>
      <p className='pr-24 py-6 text-2xl font-thin'>Celo is the carbon-negative, mobile-first, EVM-compatible blockchain ecosystem 
        leading a thriving new digital economy for all.</p>
        <div className='space-x-7'>
                <button className='bg-yellow-300 font-semibold px-16 rounded-full py-5 text-xl'>Build with celo</button>
                <button className='font-semibold text-xl'>Join the community <span className='h-7 w-7 bg-black rounded-full hover:bg-yellow-300'></span> </button>
            </div>
            </div>
           
            {/* right side */}
            <div className='w-2/5 h-60 bg-slate-400'></div>
        </div>
    );
};

export default HeroSection;