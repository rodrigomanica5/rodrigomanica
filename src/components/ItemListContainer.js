import React, { useContext } from 'react'
import { navContext } from '../navContext'

function ItemListContainer() {

  const {projects} = useContext(navContext)

  return (
    <div ref={projects} className='projectsContainer'>
      <h2>featured work</h2>
    </div>
  )
}

export default ItemListContainer