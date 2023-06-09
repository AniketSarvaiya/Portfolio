import React from 'react'
import '../Assets/CSS/Home.css'
import profileimage from '../Assets/Images/Profileimage.jpg'
function Home() {
    return (
        <>
            <section className='home-section' id='home'>
                <div className="home-container container">
                    <div className="row">
                        <div className="social_icon col-2  d-flex flex-column justify-content-center text-center">
                            <i className="uil uil-linkedin-alt fs-3 my-2"></i>
                            <i className="uil uil-github-alt fs-3 my-2"></i>
                            <i className="uil uil-instagram fs-3 my-2"></i>
                        </div>
                        <div className="about_me col-sm-12 col-lg-5 order-1 order-sm-1 order-lg-1  d-flex flex-column justify-content-center ps-5 pe-4">
                            <h1 className='home_title mt-4 fw-bold  mb-3 '>Hi, I'am Aniket</h1>
                            <h4 className='home_subtitile fw-600 mb-3'>Web Developer</h4>
                            <p className='home_description fw-400 mb-5'>I am passionate about building dynamic and user-friendly web applications. Proficient in React.js for front-end development, and eager to enhance my skills in back-end technologies like Node.js and Express.js. </p>
                            <button className='home_button fs-5  m-auto m-lg-0'>Contact Me <i className="uil uil-message ps-2 fs-4"></i>
                            </button>
                        </div>
                        <div className="my_image col-sm-10 col-lg-5 col-md-10 col-10  order-0 order-sm-0 order-lg-1 ">
                            <svg className='home_blob' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 187">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)" >
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                    <image className='blob_image' x={7} y={20} xlinkHref={profileimage} />
                                </g>
                            </svg>

                        </div>
                    </div>
                    {/* <div className="home_scroll bg-danger ms-2 ps-4 col-lg-5 col-xl-4 col-sm-4 text-lg-end pe-xxl-2 pe-lg-2"> */}
                    <div className="home_scroll ps-5 col-lg-5 text-lg-end pe-xl-5 pe-xl-3 col-xxl-4 pe-xxl-0">
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