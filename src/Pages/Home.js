import React from 'react'
import '../Assets/CSS/Home.css'
import profileimage from '../Assets/Images/perfil.png'
function Home() {
    return (
        <>
            <section className='home-section'>
                <div className="home-container container">
                    <div className="row">
                        <div className="social_icon col-2 order-0 bg-primary text-center d-flex flex-column justrify-content-betwen">
                            <i class="uil uil-linkedin-alt"></i>
                            <i class="uil uil-github-alt"></i>
                            <i class="uil uil-instagram"></i>
                        </div>
                        <div className="about_me col-sm-12 col-lg-5  order-2 bg-danger">
                            text
                        </div>
                        <div className="my_image col-sm-10 col-lg-5 col-md-10 col-10  order-1 bg-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 187">
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
                                    <image xlinkHref={profileimage} />
                                </g>
                            </svg>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home