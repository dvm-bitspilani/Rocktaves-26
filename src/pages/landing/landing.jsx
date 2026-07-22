import React from 'react'
import Home from '../../components/landing/Home';
import About from '../../components/landing/About';
import Rules from '../../components/landing/Rules';
import Timeline from '../../components/landing/Timeline';
import PastWinners from '../../components/landing/PastWinners';
import KnowMore from '../../components/landing/KnowMore';

const Landing=()=> {
  return (
    <div>
      <Home/>
      <About/>
      <Rules/>
      <Timeline/>
      <PastWinners/>
    <KnowMore/>
    </div>
  )
} 

export default Landing;
