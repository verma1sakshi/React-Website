import React from "react";
import "./Portfolio.css";
import arrow from "../../assets/arrow.png"
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";

import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolios">
        <div className="portfolio">
          <img src={p3} alt="" />
          <div className="caption">
            <p>Living Area</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p2} alt="" />
          <div className="caption">
            <p>Office Area</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p5} alt="" />
          <div className="caption">
            <p> Stairs</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p6} alt="" />
          <div className="caption">
            <p>Corner Area</p>
          </div>
        </div>
        </div>

      <div className="portfolios">
        <div className="portfolio">
          <img src={p3} alt="" />
          <div className="caption">
            <p>Living Area</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p2} alt="" />
          <div className="caption">
            <p>Office Area</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p5} alt="" />
          <div className="caption">
            <p> Stairs</p>
          </div>
        </div>
        <div className="portfolio">
          <img src={p6} alt="" />
          <div className="caption">
            <p>Corner Area</p>
          </div>
        </div>
      </div>
      <div className="btn1Conatiner">
        <button className="btn1">See More
      <img src={arrow} alt="" className='arrow' /></button></div>
    </div>
  );
};

export default Portfolio;
