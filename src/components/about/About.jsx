import React, { useEffect } from 'react'
import './about.css'
import AOS from "aos";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css'
import ME from "../../assets/wanjapi/myles2.jpg"

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='about'>
      <h2>Bio</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <p>
          Meet Myles Mburu, a driven Computer Science student at Kenyatta University with a passion
          for web development and cloud technologies. Currently serving as a web developer, Myles is
          deeply immersed in honing his skills and expertise while exploring the vast possibilities of the
          AWS cloud.</p>
          <p>Looking ahead, Myles aspires to become a highly skilled Web Security and Cloud
          Security Engineer, aiming to make a meaningful impact in safeguarding online environments.
          Impressive and relevant achievements grace Myles' journey, from excelling in academic
          endeavors and acing campus grades to showcasing his talent by building several captivating
          websites for personal projects and clients alike. Moreover, Myles has demonstrated his
          creativity and problem-solving acumen by winning a hackathon, further cementing his
          commitment to continuous growth and innovation in the realm of technology
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>


    </section>
  )
}

export default About