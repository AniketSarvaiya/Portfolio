import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Assets/CSS/Portfolio.css'
import portfolio1 from '../Assets/Images/rentify.png'
import portfolio3 from '../Assets/Images/pro1.jpg'
import Portfolio2 from '../Assets/Images/portfolio2.jpg';
import { Row } from 'react-bootstrap'

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

        >
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row p-2 p-md-5'>
                        <img src={portfolio1} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title'> RentiFy</h3>
                            <p className='portfolio_description'> A vehicle rental web application is a software application that allows customers to rent cars online (Mern Stack). </p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row  p-5'>
                        <img src={Portfolio2} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title'> Portfolio </h3>
                            <p className='portfolio_description'>This sleek and modern site has been built using ReactJS, highlighting my skills, experience, and projects. </p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row  p-5'>
                        <img src={portfolio3} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title'> Portfolio1</h3>
                            <p className='portfolio_description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At harum quidem eum perspiciatis? Ad laboriosam exercitationem, .</p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row  p-5'>
                        <img src={portfolio3} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title'> Portfolio1</h3>
                            <p className='portfolio_description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At harum quidem eum perspiciatis? Ad laboriosam exercitationem, .</p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'> View more <i className="uil uil-arrow-right fs-4 ms-2 view_more_arrow"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider