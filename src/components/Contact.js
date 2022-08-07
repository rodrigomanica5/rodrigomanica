import React, { useContext } from 'react'
import { navContext } from '../navContext'

function Contact() {

  const {contact} = useContext(navContext)

  return (
    <div ref={contact} className='contactSection'>
      <h2>contact me</h2>
    </div>
  )
}

export default Contact;