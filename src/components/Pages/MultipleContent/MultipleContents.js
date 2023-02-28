import React from 'react';
import animation1 from '../../../lottie/animation3.json'
import animation2 from '../../../lottie/animation2.json'
import animation3 from '../../../lottie/neutron.json'
import Lottie from 'lottie-react'
import AOS from 'aos';


const MultipleContents = () => {
    AOS.init()
    
    return (
        <div className='space-y-5 md:space-y-10 bg-[#FBF6F1] -pt-3 px-1 md:py-10 md:px-8 overflow-x-hidden'>
            {/* div1 */}
            <div className='flex flex-col md:flex-row justify-between items-center px-10'>
                <div data-aos="zoom-out-right"  className='w-full md:w-1/2'>
                <h1 className='text-3xl tracking-tight md:tracking-normal md:text-4xl font-Sansita font-thin'> The building blocks</h1>
                <h1 className='text-3xl md:text-4xl font-thin font-Sansita'> to scale big ideas</h1>
        <p className='text-xl md:text-2xl font-thin pt-5'>integrate once, then scale to any size, Celos ecosystems ensures 
        seamless composability across systems, so you never have to be worry about it.</p>
                </div>
                <div className='-pl-5 lg:pl-10 xl:pl-20 w-full md:w-1/2'>
           <Lottie data-aos="zoom-out-left" loop={true} className='w-[200px] md:w-[270px] lg:w-[300px] xl:w-[400px]' animationData={animation1}/>
           </div>
            </div>

            {/* div2*/}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center px-10'>
                <div data-aos="zoom-out-left" className='w-full md:w-1/2'>
                <h1 className='text-3xl md:text-4xl font-thin font-Sansita'> The first to put</h1>
                <h1 className='text-3xl md:text-4xl font-thin font-Sansita'> mobile first</h1>
        <p className='text-xl md:text-2xl font-thin pt-5'>Mobile-first makes Web3 universally accessible. With low cost, 
        multi-currency gas fees and an ultralight client,transactions are lighting fast.</p>
                </div>
                <div className='-pl-5 lg:-pl-3 xl:pl-32 w-full md:w-1/2'>
           <Lottie data-aos="zoom-out-right" loop={true} className='w-[200px] md:w-[270px] lg:w-[300px] xl:w-[400px]' animationData={animation2}/>
           </div>
            </div>

            {/* div3*/}
            <div className='flex flex-col md:flex-row justify-between items-center px-10'>
                <div data-aos="zoom-out-right"  className='w-full md:w-1/2'>
                <h1 className='text-3xl md:text-4xl tracking-tighter font-thin font-Sansita'> A regenerative path towards</h1>
                <h1 className='text-3xl md:text-4xl font-thin font-Sansita'>prosperity</h1>
        <p className='text-xl md:text-2xl font-thin pt-5'>Think and build bigger with our rich ReFi ecosystem using 
        assets and primitives native to Celo.</p>
                </div>
                <div className='-pl-5 lg:pl-10 xl:pl-32 w-full md:w-1/2'>
           <Lottie data-aos="zoom-out-left" loop={true} className='w-[200px] md:w-[270px] lg:w-[300px] xl:w-[400px]' animationData={animation3}/>
           </div>
            </div>

            
        </div>
    );
};

export default MultipleContents;