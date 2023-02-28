import React from 'react';
import logo from '../../../assets/celo.PNG'
import menu from '../../../assets/menu.PNG'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-[#FBF6F1] w-full px-3 md:px-10 py-5'>
            <img className='w-20 md:full lg:w-40' src={logo} alt=''/>
            <img className='w-20 md:full lg:w-40' src={menu} alt=''/>
        </div>
    );
};

export default NavBar;