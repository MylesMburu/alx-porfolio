import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {FaToolbox} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Nav = () => {
  return (
    <Nav>
     <a href="#header"><AiOutlineHome/></a>
     <a href="#about"><FaUserCircle/></a>
     <a href="#projects"><FaToolbox/></a>
     <a href="#contactcs"><BsFillTelephoneFill/></a> 
    </Nav>
  )
}

export default Nav