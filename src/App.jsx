import React from 'react'
import Footer from './Components/Footer/footer'
import About from './Components/About/about'
import Header from './Components/Header/header'
import Nav from './Components/Nav/nav'
// import Testimonial from './Components/Testimonial/testimonial'
import Experience from './Components/Experience/experience'
import Services from './Components/Services/services'
import Portfolio from './Components/Portfolio/portfolio'
import Contact from './Components/Contact/contact'
import Messages from './Components/Messages/messages'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Messages/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App