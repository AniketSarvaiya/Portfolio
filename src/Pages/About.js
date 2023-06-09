import React from 'react'
import '../Assets/CSS/About.css'
import AboutImage from '../Assets/Images/AboutImage.png'
import cv from '../Assets/Pdf/resume.pdf'

function About() {
    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = resume;
    //     link.download = 'Aniket-Sarvaiya-CV.pdf';
    //     link.click();
    // };
    return (
        <>
            <section id='about'>
                <div className="container mt-5">
                    <div className="row text-center">
                        <h2 className='about_title fw-bold'>About Me</h2>
                        <span className='about_subtitle fw-bold'>My Intoduction</span>
                    </div>
                    <div className="row about_main text-center justify-content-center">
                        <div className="col-lg-4 text-center me-lg-5 ">
                            <img className='about_image' src={AboutImage} alt="about_image" />
                        </div>
                        <div className="col-lg-5 text-md-start pe-lg-5">
                            <div className="about_description">
                                I am passionate about building dynamic and user-friendly web applications. I am proficient in React.js for front-end development and eager to enhance my skills in back-end technologies like Node.js and Express.js.
                            </div>
                            <button className='about_button fs-5 m-auto m-lg-0'>
                                <a className='download_button'
                                    href={cv}
                                    download="Aniket Sarvaiya CV.pdf"
                                    target="_blank"
                                    rel="noreferrer">
                                    Download CV
                                </a>
                                <i className="uil uil-download-alt fs-4 px-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About