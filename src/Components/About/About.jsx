import React from 'react'
import './About.css'
import il from '../Assets/bg1.jpg'

export default function About() {
  return (
    <div id='about' className='about my-4 py-4 d-flex flex-column align-items-center'>
        <div className="header mb-3">
           <h1 className=''>About me</h1> 
           <img className='il' src={il} alt="" />
        </div>
        <div className="desc my-2 py-2">
          <p>Hi, I'm Kunal Kumar, a passionate and aspiring tech enthusiast currently pursuing a Bachelor of Computer Applications (BCA) at Srinath University, Jamshedpur. My journey in the world of technology started with a deep curiosity about how software works, leading me to explore various aspects of web development and programming.</p>
          <p>If you'd like to collaborate or discuss anything tech-related, feel free to connect with me!</p>
        </div>
        <div className="skills d-flex flex-column">
          <div className="progress-bar d-flex flex-row"><p>HTML & CSS</p> <hr style={{width:'50%'}} /></div>
          <div className="progress-bar d-flex flex-row"><p>React JS</p><hr style={{width:'70%'}} /></div>
          <div className="progress-bar d-flex flex-row"><p>Javascript</p> <hr style={{width:'50%'}} /></div>
          <div className="progress-bar d-flex flex-row"><p>Next JS</p><hr style={{width:'40%'}} /></div>
        </div>
      
    </div>
  )
}
