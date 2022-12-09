import React from 'react'
import { BannerSlider } from '../BannerSlider';
import { Navbar } from '../Navbar'

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
