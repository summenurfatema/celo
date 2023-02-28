import React from 'react';
import CountUp from 'react-countup';

const Calculation = () => {
    return (
        <div className='-py-6'>
        <div className='relative w-[320px] md:w-full lg:w-[1280px] xl:w-full h-[540px] bg-[#FBF6F1]'>

           {/* box1 */}
            <div className='h-96 w-36 md:h-[400px] md:w-[400px] lg:h-[531px] lg:w-[643px] border bg-[#EDEBE1] border-gray-700 absolute right-4 lg:right-20 z-30 lg:z-10'>
                <div className='pl-3 md:pl-6 lg:pl-10 pt-4'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl'>
                <CountUp start={200000000} end={226269018}></CountUp>
                </h2>
                <p className='text-sm md:text-xl lg:text-2xl'>Total</p>
                <p className='text-sm md:text-xl lg:text-2xl'>transations</p>
                </div>
            </div>

            {/* box2 */}
            <div className='h-80 md:h-[304px] md:w-[480px] w-36 lg:h-[387px] lg:w-[552px] border bg-[#EDEBE1] border-gray-700 absolute right-36 top-16 md:top-24 md:right-44 lg:right-96 lg:top-36 z-0 lg:z-20'>
            <div className='pl-3 md:pl-6 lg:pl-10 pt-4'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl'>
                <CountUp start={100} end={826}></CountUp>   
                </h2>
                <p className='text-sm md:text-xl lg:text-2xl'>Days carbon</p>
                <p className='text-sm md:text-xl lg:text-2x'>negative</p>
                </div>
            </div>
                 {/* box3 */}
            <div className='h-56 w-36 md:h-[224px] md:w-[400px] lg:h-[211px] lg:w-[426px] border bg-[#EDEBE1] border-gray-700 absolute right-7 top-40 md:top-44 md:right-16 lg:right-[800px] lg:top-80 z-30 lg:z-40'>
            <div className='pl-3 md:pl-6 lg:pl-10  pt-3'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl'>
                <CountUp start={0} end={5}></CountUp> 
                s</h2>
                <p className='text-sm md:text-xl lg:text-2xl'>Avg block time</p>
              
                </div>
            </div>
                 {/* box4 */}
            <div className='h-32 w-36 md:h-[140px] md:w-[380px] lg:h-[147px] lg:w-[386px] border bg-[#EDEBE1] border-gray-700 absolute top-[256px] left-4 md:top-[260px]  lg:left-[880px] lg:top-96 z-40'>
            <div className='pl-3 md:pl-6 lg:pl-10  pt-4'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl'>$0.0005
                
                </h2>
                <p className='text-sm md:text-xl lg:text-2xl '>Avg gas fee</p>
                
                </div> 
            </div>
            
            </div>  
        </div>
    );
};

export default Calculation;