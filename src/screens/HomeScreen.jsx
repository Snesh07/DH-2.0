import React from 'react'
import { BannerSlider } from '../components/BannerSlider';
import { Navbar } from '../components/Navbar'
import { WhyChoose } from '../components/WhyChoose';

export const HomeScreen = () => {
  return (
    <>
        <div className='homeScreen'>
            <Navbar />
            <BannerSlider />
            <WhyChoose />
        </div>
    </>
  );
}
