import React from 'react'
import './header.css'
import CV from "../../assets/wanjapi/Myles Mburu Ngicu.pdf"
import ME from '../../assets/wanjapi/me.avatar.png'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="hero">
        <h5>Hey there, I'm</h5>
        <h1>Myles Mburu</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download CV</a>
    </div>
        </div>

        <div className='me'>
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header