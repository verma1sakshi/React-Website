import React, { useRef } from 'react'
import "./Testimonial.css"
import arrowRight from "../../assets/arrow.png"
import arrowLeft from "../../assets/arrowLeft.png"
import c1 from "../../assets/client1.jpeg"
import c2 from "../../assets/client2.jpeg"
import c3 from "../../assets/client3.jpeg"
import c4 from "../../assets/client4.jpeg"

const Testimonial = () => {
  const slider=useRef();
  let tx=0;  
  const slideForward = ()=>{
    if(tx>-50){
        tx=tx-25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
      console.log("right click");
      console.log(tx);
  }
  const slideBackward = ()=>{
    if(tx<0)
      {
        tx=tx+25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
      console.log("left click")
      console.log(tx);
  }
  return (
    <div className='testimonial'>
        <img src={arrowRight} alt="" className='next-btn' onClick={slideForward}/>
        <img src={arrowLeft} alt="" className='prev-btn' onClick={slideBackward} />
        <div className="slidder">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className='user-info'>
                  <img src={c1} alt="" />
                  <h3>William Jackson1</h3>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt laborum expedita, perspiciatis debitis esse error quis deserunt nihil animi.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className='user-info'>
                  <img src={c2} alt="" />
                  <h3>William Jackson 2</h3>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt laborum expedita, perspiciatis debitis esse error quis deserunt nihil animi.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className='user-info'>
                  <img src={c3} alt="" />
                  <h3>William Jackson 3</h3>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt laborum expedita, perspiciatis debitis esse error quis deserunt nihil animi.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className='user-info'>
                  <img src={c4} alt="" />
                  <h3>William Jackson 4</h3>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt laborum expedita, perspiciatis debitis esse error quis deserunt nihil animi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonial