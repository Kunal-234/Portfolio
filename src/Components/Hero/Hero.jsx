import React from "react";
import "./Hero.css";
import image from "../Assets/l6.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <>
    <div className="hero d-flex justify-content-between">
    <img className="bg" src={image} alt="" />
      <div className="hero-left d-flex">
        <div className="left-text">
          <h1>Kunal Kumar</h1>
          <h3>MERN Stack Developer</h3>
          <div className="hero-btn">
            <AnchorLink href="#about" offset={30}>
            <button>
              About Me
            </button>

            </AnchorLink>
          </div>

          </div>
           
          
      </div>
      <div className="hero-right d-flex flex-column ">
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
    </>
  );
}
