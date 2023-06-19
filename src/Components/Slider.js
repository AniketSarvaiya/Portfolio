import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '../Assets/CSS/Portfolio.css'
import portfolio1 from '../Assets/Images/rentify.png'
import portfolio3 from '../Assets/Images/pro1.jpg'
import portfolio2 from '../Assets/Images/portfolio2.jpg';
import { Row } from 'react-bootstrap'

function Slider() {
    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2000, disableOnInteraction: false
            }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='mx-lg-5'

        >
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row'>
                        <img src={portfolio1} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0 border shadow' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title pt-5 pt-lg-0'> RentiFy</h3>
                            <p className='portfolio_description'> A vehicle rental web application is a software application that allows customers to rent cars online (Mern Stack). </p>
                            <span
                                className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'
                                onClick={() => openInNewTab("https://github.com/AniketSarvaiya/Rentify")}> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row '>
                        <img src={portfolio3} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start p-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title pt-3 pt-lg-0'> Portfolio </h3>
                            <p className='portfolio_description'>This sleek and modern site has been built using ReactJS, highlighting my skills, experience, and projects. </p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'
                                onClick={() => openInNewTab("https://github.com/AniketSarvaiya/Portfolio")}> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            <SwiperSlide className='ps-md-5 pe-md-5'>
                <div className="portfolio_content d-flex px-5">
                    <Row className='text-center portfolio_data_row pb-0 pb-md-5'>
                        <img src={portfolio2} alt="desk" className='portfolio_image col-md-4 col-12 mx-auto p-0' />
                        <div className="portfolio_data  col-12 col-lg-5  text-center text-lg-start py-5 p-md-2 d-flex flex-column">
                            <h3 className='portfolio_title pt-4 pt-lg-0'> Event Management System</h3>
                            <p className='portfolio_description'> This is an database designed using PgAdmin consists of several interconnected tables to store and organize data.</p>
                            <span className='view-more-button rounded mt-auto mt-lg-auto m-auto m-lg-0 me-lg-auto px-4 py-2 fs-6'
                                onClick={() => openInNewTab("https://github.com/AniketSarvaiya/Event-Management-System")}> View more <i className="uil uil-arrow-right fs-4 ms-2"></i> </span>
                        </div>
                    </Row>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide className='ps-md-5 pe-md-5'>
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
            </SwiperSlide> */}
        </Swiper >
    )
}

export default Slider