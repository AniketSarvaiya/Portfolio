import React from 'react'
import Header from './Header'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Quialification from '../Pages/Quialification'
import Portfolio from '../Pages/Portfolio'

function Hero() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Quialification />
            <Portfolio />
        </>
    )
}

export default Hero