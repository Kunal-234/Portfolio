import React from 'react'
import './Project.css'
import image from '../Assets/l4.jpg'


export default function Project() {
  return (
    <div id='project' className='project  my-4 py-4 d-flex flex-column align-items-center'>
        <h1 className='mb-4 pb-3'>My latest work</h1>
        {/* <img className='bg' src={bg} alt="" /> */}
        <div className="img-container d-flex">
            <div>
            <img src={image} alt="" />
            </div>
            <div>
            <img src={image} alt="" />
            </div>
            <div>
            <img src={image} alt="" />
            </div>
            <div className='smHide'>
            <img src={image} alt="" />
            </div>
            <div className='smHide'>
            <img src={image} alt="" />
            </div>
            <div className='smHide'>
            <img src={image} alt="" />
            </div>
            
        </div>
      <div className="btn-cont mt-3"><button className='btn2 mt-4'>See more ...</button></div>
    </div>
  )
}
