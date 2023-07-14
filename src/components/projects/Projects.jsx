import React, { useEffect } from 'react'
import './projects.css'
import AOS from "aos";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css'
import data from './ProjectData';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


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
      data.map(({id,image,title,github,live}) => {
      return(
        
          <SwiperSlide key={id} className='project__item' >
          <div className='project__item-image'>
          <img src={image} alt="{title}" />
          </div>
          <h3>{title}</h3>
          <div className='project__item-cta'>
          <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
          <a href={live} target='blank'rel="noopener noreferrer" className='btn' >Live Demo</a>
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