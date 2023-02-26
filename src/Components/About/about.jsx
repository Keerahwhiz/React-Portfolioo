import React from 'react'
import './about.css'
import ME from '../../Assets/ME-about_me.PNG'
import {FaAward} from   'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {VscLibrary} from  'react-icons/vsc'

const about = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className="about_content">
          <div className="cards">
          <div className="about__cards award" >
            <article className='about_card'>
              <FaAward className='About_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
              

            </article>
          </div>
          <div className="about__cards clients" >
            <article className='about_card'>
              <FiUsers className='About_icon'/>
              <h5>Clients</h5>
              <small>300+ Clients worldwide</small>
              

            </article>
          </div>
          <div className="about__cards projects">
            <article className='about_card'>
              <VscLibrary className='About_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
              

            </article>
          </div>
          </div>
          <div className="talk">
            
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam odio quos dolorem minus molestiae rem, est corporis quaerat voluptatibus repellat qui quidem necessitatibus, ipsam nulla aut eum tempore reprehenderit!
          </p>
         <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
      
          </div>
          
            </div>
      </div>

    </section>
  )
}

export default about