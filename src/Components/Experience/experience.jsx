import React from 'react'
import experience from './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">

        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <div className="experience_details-icon">
              <BsFillPatchCheckFill/>
              </div>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <div className="experience_details-icon">
              <BsFillPatchCheckFill/>
              </div>
              <div><h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
            <div className="experience_details-icon">
              <BsFillPatchCheckFill/>
              </div>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <div className="experience_details-icon">
              <BsFillPatchCheckFill/>
              </div>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience_details'>
            <div className="experience_details-icon">
              <BsFillPatchCheckFill/>
              </div>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience