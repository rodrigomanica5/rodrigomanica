import React, { useContext } from 'react'
import { navContext } from '../navContext'
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
          <button className='btn' onClick={() => console.log('CV descargado')}>DOWNLOAD CV</button>
        </div>

        <div className='imgContainer'>
          <img src='' alt=''></img>
        </div>
      </div>
      <Skills />
    </>
  )
}

export default About