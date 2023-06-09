import React from 'react'
import '../Assets/CSS/Qualification.css'

function Quialification() {
    return (
        <section className="quialification section">
            <div className="container">
                <div className=" text-center mt-5">
                    <h2 className="qualification_title fw-bold">Qualification</h2>
                    <span className="quialification_subtitle">My personal journey</span>
                </div>

                <div className="education text-center my-5 ">
                    <i className="uil uil-graduation-cap education_icon fs-4 p-2"></i>
                    <span className="education">
                        Education
                    </span>
                </div>

                <div className="qualification_content">

                    <div className="qualification_data">
                        <div className='text-end'>
                            <div className="quialification_title fw-bold fs-4">MSc.IT</div>
                            <span className="qualification_subtitle fw-bold ">DAIICT-Institute</span>
                            <div className="qualification_calander">
                                <i className="uil uil-calendar-alt qualification_icon fw-bold pe-2"></i>
                                <span className="qualification_calander">
                                    2021-2023
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>

                            <div className="quialification_title fw-bold fs-4">B.C.A</div>
                            <span className="qualification_subtitle fw-bold ">VNSGU - University</span>
                            <div className="qualification_calander">
                                <i className="uil uil-calendar-alt qualification_icon fw-bold pe-2"></i>
                                <span className="qualification_calander">
                                    2018-2021
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div className='text-end'>
                            <div className="quialification_title fw-bold fs-4">H.S.C</div>
                            <span className="qualification_subtitle fw-bold ">Sadhna Vidhya bhavan-GHSEB</span>
                            <div className="qualification_calander">
                                <i className="uil uil-calendar-alt qualification_icon fw-bold pe-2"></i>
                                <span className="qualification_calander">
                                    2017-2018
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data ">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            {/* <span className="qualification_line"></span> */}
                        </div>

                        <div>

                            <div className="quialification_title fw-bold fs-4">S.S.C</div>
                            <span className="qualification_subtitle fw-bold ">Sadhna Vidhyabhavan-GSEB</span>
                            <div className="qualification_calander">
                                <i className="uil uil-calendar-alt qualification_icon fw-bold pe-2"></i>
                                <span className="qualification_calander">
                                    2015-2016
                                </span>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}

export default Quialification