import React, { useEffect, useState } from 'react';
import logo from '../../../assets/celo.PNG'
import menu from '../../../assets/menu.PNG'

const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navbarClass = `sticky top-0 z-50 flex justify-between items-center bg-[#FBF6F1] w-full px-3 md:px-10 py-1 ${
      scroll ? 'border-b border-gray-900' : ''
    }`;
  
    return (
      <div className={navbarClass}>
        <img className='w-20 md:full lg:w-40' src={logo} alt='' />
        <img className='w-20 md:full lg:w-40' src={menu} alt='' />
      </div>
    );
  };

export default NavBar;