import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <div className="container">
      <Title Title='Our Works'/>
     <Portfolio/>
     <Title subTitle='A few words about' Title='Our Firm' />
     <About/>
     <Title subTitle="" Title='HAPPY CLIETNS'/>
     <Testimonial/>
     <Title subTitle='Contact Us' Title='Get In Touch'/>
     <Contact/>
     <Footer/>
     </div>
    </div>
  )
}

export default App