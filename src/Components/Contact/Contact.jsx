import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div id='contact' className='contact  my-4 p-4 d-flex flex-column align-items-center'>
        <h1 className='mt-4'>Get in touch</h1>
        <div className="cont  d-flex">
        <div className="left  px-4">
            <h2 className='my-4'>Let's talk</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus et voluptas voluptatum quos reprehenderit, est impedit laborum consequuntur maxime?
            </p>
            <div className="box"><i className="fa-solid fa-envelope"></i>kunaljsr11@gmail.com</div>
            <div className="box"><i className="fa-solid fa-phone-volume"></i>+91 8539872645</div>
            <div className="box"><i className="fa-solid fa-location-dot"></i>Jamshedpur,India</div>
        </div>
        <div className="right">
            <div className='t'>
               <div> Your Name</div> <input type="text" placeholder='Enter your name'/>
            </div>
            <div className='t'>
                <div >Your Email</div> <input type="email" placeholder='Enter your Email'/>
            </div>
            <div>Write your message here</div>
            <div>
                <textarea placeholder='Enter your message'></textarea>
            </div>
            <button className='submit-btn mx-3'>Submit now</button>
 
        </div>
        </div>
      
    </div>
  )
}
