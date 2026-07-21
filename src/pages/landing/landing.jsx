import React from 'react'
import Home from '../../components/landing/Home';
import About from '../../components/landing/About';
import Rules from '../../components/landing/Rules';
import Timeline from '../../components/landing/Timeline';
import PastWinners from '../../components/landing/PastWinners';
import AboutUs from '../../components/landing/AboutUs';
import ContactUs from '../../components/landing/ContactUs';
const Landing=()=> {
  return (
    <div>
      <Home/>
      <About/>
      <Rules/>
      <Timeline/>
      <PastWinners/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
} 

export default Landing;
