import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="Cards" style={{display:'flex', marginTop:"60px"}}>
      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>A16 Bionic chip with 5-core GPU</b>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>A17 Pro chip with 6-core GPU</b>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>Pro camera system</b><br></br>Our most advanced 48MP Main camera
3x or 5x Telephoto camera
Ultra Wide camera
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={img4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>Advanced dual-camera system</b>
            <br></br>
            Our most advanced 48MP Main camera
3x or 5x Telephoto camera
Ultra Wide camera
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", border: "none", }}>
        <img src={img5} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>Up to 26 hours of video playback20</b>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={img6} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>Up to 29 hours of video playback20</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
