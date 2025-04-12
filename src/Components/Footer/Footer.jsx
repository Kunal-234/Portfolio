import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  return (
    <div className='footer '>
      <div className="up d-flex justify-between alighn-items-center">

        <div className="up-leftfoot">
            <h2>Kunal</h2>
          <small>Hi, I'm Kunal Kumar, a passionate and aspiring tech enthusiast.</small><small> If you'd like to collaborate or discuss anything tech-related, feel free to connect with me!</small>   
        </div>
        <div className="up-rightfoot">
            <input type="email" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
      </div>
      <div>
      <div style={{gap:"40px"}} className="hero-right d-flex mt-4 pt-2 justify-content-center">
        <a href="https://www.linkedin.com/in/kunal-kumar-792136340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="__blank">
          {" "}
          <i className="fa-brands fa-linkedin-in"></i>{" "}
        </a>
        <a href="https://github.com/Kunal-234" target="__blank">
          {" "}
          <i className="fa-brands fa-github"></i>{" "}
        </a>
        <a href="https://x.com/kunal__23?t=iuIAO11dJIlQoxh7fb2D8A&s=09" target="__blank">
          {" "}
          <i className="fa-brands fa-x-twitter"></i>{" "}
        </a>
        <a href="https://www.instagram.com/kunal._.234?igsh=MXczZXQ4NGRqOGp2eQ== " target="__blank">
          {" "}
          <i className="fa-brands fa-instagram"></i>{" "}
        </a>
        <a href="https://wa.me/918539872645" target="__blank">
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
