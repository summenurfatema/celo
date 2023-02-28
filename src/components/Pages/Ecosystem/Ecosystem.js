import React from 'react';
import img1 from '../../../assets/impect.PNG'
import img2 from '../../../assets/ethic.PNG'
import img3 from '../../../assets/tou.PNG'
import img4 from '../../../assets/uni.PNG'
import img5 from '../../../assets/yalora.PNG'
import img6 from '../../../assets/kick.PNG'
import img7 from '../../../assets/flow.PNG'
import img8 from '../../../assets/kolek.PNG'
import {IoMdArrowDropright} from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Ecosystem = () => {
    AOS.init()
    const images =[
        {
            id:1 ,
            image:img1
        },
        {
            id: 2,
            image:img2
        },
        {
            id: 3,
            image:img3
        },
        {
            id: 4,
            image:img4
        },
        {
            id:5 ,
            image:img5
        },
        {
            id:6 ,
            image:img6
        },
        {
            id: 7,
            image:img7
        },
        {
            id:8 ,
            image:img8
        },
    ]
    return (
        <div className='py-10 bg-[#FBF6F1] px-1 md:px-5 lg:px-10'>
            <div className='flex flex-col md:items-start lg:flex-row justify-between lg:items-center md:px-10 pl-0 ml-2 md:pl-10 overflow-x-hidden'>
                <div data-aos="fade-right" >
                <h1 className='text-2xl tracking-tight text-center md:text-start font-medium lg:text-5xl lg:font-thin py-0 lg:py-2 font-Sansita'>The blockchain ecosystem</h1>
                <h1 className='text-2xl tracking-tight text-center md:text-start font-medium lg:text-5xl lg:font-thin py-0 lg:py-2 font-Sansita'>built with purpose</h1>
                </div>
                <button data-aos="fade-left"  className='font-semibold text-sm lg:text-xl pl-7 md:pl-0 mt-5 lg:mt-0'>Explore the Celo ecosystem <span><IoMdArrowDropright className='inline text-xl md:text-2xl rounded-full text-white bg-gray-900 hover:bg-yellow-300 hover:text-black'/></span></button>
            </div>
        <div data-aos="zoom-in"  className='h-[310px] md:h-[550px] lg:h-[480px]  grid grid-cols-3 lg:grid-cols-4 px-10 md:px-16 lg:px-20 pt-7'>

          {
            images.map(img=>
                <div className='h-24 md:h-44 lg:h-60 border border-gray-700 flex justify-center items-center'>
            <img src={img.image} alt=' '/>
            </div>)
          }
           </div> 
        </div>
    );
};

export default Ecosystem;