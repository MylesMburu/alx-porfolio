import React, { useEffect } from 'react'
import './projects.css'
import AOS from "aos";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css'
import IMG1 from "../../assets/wanjapi/project1.png"
import IMG2 from "../../assets/wanjapi/BMIproject.png"
import IMG3 from "../../assets/wanjapi/LogIn.png"

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    id:1,
    image:IMG1,
    title: 'A personal portfolio project',
    github:"https://github.com/MylesMburu"
  },
  {
    id:2,
    image:IMG2,
    title:'A simple BMI calculator',
    github:"https://github.com/MylesMburu"
  },
  {
    id:3,
    image:IMG3,
    title:'A simple log in page',
    github:"https://github.com/MylesMburu"
  }
]
const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='projects'>
      <h2>Projects</h2>
      
      <Swiper className='container projects__container'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation 
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      {
      data.map(({id,image,title,github}) => {
      return(
        
          <SwiperSlide key={id} className='project__item' >
          <div className='project__item-image'>
          <img src={image} alt="{title}" />
          </div>
          <h3>{title}</h3>
          <div className='project__item-cta'>
          <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
          </div>
          </SwiperSlide>
      )}
      )
      }
      </Swiper>
    </section>
  )
  }
export default Projects