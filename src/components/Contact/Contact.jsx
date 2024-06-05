import React from 'react'
import "./Contact.css"
import arrow from "../../assets/arrow.png"
import { IoIosMail } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a5e099f9-0df6-413e-86f5-e7fb82c44a86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log('Success',data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> <IoIosMailOpen />Send us a message</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ex odit laudantium nobis ea quam nihil dicta, animi laborum accusantium atque ipsam commodi esse, unde iure perferendis similique mollitia ipsum exercitationem eaque officia? Impedit quos ex doloribus incidunt sint non maxime consequatur et a laudantium?</p>
            <ul>
                <li><IoIosMail />Contact@gmail.com</li>
                <li><IoCall />+1 123 456 789 </li>
                <li><FaLocationDot />77 Massachusetts Ave, Cambridge<br/>MA 02139 ,US</li>
                <li><FaInstagramSquare />www@instagram</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" id=""placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Number' required />
            <textarea name="message" rows='6' placeholder='Enter Your Messgae' required></textarea>
            <button type='submit' className='btn dark-btn'>
              Submit Now <img src={arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact