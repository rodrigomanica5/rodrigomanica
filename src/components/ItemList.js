import React from 'react'
import Item from './Item'

function ItemList({ items }) {
    return (
        <div className='cardsContainer'>
            {
                items.map((element, index) => {
                    return <Item key={index} project={element} />
                })
            }
        </div>
    )
}

export default ItemList