import React from 'react'

import Caroseulslider from '../components/Caroseulslider';
import { Navbar } from '../components/Navbar'
import { countries } from "../components/Images4Banner.js";

export const HomeScreen = () => {
  return (
    <>
        <div className='homeScreen'>
          
           <Navbar />
          
           <Caroseulslider images={countries}/>
            
        </div>
    </>
  );
}
