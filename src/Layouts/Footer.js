import React from 'react'
import '../Assets/CSS/Footer.css'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }
    return (
        <footer className='footer_main_container '>
            <div className="container">
                <Row>
                    <Col md={6} lg={4} className='text-md-center ps-5 mb-4 mt-5'>
                        <div className='text-start ms-md-5'>
                            <h3 className='footer_title fw-bold'>
                                Aniket Sarvaiya
                            </h3>
                            <span className='footer_subtitle fw-bold'>Web Developer</span>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <Row>
                            <div className="footer_menu d-lg-flex flex-column text-md-start   text-light justify-content-center ps-5  mt-5">
                                <a className="nav-link footer_menu" href="#home" >Home</a>
                                <a className="nav-link footer_menu" href="#about" >About</a>
                                <a className="nav-link footer_menu " href="#skills" >Skills</a>
                                <a className="nav-link footer_menu" href="#qualification" >Qualification</a>
                                <a className="nav-link footer_menu " href="#portfolio" >Portfolio</a>
                                {/* <a className="nav-link footer_menu" href="#contactme" >Contact</a> */}
                            </div>
                        </Row>
                    </Col>
                    <Col md={6} lg={4} className='ps-sm-5'>
                        <div className=" footer_social_icon d-flex  justify-content-md-center text-center mt-5  ">
                            <i className="uil uil-linkedin-alt  fs-3  footer_social_icon" onClick={() => openUrl("https://www.linkedin.com/in/aniket-sarvaiya")}></i>
                            <i className="uil uil-github-alt fs-3 px-5 footer_social_icon " onClick={() => openUrl("https://github.com/AniketSarvaiya?tab=repositories")}></i>
                            <i className="uil uil-instagram fs-3 footer_social_icon" onClick={() => openUrl("https://www.instagram.com/aniket_sarvaiya_/")}></i>
                        </div>
                    </Col>
                    <Row className='text-center'>
                        <div className='pb-3'>
                            © Aniket Sarvaiya, All Rights Reserved
                        </div>
                    </Row>
                </Row>
            </div>
        </footer>
    )
}

export default Footer