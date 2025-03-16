import React from 'react'
import './Services.css'
export default function Services() {
  return (
    <div id='services' className='services d-flex flex-column align-items-center'>
      <h1 className='mb-4 pb-2'> My Services</h1>
      <div className="contain d-flex">
      {/* <img src={image} alt="" /> */}
        <div className="boxes">
          <h3>01</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
        <div className="boxes">
          <h3>02</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
        <div className="boxes">
          <h3>03</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
        <div className="boxes">
          <h3>04</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
        <div className="boxes">
          <h3>05</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
        <div className="boxes">
          <h3>06</h3>
          <h2>NewsNexux</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem quam, eius quas consectetur...</p>
          <button className='box-btn'>Read More</button>
        </div>
      
     
      
      </div>
    </div>
  )
}
