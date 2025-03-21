import React from 'react'
import Hero from '../Hero/Hero'
import './Home.css'
import Navbar from '../Navbar/Navbar';
// import Canvas from '../Canvas/Canvas';


export default function Home() {
  return (
    <div id='home' className='home'>
      <Navbar/>
      {/* <Canvas/> */}
      <Hero/>
    </div>
  )
}


