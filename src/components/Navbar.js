import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { navContext } from '../navContext';

function Navbar() {

    const {header, about, projects, contact, scrollToSection} = useContext(navContext)

    return (
        <nav className='nav'>
            <div className='navLogo'>
                <p><Link onClick={() => scrollToSection(header)} to='/'>RODRIGO MANICA</Link></p>
            </div>
            <ul className='navLinks'>
                <li><Link onClick={() => scrollToSection(about)} to='/about'>About</Link></li>
                <li><Link onClick={() => scrollToSection(projects)} to='/projects'>Projects</Link></li>
                <li><Link onClick={() => scrollToSection(contact)} to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
