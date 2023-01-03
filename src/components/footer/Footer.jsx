import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Myles</a>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/myles-ngicu-1b7799255/"><BsLinkedin/></a>
        <a href="https://github.com/MylesMburu"><BsGithub/></a>
        <a href="https://twitter.com/mn_mylesss"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; 2023 Myles M.N. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer