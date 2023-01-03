import React, { useContext } from 'react'
import { navContext } from '../context/navContext'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Header() {

  const {header, contact, scrollToSection} = useContext(navContext)

  return (
      <div className='bgImage' ref={header}>
        <Navbar/>
        <div className='titleContainer'>
          <h1>HELLO! <span>I'M</span> RODRIGO</h1>
          <p>Welcome to my website!</p>
          <p>I'm a passionate Frontend Web Developer</p>
          <Link onClick={() => scrollToSection(contact)} to={'/contact'}>contact me</Link>
        </div>
      </div>
  )
}

export default Header