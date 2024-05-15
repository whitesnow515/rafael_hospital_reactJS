import React from 'react'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import { testicon01 } from '../../imagepath';

const PopuarTestSection = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <div>
    <section className="popular-test-section">
    <div className="section-small-imgs">
      <img src="assets/img/bg/section-bg-01.jpg" className="bg-img-one" alt="Img" />
      <img src="assets/img/bg/section-bg-02.png" className="bg-img-two" alt="Img" />
    </div>
    <div className="container">
      <div className="section-head-twelve">
        <h2>Popular Tests</h2>
        <p>Discover Our Popular Lab Tests, Unlock Key Health Insights with Trusted Diagnostic Services.</p>
      </div>
      <Slider {...sliderSettings} className="popular-test-slider">
        <div className="test-slider-card" data-aos="fade-up">
          <span className="hexagon">
            <img src={testicon01} alt="Img" />
          </span>
          <h4>
            <Link to="consultation.html">Diabetes</Link>
          </h4>
          <p>A diabetic foot exam can help find problems that can lead to serious infection and ...</p>
          <Link to="consultation.html" className="read-more-test">
            Read More
          </Link>
        </div>
        <div className="test-slider-card" data-aos="fade-up">
          {/* Add more slider items */}
        </div>
        {/* Add more slider items */}
      </Slider>
      <div className="medical-emergency-booking">
        <Slider className="doctor-consulting-slider" dots={false} arrows={false}>
          <div className="medical-emergency-card">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="slider-img">
                  <img src="assets/img/bg/slider-bg-img.png" className="img-fluid" alt="Img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="slider-content aos" data-aos="fade-up" data-aos-delay={600}>
                  <h3>Chest Pain?</h3>
                  <span>Check if you are at risk for a Heart Attack</span>
                  <p>Get a test report in an hour & care for your heart with our Specialist Advice</p>
                  <Link to="booking-2.html">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="medical-emergency-card">
            {/* Add more emergency cards */}
          </div>
          {/* Add more emergency cards */}
        </Slider>
      </div>
      {/* Add the rest of your component */}
    </div>
  </section>
    </div>
  )
}

export default PopuarTestSection
