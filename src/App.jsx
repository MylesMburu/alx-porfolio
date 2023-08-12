import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"
import { Elevator } from './components/elevator_pitch/Elevator'




const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Projects/>
    <Elevator/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App