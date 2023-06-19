import React, { useRef } from 'react'
import '../Assets/CSS/Home.css'
import profileimage from '../Assets/Images/homeimage.jpg'
import { Row } from 'react-bootstrap';

function Home() {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }
    return (
        <>
            <section className=' home-section' id='home' >
                <div className="home-container container mt-5 mb-md-5">
                    <div className="row mt-md-5">
                        <div className="social_icon col-2  d-flex flex-column justify-content-center text-center">
                            <i className="uil uil-linkedin-alt  fs-3 my-2 home_social_icon" onClick={() => openUrl("https://www.linkedin.com/in/aniket-sarvaiya")}></i>
                            <i className="uil uil-github-alt fs-3 my-2 home_social_icon " onClick={() => openUrl("https://github.com/AniketSarvaiya?tab=repositories")}></i>
                            <i className="uil uil-instagram fs-3 my-2 home_social_icon" onClick={() => openUrl("https://www.instagram.com/aniket_sarvaiya_/")}></i>
                        </div>
                        <div className="row d-flex m-auto col-sm-10 col-lg-5 col-md-10 col-10 justify-content-center mb-md-5 mt-md-5">
                            <div className="box">
                                <div className="content">
                                    <img src={profileimage} />
                                </div>
                            </div>
                        </div>
                        <div className="about_me col-sm-12 col-lg-5 order-lg-1  d-flex flex-column justify-content-center ps-5 pe-4">
                            <h1 className='home_title mt-4 fw-bold  mb-3 '>Hi, I'am Aniket</h1>
                            <h4 className='home_subtitile fw-600 mb-3'>Web Developer</h4>
                            <p className='home_description fw-400 mb-5'>I am passionate about building dynamic and user-friendly web applications. Proficient in React.js for front-end development, and eager to enhance my skills in back-end technologies like Node.js and Express.js. </p>
                            <button className='home_button fs-5  m-auto m-lg-0'><a className='text-decoration-none home_contactme' href='#contactme'>Contact Me</a><i className="uil uil-message ps-2 fs-4"></i>
                            </button>
                        </div>
                    </div>
                    {/* <div className="home_scroll bg-danger ms-2 ps-4 col-lg-5 col-xl-4 col-sm-4 text-lg-end pe-xxl-2 pe-lg-2"> */}
                    <div className="home_scroll ps-5 col-lg-5 text-lg-end pe-xl-5 pe-xl-3 col-xxl-4 pe-xxl-0 mt-md-5 mb-md-5">
                        <i className="uil uil-mouse-alt home_scroll_mouse fs-2 " />
                        <span className="scroll_down px-1 fs-6">Scroll Down</span>
                        <i className="uil uil-arrow-down scroll_down-arrow fs-3"></i>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home