import React, { useEffect, useState } from 'react'
import '../Assets/CSS/Skills.css'
import { Col, Row, Timeline } from 'react-bootstrap';
// import { Timeline } from 'react-bootstrap';


function Skills() {

    const [frontEnd, setfrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);
    const [other, setOther] = useState(false);

    const frontendtoggler = () => {
        setfrontEnd(!frontEnd)
    }
    const backEndtoggler = () => {
        setBackEnd(!backEnd)
    }
    const othertoggler = () => {
        setOther(!other)
    }

    useEffect(() => {
        if (backEnd) {
            setfrontEnd(false)
            setOther(false)
        }
    }, [backEnd])

    useEffect(() => {
        if (frontEnd) {
            setBackEnd(false);
            setOther(false)
        }
    }, [frontEnd])

    useEffect(() => {
        if (other) {
            setBackEnd(false);
            setfrontEnd(false)
        }
    }, [other])
    return (
        <>
            <section id='skills'>
                <div className="container mt-5">
                    <div className="skill_header text-center pb-5">
                        <h2 className="skill_main_title fw-bold">Skills</h2>
                        <span className="skill_subtitle fw-bold mb-3">My Technical skill</span>
                    </div>
                    {/* <div className="d-flex flex-wrap justify-content-center  p-md-5 p-1">

                       
                        <div className={`skill_container ${frontEnd ? 'skill_open' : 'skill_close'} m-0 mx-5 my-4 col-4`}>
                            <div className="skill_header d-flex justify-content-evenly">
                                <i class="uil uil-brackets-curly skill_icon fw-bold fs-3"></i>
                                <div className="my-auto">
                                    <h3 className="skill_title fw-bold px-3 my-auto">Frontend Developer</h3>
                                </div>
                                <i class="uil uil-angle-down skill_icon fw-bold fs-3" onClick={frontendtoggler}></i>
                            </div>
                            <div className="skill_list">
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">HTML</h4>
                                        <span className="skill_number">80%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_html"></span>
                                    </div>
                                </div>

                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">CSS</h4>
                                        <span className="skill_number">80%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_css"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">JavaScript</h4>
                                        <span className="skill_number">70%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_javascript"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">React</h4>
                                        <span className="skill_number">80%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_react"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`skill_container ${backEnd ? 'skill_open' : 'skill_close'} m-0 mx-5 my-4 col-4`}>
                            <div className="skill_header d-flex justify-content-evenly" onClick={backEndtoggler}>

                                <i className="uil uil-server skill_icon fw-bold fs-3"></i>
                                <div className='my-auto'>
                                    <h3 className="skill_title fw-bold px-3 my-auto">Backend Developer</h3>
                                </div>
                                <i class="uil uil-angle-down skill_icon fw-bold fs-3"></i>
                            </div>
                            <div className="skill_list">
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">ExpressJs</h4>
                                        <span className="skill_number">60%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_expressjs"></span>
                                    </div>
                                </div>

                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">NodeJs</h4>
                                        <span className="skill_number">70%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_nodejs"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Mongodb</h4>
                                        <span className="skill_number">80%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_mongodb"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className={`skill_container ${other ? 'skill_open' : 'skill_close'} m-0 mx-5 col-4`}>
                            <div className="skill_header d-flex justify-content-evenly" onClick={othertoggler}>
                                <i className="uil uil-arrow skill_icon fw-bold fs-3"></i>
                                <div className='my-auto'>
                                    <h3 className="skill_title fw-bold px-3 my-auto">Other Technologies</h3>
                                </div>
                                <i className="uil uil-angle-down skill_icon fw-bold fs-3"></i>
                            </div>
                            <div className="skill_list">
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Flutter</h4>
                                        <span className="skill_number">60%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_flutter"></span>
                                    </div>
                                </div>

                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Dart</h4>
                                        <span className="skill_number">60%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_dart"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Firebase</h4>
                                        <span className="skill_number">70%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_firebase"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Vs Code</h4>
                                        <span className="skill_number">80%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_vscode"></span>
                                    </div>
                                </div>
                                <div className="skill_data my-3">
                                    <div className="skill_title">
                                        <h4 className="skill_name fw-bold">Android Studio</h4>
                                        <span className="skill_number">70%</span>
                                    </div>
                                    <div className="skill_bar">
                                        <span className="skill_percentage skill_androidstudio"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Row className='px-md-5'>
                        <Col lg={6} >
                            <div className={`skill_container ${frontEnd ? 'skill_open' : 'skill_close'} m-0 mx-2 my-4`}>
                                <div className="skill_header d-flex justify-content-evenly">
                                    <i className="uil uil-brackets-curly header_skill_icon fw-bold fs-2 my-auto"></i>
                                    <div className="my-auto text-center">
                                        <h4 className="skill_title fw-bold px-3 my-auto">Frontend Developer</h4>
                                    </div>
                                    <i className="uil uil-angle-down skill_icon fw-bold fs-2 my-auto" onClick={frontendtoggler}></i>
                                </div>
                                <div className="skill_list px-5">
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">HTML</h4>
                                            <span className="skill_number">80%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_html"></span>
                                        </div>
                                    </div>

                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">CSS</h4>
                                            <span className="skill_number">80%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_css"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">JavaScript</h4>
                                            <span className="skill_number">70%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_javascript"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">React</h4>
                                            <span className="skill_number">80%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_react"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className={`skill_container ${backEnd ? 'skill_open' : 'skill_close'} m-0 mx-2 my-4`}>
                                <div className="skill_header d-flex justify-content-evenly" onClick={backEndtoggler}>

                                    <i className="uil uil-server header_skill_icon fw-bold fs-2 my-auto"></i>
                                    <div className='my-auto'>
                                        <h4 className="skill_title fw-bold px-3 my-auto">Backend Developer</h4>
                                    </div>
                                    <i className="uil uil-angle-down skill_icon fw-bold fs-2 my-auto"></i>
                                </div>
                                <div className="skill_list px-5">
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">ExpressJs</h4>
                                            <span className="skill_number">60%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_expressjs"></span>
                                        </div>
                                    </div>

                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">NodeJs</h4>
                                            <span className="skill_number">70%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_nodejs"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Mongodb</h4>
                                            <span className="skill_number">80%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_mongodb"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`skill_container ${other ? 'skill_open' : 'skill_close'} m-0 mx-2 my-4`}>
                                <div className="skill_header d-flex justify-content-evenly" onClick={othertoggler}>
                                    <i className="uil uil-arrow header_skill_icon fw-bold fs-2 my-auto"></i>
                                    <div className='my-auto'>
                                        <h4 className="skill_title fw-bold px-3 my-auto">Other Technologies</h4>
                                    </div>
                                    <i className="uil uil-angle-down skill_icon fw-bold fs-2 my-auto"></i>
                                </div>
                                <div className="skill_list px-5">
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Flutter</h4>
                                            <span className="skill_number">60%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_flutter"></span>
                                        </div>
                                    </div>

                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Dart</h4>
                                            <span className="skill_number">60%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_dart"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Firebase</h4>
                                            <span className="skill_number">70%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_firebase"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Vs Code</h4>
                                            <span className="skill_number">80%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_vscode"></span>
                                        </div>
                                    </div>
                                    <div className="skill_data my-3">
                                        <div className="skill_title">
                                            <h4 className="skill_name fw-bold">Android Studio</h4>
                                            <span className="skill_number">70%</span>
                                        </div>
                                        <div className="skill_bar">
                                            <span className="skill_percentage skill_androidstudio"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </section>
        </>
    )
}

export default Skills