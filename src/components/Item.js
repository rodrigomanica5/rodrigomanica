import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Item({ project }) {

    // const [modal, setModal] = useState(false)

    const { name, description, link, pictureURL } = project;

    return (
        <>
            <a href={link} target='_blank' className='cards'>
                <img src={pictureURL}></img>
            </a>
            {/* {
                modal &&
                <div className='projectView' onClick={() => setModal(false)}>
                    <img src={pictureURL}></img>
                </div>
            } */}
        </>
    )
}

export default Item