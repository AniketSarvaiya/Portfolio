import React, { useEffect, useRef, useState } from 'react'
import '../Assets/CSS/Navbar.css'
import { Link } from 'react-router-dom';

function Header(props) {


    const [open, setOpen] = useState(false);
    const [theam, setTheam] = useState("light-theam");
    const [activeLink, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'qualification', 'portfolio', 'contactme'];

            const isScrolled = window.scrollY > 35;
            setScrolled(isScrolled);

            const visibleSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionHeight = element.getBoundingClientRect().height;
                    return element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom >= window.innerHeight - sectionHeight / 3;
                }
                else
                    return false;
            });

            console.log(visibleSection)

            if (visibleSection !== undefined)
                setActive(visibleSection);
            else setActive('contactme')

        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const togglemode = () => {
        if (theam === "light-theam")
            setTheam("dark-theam");
        else
            setTheam("light-theam")
    }

    const handleactive = (tab) => {
        setActive(tab);
        setOpen(false);
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
                <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? 'scrolled' : ''} py-3`}>
                    <div className="container">
                        <a className="navbar-brand fw-bold" href='#home'>Aniket Sarvaiya</a>
                        {<span className="theam-mode d-lg-none">
                            {theam === "dark-theam" ? <i className="uil uil-sun fs-4 mode" onClick={() => { togglemode() }}></i> : <i className="uil uil-moon fs-5 mode" onClick={() => { togglemode() }}></i>}
                        </span>}
                        <button
                            className={`navbar-toggler bg-none border-0 shadow-none ${open ? '' : 'collapsed'}`}
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
                                    <a className="nav-link" href="#home" onClick={() => {
                                        handleactive('home')
                                        // window.scrollTo(0, 0)
                                    }}>Home</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'about' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#about" onClick={() => {
                                        handleactive('about')
                                        // window.scrollTo(0, 0)
                                    }}>About</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'skills' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#skills" onClick={() => handleactive('skills')}>Skills</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'qualification' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#qualification" onClick={() => handleactive('services')}>Qualification</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'portfolio' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#portfolio" onClick={() => handleactive('portfolio')}>Portfolio</a>
                                </li>
                                <li className={`nav-item mx-2 ${activeLink === 'contactme' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#contactme" onClick={() => handleactive('contactme')}>Contactme</a>
                                </li>
                            </ul>
                        </div>
                        {<span className="theam-mode d-none d-lg-block">
                            {theam === "dark-theam" ? <i className="uil uil-sun fs-4 mode" onClick={() => { togglemode() }}></i> : <i className="uil uil-moon fs-5 mode" onClick={() => { togglemode() }}></i>}
                        </span>}
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header