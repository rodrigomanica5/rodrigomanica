import { createContext } from "react";
import { useRef, useState, useEffect } from 'react'

export const navContext = createContext()

const { Provider } = navContext;

const MyProvider = ({ children }) => {

    const header = useRef(null)
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const [width, setWidth] = useState(false)

    useEffect(() => {

        if (window.visualViewport.width < 500) {
            setWidth(true)
        }
    }, [])


    return <Provider value={{ header, about, projects, contact, scrollToSection, width }}>{children}</Provider>
}

export default MyProvider;