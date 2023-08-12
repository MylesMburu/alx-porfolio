import React, { useEffect } from 'react'
import './projects.css'
import AOS from "aos";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css'
import presentation from "../../assets/wanjapi/Screenshot 2023-08-12 103142.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div >
      <section id='projects' className='yt-container'>
            <h2>Portfolio</h2>
              <div className="youtube-wrapper">
              <iframe 
              width="560"
              height="315" 
              src="https://www.youtube.com/embed/oV5aISZ-F-o" 
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
              </iframe>
              </div>   

              <div className='presentation-container'>
              <img src={presentation} className='presentation_image' alt="" />
              <h3>Here's the link to the presentation: <a href="https://docs.google.com/presentation/d/1ILQpF2tvt7d8fZnEUX6O3p6lZq0YIH74u8iwMUllTiA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Jamless Mobility Presentation Slides</a></h3>
              </div>   
          </section>
    </div>
    
  )
  }
export default Projects