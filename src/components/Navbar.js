import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navContext } from '../navContext';

function Navbar() {

    const [nav, setNav] = useState(false);

    const { header, about, projects, contact, scrollToSection } = useContext(navContext)

    useEffect(() => {

        const checkScrollY = () => {
            if (window.pageYOffset >= (window.innerHeight) * 1) {
                setNav(true)
            } else {
                setNav(false)
            }
        }

        window.addEventListener('scroll', checkScrollY);

        return () => {
            window.removeEventListener('scroll', checkScrollY)
        }

    }, [])

    return (
        <nav className={`nav ${nav ? 'navChange' : ''}`}>
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
