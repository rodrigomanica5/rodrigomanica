import React, { useContext } from 'react'
import { navContext } from '../context/navContext'
import Location from './Location';

function Contact() {

  const { contact } = useContext(navContext)

  return (
    <div ref={contact} className='contactMe'>
      <div className='contactContainer'>
        <h2>contact me</h2>
        <div>
          <div className='contactDetails'>
            <p><span className='emailLabel'>E: </span> <span className='emailAddress'>rodrigomanica5@gmail.com</span></p>
            <div>
              <a href='https://github.com/rodrigomanica5' target={"_blank"}><img src='/assets/images/github-new.svg' width={60} alt="GitHub" /></a>
              <a href='https://www.linkedin.com/in/rodrigomanica/' target={"_blank"}><img src='/assets/images/linkedin-new.svg' width={60} alt="LinkedIn" /></a>
            </div>
          </div>
          <Location />
        </div>
      </div>
    </div>
  )
}

export default Contact;