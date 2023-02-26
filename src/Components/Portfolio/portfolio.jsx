import React from 'react'
import portfolio from './portfolio.css'
import IMG from '../../Assets/IMG_1.jpg'
import IMG1 from '../../Assets/IMG_2.jpg'
import IMG2 from '../../Assets/IMG_3.jpg'






const data = [{
  id: 1,
  image: IMG,
  title: 'Éat Doughy Chocolate',
  github: 'https://github.com',
  demo: "https://dribbble.com/shots/14727905-Apple-AirPods-Max-Product-card-concept-design"
},

{
  id: 2,
  image: IMG1,
  title: 'Opay',
  github: 'https://github.com',
  demo: "https://dribbble.com/shots/14727905-Apple-AirPods-Max-Product-card-concept-design"
},
{
  id: 3,
  image: IMG2,
  title: 'Apple site',
  github: 'https://github.com',
  demo: "https://dribbble.com/shots/14727905-Apple-AirPods-Max-Product-card-concept-design"
}
]
const Portfolio = () => {
  return (
   <section id='Portfolio'><h5>My Recent Work</h5>
   <h2>Portfolio</h2>

   <div className="container portfolio_container">
{
  data.map(({
    id, image,title, github, demo  }) =>{
      return(
        <article key={id} className='portfolio_item'>
<div className="portfolio_item-img">
<img src={image} alt={title} />
</div>
  <h3>
  {title}
  </h3>
  <div className="portfolio_item-cta">
  <a href={github} className='btn'target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary' target='_blank'> live demo</a>

  </div>
</article>
      )
    } )
}






</div>
   
   </section>
  )
}

export default Portfolio