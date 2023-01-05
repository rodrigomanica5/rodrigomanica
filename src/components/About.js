import React, { useContext, useEffect, useState } from 'react'
import { navContext } from '../context/navContext'
import Skills from './Skills'

function About() {

  const { about, width } = useContext(navContext)

  return (
    <>
      <div className='aboutMe' ref={about}>
        <div className='detailContainer'>
          <h2 className='sectionTitle'>hello you</h2>
          <div className='aboutInfo'>
            <p className='aboutInfoSpan'>My name is Rodrigo and I'm a React.js Frontend Developer currently based in Europe.</p>
            <p>Since I was a teenager I found myself very interested in everything related to computers and programming. I still remember when I was in school, I couldn't wait to go back home, turn my computer on, and start developing small softwares in Visual Basic 6 just for fun! Fixing computers and being curious about Cybersecurity were also some of the things that kept me amused in my free time.</p>
            <p>Later I decided to study International Business in Argentina, my home country, while doing an exchange semester in Belgium to improve my English skills but mainly because I have always been very motivated in meeting people from different cultures and open myself up to what the World had to offer.</p>
            <p>And even though it was an amazing part of my life, having completed my studies, achieving a bachelor degree in International Business, and working in a marketing company, I felt that I had to pursue my life vocation of becoming a Web Developer. And I did it, because one of the things that defines me the most is that I pursue my dreams and goals no matter how much time and effort they take.</p>
          </div>
          <a className='btn' href='https://drive.google.com/file/d/1RLGbbMTLw94sveqZhqj8aevARKU5QLjE/view' target="_blank">MY RESUME</a>
        </div>

        {
          !width && <div className='imgContainer'></div>
        }
      </div>
      <Skills />
    </>
  )
}

export default About