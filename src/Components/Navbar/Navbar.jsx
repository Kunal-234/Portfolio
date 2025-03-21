import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-dark ">
        <div className="container-fluid ms-4">
          <AnchorLink className="navbar-brand " href="/">
            {" "}
            Portfolio
          </AnchorLink>
          <button
            className="navbar-toggler"
            style={{ filter: "invert(1)" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <AnchorLink
                  className="nav-Link  mx-3 fw-bold "
                  aria-current="page"
                  href="#home"
                >
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  className="nav-Link   mx-3 fw-bold"
                  aria-current="page"
                  href="#about"
                  offset={50}
                >
                  About me
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-Link  mx-3 fw-bold" href="#services" offset={0}>
                  Services
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-Link  mx-3 fw-bold" href="#project" offset={0}>
                  Projects
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-Link  mx-3 fw-bold " href="#contact" offset={0}>
                  Contact
                </AnchorLink>
              </li>
            </ul>
            <div>
              <AnchorLink href="#contact" offset={0}>
                <button className="connect-btn  d-flex align-items-center" >
                  Connect with me
                </button>
              </AnchorLink>
            </div>
            {/* <form className="d-flex mylogo" role="search">
       <img  src={instaLogo} alt="" />
       <img  src={whatsappLogo} alt="" />
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
