import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import '../Assets/CSS/Contactme.css'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ContactMe() {
    const [loading, setLoading] = useState(false);
    const { register,
        reset,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();

    const formRef = useRef(null);

    const successnotify = () => toast.success('Message Send Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;

    const errornotify = () => toast.error('Message Sending Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;



    const onSubmit = async (data) => {

        setLoading(true);

        const serviceID = 'service_p827aoy'; // Replace with your service ID from EmailJS
        // const templateID = 'template_wsxqv3o'; 
        // Replace with your template ID from EmailJS
        const templateID = 'template_bsd32iu';
        const userID = 'Dj_qdFNTZTsf1dqpp'; // Replace with your user ID from EmailJS

        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
            .then((result) => {
                console.log(formRef.current)
                console.log(result.text);
                reset();
                setLoading(false);
                successnotify();
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                errornotify();
            });
    };

    return (
        <section className='' id='contactme'>

            <Modal isOpen={loading}
                className='loading_modal'
                centered={true}>
                <ModalBody>
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </ModalBody>
            </Modal>
            <div className="container mt-5">
                <Row className='text-center'>
                    <h2 className="contactme_title fw-bold"> Contact Me</h2>
                    <span className="contactme_subtitle mb-5">Get in touch</span>
                </Row>
                <Row>
                    <Col md={6} className='px-3 mt-3 mb-5 contact_info_container'>
                        <div className='d-flex flex-row contact_info '>
                            <div><i className="uil uil-phone-alt fs-1 fw-bold contactme_icon"></i></div>
                            <div className='ps-4'>
                                <h4 className='mb-1 fw-light contactme_title'>Call Me</h4>
                                <span className='contactme_subtitle fw-light'>+91 94286 64691</span>
                            </div>
                        </div>
                        <div className='d-flex flex-row contact_info my-5'>
                            <div><i className="uil uil-envelope-alt fs-1 fw-bold contactme_icon"></i></div>
                            <div className='ps-4'>
                                <h4 className='mb-1 fw-light contactme_title'>Email</h4>
                                <span className='contactme_subtitle fw-light'>aniketsarvaiya2001@gmail.com</span>
                            </div>
                        </div>
                        <div className='d-flex flex-row contact_info mt-5'>
                            <div><i className="uil uil-map-marker fs-1 fw-bold contactme_icon"></i></div>
                            <div className='ps-4'>
                                <h4 className='mb-1 fw-light contactme_title'>Location</h4>
                                <span className='contactme_subtitle fw-light'> Surat, Gujarat</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='pe-md-5 mt-3 contactme justify-content-center'>
                        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <div className="contactme_content d-flex flex-wrap">
                                <div className='col-12 col-lg-6 mb-3'>
                                    <Form.Group className=" contact_content me-lg-2" controlId="name">
                                        <Form.Label className='contact_label fw-light'>Name</Form.Label>
                                        <Form.Control type="text" name='fullname' className='contact_input'
                                            {...register("fullname", { required: "Name is require !" })} />
                                    </Form.Group>
                                    {errors.fullname && <span className='text-danger ps-3'>{errors.fullname.message}</span>}
                                </div>
                                <div className='col-12 col-lg-6 mb-3'>
                                    <Form.Group className="contact_content ms-lg-1" controlId="email">
                                        <Form.Label className='contact_label fw-light'>Email</Form.Label>
                                        <Form.Control type="text" className='contact_input' name="email"
                                            {...register("email", {
                                                required: "Email is required!", pattern: {
                                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                    message: "Please enter valid email !"
                                                }
                                            })} />
                                    </Form.Group>
                                    {errors.email && <span className='text-danger ps-3'>{errors.email.message}</span>}
                                </div>
                            </div>
                            <Form.Group className=" contact_content" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='contact_label fw-light'>Message</Form.Label>
                                <Form.Control as="textarea" type="text" rows={4} className='contact_input' name="message"
                                    {...register("message", {
                                        required: "Message is required !", minLength: {
                                            value: 3,
                                            message: "Please enter more then 3 characters !"
                                        }
                                    })}
                                />
                            </Form.Group>
                            {errors.message && <span className='text-danger ps-3'>{errors.message.message}</span>}

                            <button type="submit" className="contact_submit_button d-flex py-3 px-3 mt-3">
                                <div className="text my-auto">Send Message</div>
                                <i className="uil uil-message fs-4 ps-2"></i>
                            </button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ContactMe