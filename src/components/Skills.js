import React, { useContext } from 'react'
import { navContext } from '../context/navContext'

function Skills() {

    const { width } = useContext(navContext)

    return (
        <div className='skillsContainer'>
            <div>
                <img src='/assets/images/react-js.svg' alt='React.js' width={width ? 100 : 180}></img>
                <p></p>
            </div>
            <div>
                <img src='/assets/images/react-native.svg' alt='React Native' width={width ? 100 : 180}></img>
                <p></p>
            </div>
            <div>
                <img src='/assets/images/redux.svg' alt='Redux' width={width ? 100 : 180}></img>
                <p></p>
            </div>
        </div>
    )
}

export default Skills