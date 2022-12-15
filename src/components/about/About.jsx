import React from 'react'
import './about.css'
import ME from "../../assets/wanjapi/IMG_20221105_164539_2.jpg"

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
        <div className="about__content">
          <p>
            I am a junior software engineer and cyber security enthusiast.
            I'm currently taking Computer Science at Kentatta university.
            I speacialize in front-end development and junior penetration testing.
            My skill stack includes:
            HTML5, CSS3, JavaScript, React.js, Java, Linux
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>


    </section>
  )
}

export default About