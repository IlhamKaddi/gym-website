import React from 'react'
import AboutPage from '../compenents/AboutPage';
import { Navbar } from '../compenents/Navbar';
import { Footer } from '../compenents/Footer';

function AboutUs() {
  return (
    <div>
     <Navbar className='bg-black'/>
        <AboutPage/>
      <Footer/>
    </div>
  )
}

export default AboutUs;
