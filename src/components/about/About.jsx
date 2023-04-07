import React, { useEffect } from 'react'
import './about.css'
import AOS from "aos";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css'
import ME from "../../assets/wanjapi/myles2.jpg"
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiMysql} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiKalilinux} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id='about'>
      <h2>About Me</h2>

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
            I am a junior software engineer and cyber security enthusiast.
            I'm currently taking Computer Science at Kenyatta university.
            I specialize in front-end development and junior penetration testing.
            <br/>
            My skill stack includes:
            HTML5, CSS3, JavaScript, React.js, TailwindCSS ,MySQL , KaliLinux.
          </p>
          
          <p className='stack'>
            <AiFillHtml5/><DiCss3/><IoLogoJavascript/><FaReact/><SiMysql/><SiTailwindcss/><SiKalilinux/>
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>


    </section>
  )
}

export default About