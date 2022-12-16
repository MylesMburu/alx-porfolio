import React from 'react'
import './projects.css'
import IMG1 from "../../assets/wanjapi/project1.png"

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      
      <Swiper className='container projects__container'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation>
        <SwiperSlide className='project__item'>
        <div className='project__item-image'>
        <img src={IMG1} alt="" />
        </div>
        <h3>A personal portfolio project</h3>
        <div className='project__item-cta'>
        <a href="https://github.com/MylesMburu" target="_blank" className='btn'>GitHub</a>
        </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
  }
export default Projects