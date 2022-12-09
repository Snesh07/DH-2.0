import React from 'react'
import { BannerSlider } from '../components/BannerSlider';
import { Navbar } from '../components/Navbar'

export const HomeScreen = () => {
  return (
    <>
        <div className='homeScreen'>
            <Navbar />
            <BannerSlider />
        </div>
    </>
  );
}
