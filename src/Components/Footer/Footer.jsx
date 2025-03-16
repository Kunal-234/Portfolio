import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  return (
    <div className='footer '>
      <div className="up d-flex justify-between alighn-items-center">

        <div className="up-leftfoot">
            <h2>Kunal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut tempora tempore voluptates veniam dolores velit alias maiores.</p>            
        </div>
        <div className="up-rightfoot">
            <input type="email" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
      </div>
      <div>
      <div style={{gap:"40px"}} className="hero-right d-flex mt-4 pt-2 justify-content-center">
        <a href="https://instagram.com" target="__blank">
          {" "}
          <i className="fa-brands fa-linkedin-in"></i>{" "}
        </a>
        <a href="https://instagram.com" target="__blank">
          {" "}
          <i className="fa-brands fa-github"></i>{" "}
        </a>
        <a href="https://instagram.com" target="__blank">
          {" "}
          <i className="fa-brands fa-x-twitter"></i>{" "}
        </a>
        <a href="https://instagram.com" target="__blank">
          {" "}
          <i className="fa-brands fa-instagram"></i>{" "}
        </a>
        <a href="https://instagram.com" target="__blank">
          {" "}
          <i className="fa-brands fa-whatsapp"></i>{" "}
        </a>
      </div>
      </div>
      <hr className='kl'/>
      <div className="down d-flex justify-content-between">
        <div className="downleft">
          <p>@ 2025 Kunal Kumar. All rights reserved.</p>
        </div>
        <div className="downright d-flex justify-content-between">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink style={{color:"white"}} offset={10} href="#contact">  <p>Connect with me</p></AnchorLink>
        </div>
      </div>
    </div>
  )
}
