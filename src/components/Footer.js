import React, { useContext } from 'react'
import { navContext } from '../navContext'

function Footer() {

  const {contact} = useContext(navContext)

  return (
    <div ref={contact}>Footer</div>
  )
}

export default Footer