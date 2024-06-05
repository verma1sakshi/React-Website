import React from 'react'
import "./Hero.css"
import arrow from "../../assets/arrow.png"

const Hero = () => {
  return (
    <div className='hero container' id='home'>
        <div className="hero-text">
            <h1>Modern Design <span>Solution</span></h1>
            <p>A descriptive paragraph that tells clients how good you are the best choice</p>
            <button className='btn'>
                See Our Projects
                <img src={arrow} alt="" className='arrow' />
            </button>
        </div>
    </div>
  )
}

export default Hero