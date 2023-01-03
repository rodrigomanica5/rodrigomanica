import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { navContext } from '../context/navContext'
import Skills from './Skills'

function About() {

  const { about } = useContext(navContext)

  return (
    <>
      <div className='aboutMe' ref={about}>
        <div className='detailContainer'>
          <h2 className='sectionTitle'>about me</h2>
          <div className='aboutInfo'>
            <p>Welcome to my portfolio!</p>
            <p>I'm a React.js Frontend Developer currently based in Germany, and at the moment I'm working as Teaching Assistant of JavaScript & React.js courses at Coderhouse</p>
            <p>Since many years I have been passionate about the software development industry, and enthusiastic on learning new skills and tools.</p>
          </div>
          <a className='btn' href='https://drive.google.com/file/d/1RLGbbMTLw94sveqZhqj8aevARKU5QLjE/view' target="_blank">MY RESUME</a>
        </div>

        <div className='imgContainer'></div>
      </div>
      <Skills />
    </>
  )
}

export default About