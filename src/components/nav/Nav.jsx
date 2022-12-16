import React from 'react'
import './nav.css'
import {VscHome} from "react-icons/vsc"
import {FaUserTie} from "react-icons/fa"
import {BiBriefcaseAlt2} from "react-icons/bi"
import {HiOutlineMailOpen} from "react-icons/hi"
import { useState } from 'react'


const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
     <a href="#header" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><VscHome/></a>
     <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
     <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} ><BiBriefcaseAlt2/></a>
     <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''} ><HiOutlineMailOpen/></a>
    </nav>
  )
}

export default Nav