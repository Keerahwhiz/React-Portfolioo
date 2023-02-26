import React from 'react'
import messages from './messages.css'
import AVTR1 from '../../Assets/avatar 1.jpg'
import AVTR2 from '../../Assets/avatar 2.jpg'
import AVTR3 from '../../Assets/avatar 3.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {  avatar: AVTR1,
    names: 'Jide Oloye',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus eos inventore minus amet rem. Necessitatibus quia nesciunt blanditiis tenetur, dolore consectetur inventore et sapiente iusto, tempore modi quidem voluptas.'
    },
    {  avatar: AVTR2,
        names: 'Tinu Martins',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus eos inventore minus amet rem. Necessitatibus quia nesciunt blanditiis tenetur, dolore consectetur inventore et sapiente iusto, tempore modi quidem voluptas.'
        },
        {  avatar: AVTR3,
            names: 'Bayo Alade',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus eos inventore minus amet rem. Necessitatibus quia nesciunt blanditiis tenetur, dolore consectetur inventore et sapiente iusto, tempore modi quidem voluptas.'
            },
]




const Messages = () => {
  return (
    <section>
        <h5>Review from Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials_container"
    // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
{
    data.map(({avatar, names, review}, index) => {
        return(
            <SwiperSlide key={index} className = "testimonial">
                <div className="client_avatar">
                    <img src={avatar}/>
                </div>
                <h5 className='client_name'>{names}</h5>
                <small className="client_review">{review}</small>
            </SwiperSlide>
        )
    }
    )}

    </Swiper> 
    </section>
  )
}

export default Messages
