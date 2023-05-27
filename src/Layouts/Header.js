import React, { useEffect, useState } from 'react'
import '../Assets/CSS/Navbar.css'

function Header() {
    const [open, setOpen] = useState(false);
    const [theam, setTheam] = useState("light-theam");
    const [activeLink, setActive] = useState("home");

    const togglemode = () => {
        if (theam === "light-theam")
            setTheam("dark-theam");
        else
            setTheam("light-theam")
    }

    const handleactive = (tab) => {
        setActive(tab);
    }
    useEffect(() => {
        document.body.className = theam
    }, [theam])

    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <header className='py-3 border-1 navbarheader'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand fw-bold">Aniket Sarvaiya</a>
                        {<span className="theam-mode d-lg-none">
                            {theam === "dark-theam" ? <i className="uil uil-sun fs-4 mode" onClick={() => { togglemode() }}></i> : <i className="uil uil-moon fs-5 mode" onClick={() => { togglemode() }}></i>}
                        </span>}
                        <button
                            className={`navbar-toggler  border-0 shadow-none ${open ? '' : 'collapsed'}`}
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded={open ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                            onClick={handleToggle}
                        >

                            {open ? (
                                <i className="uil uil-times"></i>
                            ) : (
                                <i className="uil uil-apps"></i>
                            )}
                        </button>

                        <div
                            className={`collapse navbar-collapse ${open ? 'show' : ''
                                } justify-content-end fw-bold me-5`}
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className={`nav-item mx-2 ${activeLink === 'home' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#home" onClick={() => handleactive('home')}>Home</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'about' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#about" onClick={() => handleactive('about')}>About</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'skills' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#skills" onClick={() => handleactive('skills')}>Skills</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'services' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#services" onClick={() => handleactive('services')}>Services</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'portfolio' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#portfolio" onClick={() => handleactive('portfolio')}>Portfolio</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'contact' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#contact" onClick={() => handleactive('contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        {<span className="theam-mode d-none d-lg-block">
                            {theam === "dark-theam" ? <i className="uil uil-sun fs-4 mode" onClick={() => { togglemode() }}></i> : <i className="uil uil-moon fs-5 mode" onClick={() => { togglemode() }}></i>}
                        </span>}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header