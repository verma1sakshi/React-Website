import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'
import logo from "../../assets/logo.png"
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {

  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true) :setSticky(false);
    })
  },[])
  const [mobileMenu,setMobilemenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobilemenu(false):setMobilemenu(true)
  }

  return (
   <nav className={`container ${sticky? 'dark-nav' :''} `}>
    <img src={logo} alt=""className='logo' />
    <ul  className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to='home'smooth={true} offset={0} duration={500}>Home <FaHome /></Link></li>
        <li><Link to='portfolio'smooth={true} offset={-260} duration={500}>Portfolio  <GoProjectRoadmap /></Link></li>
        <li><Link to='about'smooth={true} offset={-265} duration={500}>About <RiContactsFill /></Link></li>
        <li><Link to='testimonial'smooth={true} offset={-260} duration={500}>Testimonial <FaRegCheckCircle /></Link></li>
        <li><Link to='contact'smooth={true} offset={-260} duration={500}>Contact <IoIosContact /></Link></li>
    </ul>
    <div className='menu_icon' onClick={toggleMenu}><IoMdMenu/></div>
   </nav>
  )
}

export default Navbar