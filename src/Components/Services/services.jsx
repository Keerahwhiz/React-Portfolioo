import React from 'react'
import services from './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
   <section id='Services'>
    <h5>What I Offer</h5>
    <h2>
      Services
    </h2>
    <div className="container services_container">
<article className='Service'>
<div className="service_head">
  <h3>
    UI/UX Design
  </h3>

</div>
<ul className='service_list'>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
</ul>
</article>

<article className='Service'>
<div className="service_head">
  <h3>
  Web Development
  </h3>

</div>
<ul className='service_list'>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
</ul>
</article>


<article className='Service'>
<div className="service_head">
  <h3>
    Content Creation
  </h3>

</div>
<ul className='service_list'>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
  <li>
<BsCheck className='service_list-icon'/>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  </li>
</ul>
</article>
    </div>
   </section>
  )
}

export default Services