import React from "react";
import "./Project.css";
import img1 from "./img/pg1.png";
import img2 from "./img/pg2.png";
import img3 from "./img/pg3.png";
import img4 from "./img/pg4.png";
import img5 from "./img/pg5.png";
import img6 from "./img/pg6.png";

export default function Project() {
  return (
    <div
      id="project"
      className="project  my-4 py-4 d-flex flex-column align-items-center"
    >
      <h1 className="mb-4 pb-3">My latest work</h1>
      {/* <img className='bg' src={bg} alt="" /> */}
      <div className="img-container d-flex ">
        <div className="d-flex cards flex-column">
          <div>
            <img src={img4} alt="" />
          </div>
            <small>a fun and classic game to challenge your strategy skills.</small>
          <div >
            <button className="viewBtn">View project</button>
          </div>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div className="smHide">
          <img src={img1} alt="" />
        </div>
        <div className="smHide">
          <img src={img5} alt="" />
        </div>
        <div className="smHide">
          <img src={img6} alt="" />
        </div>
      </div>
      <div className="btn-cont mt-3">
        <button className="btn2 mt-4">See more ...</button>
      </div>
    </div>
  );
}
