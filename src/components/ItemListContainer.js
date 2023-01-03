import React, { useContext, useEffect, useState } from 'react'
import { navContext } from '../context/navContext'
import ItemList from './ItemList'

function ItemListContainer() {

  const [items, setItems] = useState([])

  const {projects} = useContext(navContext)

  useEffect(() => {

    const promise = fetch("/assets/projects/projectList.js");

    promise.then(data => data.json())
    .then(res => setItems(res))

  }, [])

  return (
    <div ref={projects} className='projectsContainer'>
      <h2>featured work</h2>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer