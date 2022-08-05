import { createContext } from "react";
import { useRef } from 'react'

export const navContext = createContext()

const { Provider } = navContext;

const MyProvider = ({children}) => {

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

    
    return <Provider value={{header, about, projects, contact, scrollToSection}}>{children}</Provider>
}

export default MyProvider;