import React from 'react'
import './about.css'
import ME from "../../assets/wanjapi/IMG_20221105_164539_2.jpg"
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaJava} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiKalilinux} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content animate__animated">
          <p>
            I am a junior software engineer and cyber security enthusiast.
            I'm currently taking Computer Science at Kenyatta university.
            I specialize in front-end development and junior penetration testing.
            My skill stack includes:
            HTML5, CSS3, JavaScript, React.js, Java, KaliLinux.
          </p>
          <p>
            I also play the piano🎹.
          </p>
          <p className='stack'>
            <AiFillHtml5/><DiCss3/><IoLogoJavascript/><FaJava/><FaReact/><SiKalilinux/>
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>


    </section>
  )
}

export default About