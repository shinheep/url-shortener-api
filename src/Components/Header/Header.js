import "./Header.css";
import {useEffect, useState} from 'react';
import Menu from "./Menu";


const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const handleClose = () => setIsOpen(false);
        window.addEventListener('click', handleClose);
        return () => window.removeEventListener('click', handleClose);
    }, [isOpen]);
    
    return (
        <div className="header">
            
            <header>
                <img src="images/logo.svg" alt=""/>
                <i onClick={() => setIsOpen(!isOpen)} className="hamburger fas fa-bars"></i>
            </header>

            {isOpen && <Menu/>}
        </div>
    );
};

export default Header;