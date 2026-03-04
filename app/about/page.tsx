import React from 'react'
import { Navbar } from '../compenents/Navbar';
import { Footer } from '../compenents/Footer';
import Section1 from '../compenents/Aboutpage/Section1';
import Gym from '../compenents/Aboutpage/Gym';
import InfosClub from '../compenents/Aboutpage/Infosclub';
import Faq from '../compenents/Aboutpage/Faq';
import WhyUs from '../compenents/Aboutpage/Whyus';



function AboutUs() {
  return (
    <div>
   
        <Section1/>
        <Gym/>
        <InfosClub/>
        <Faq/>
        <WhyUs/>
      <Footer/>
    </div>
  )
}

export default AboutUs;
