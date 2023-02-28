import React from 'react';
import Calculation from '../Pages/Calculation/Calculation';
import Ecosystem from '../Pages/Ecosystem/Ecosystem';
import HeroSection from '../Pages/HeroSection/HeroSection';
import MultipleContent from '../Pages/MultipleContent/MultipleContent';
import NavBar from '../Pages/NavBar/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            {/* <HeroSection/> */}
            <Calculation/>
            {/* <MultipleContent/>
            <Ecosystem/> */}
        </div>
    );
};

export default HomePage;