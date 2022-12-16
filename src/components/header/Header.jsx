import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/wanjapi/me.avatar.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey there, I'm</h5>
        <h1>Myles Mburu</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>

        <div className='me'>
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header