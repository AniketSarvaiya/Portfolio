import React from 'react'
import Slider from '../Components/Slider'
import '../Assets/CSS/Portfolio.css'
import portfolio1 from '../Assets/Images/pro1.jpg'
import portfolio2 from '../Assets/Images/portfolio2.jpg'
import { Row } from 'react-bootstrap'

function Portfolio() {
    return (
        <section className='portfolio_section'>

            <div className="container">
                <div className='text-center mt-5 mb-5'>
                    <h2 className='portfolio_title fw-bold'>Portfolio</h2>
                    <span className='portfolio_subtitle fw-bold'>Most recent work</span>
                </div>

                <Slider />
            </div>
        </section>
    )
}

export default Portfolio