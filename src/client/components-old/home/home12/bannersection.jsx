import React from 'react'
import { labviewicon, sectionsmallicon01, sectionsmallicon02, swiperslideimag01, swiperslideimag02, swiperslideimag03 } from '../../imagepath'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards, Mousewheel } from 'swiper/core';
import Select from 'react-select';
import {Link} from 'react-router-dom'
SwiperCore.use([EffectCards, Mousewheel]);



const BannerSection = () => {

  const options = [
    { value: 'all', label: 'Select Speciality' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'urology', label: 'Urology' },
  ];
  const country = [
    { value: 'all', label: 'Choose City' },
    { value: 'cardiology', label: 'USA' },
    { value: 'neurology', label: 'UK' },
  ];

  const swiperParams = {
    effect: 'cards',
    loop: false,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    mousewheel: {
      invert: false,
    },
  };

  const cardData = [
    { id: 1, imgSrc: swiperslideimag01, title: 'Asthma Apply', parameters: 'Includes 90 Parameters', price: '$350.25', discountedPrice: '$699.00' },
    { id: 2, imgSrc: swiperslideimag02, title: 'Asthma Apply', parameters: 'Includes 70 Parameters', price: '$250.49', discountedPrice: '$499.00' },
    { id: 3, imgSrc: swiperslideimag03, title: 'Asthma Apply', parameters: 'Includes 80 Parameters', price: '$150.49', discountedPrice: '$299.00' },
  ];


  return (
    <div>

      {/* Home Banner */}
      <section className="banner-sec-twelve">
        <div className="section-small-imgs">
          <img
            src={sectionsmallicon01}
            className="small-icon-one"
            alt="Img"
          />
          <img
            src={sectionsmallicon02}
            className="small-icon-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner-content-twelve">
                <div
                  className="banner-title-twelve aos"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <h1>
                    Now Book Lab Tests <br /> at Home
                  </h1>
                  <p>Comprehensive Lab Testing for Informed Well-being</p>
                </div>
                <form action="/patient/search-doctor2">
                  <div className="input-box-twelve">
                    <div className="input-block">
                      
                      <Select
                        options={options}
                        placeholder="Select Speciality"
                      />
                    </div>
                    <div className="input-block">
                      <Select
                      options={country}
                      placeholder="Choose City"
                    />
                    </div>
                    <div className="input-block">
                      <div className="search-btn-twelve">
                        <Link to="/patient/search-doctor2">Search Now</Link>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="banner-counter">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-purple-color"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <span className="hexagon" />
                        <h3>
                          <span className="counter">
                            <CountUp end={985} duration={6} />
                          </span>+
                        </h3>
                        <h5>Collection points</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-violet-color"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <span className="hexagon" />

                        <h3>
                          <span className="counter">
                            <CountUp start={0} end={1} duration={6} />
                          </span>M+
                        </h3>
                        <h5>Reports Delivered</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-blue-color"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <span className="hexagon" />
                        <h3>
                          <span className="counter">
                            <CountUp end={150} duration={6} />
                          </span>+
                        </h3>
                        <h5>Expert Specialists</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-all-lab" data-aos="fade-up">
                  <span>
                    <img src={labviewicon} alt="Img" />
                  </span>
                  <h5>View all Offers on Lab tests !!!</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-10">
              <div className="swiper swiper-slider-banner">
                <div
                  className="swiper-wrapper aos"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  {/* Swiper Slide */}
                  <Swiper effect={"cards"} {...swiperParams}>
                    {cardData.map((card) => (
                      <SwiperSlide key={card.id}>
                        <div className="swiper-slide">
                          <div className="img-swiper">
                            <Link to="/consultation">
                              <img src={card.imgSrc} className="img-fluid" alt="Img" />
                            </Link>
                          </div>
                          <div className="swiper-content-card">
                            <h4>
                              <Link to="/consultation">{card.title}</Link>
                            </h4>
                            <span className="badge">{card.parameters}</span>
                            <div className="cost-pay">
                              <h5>
                                {card.price}<span>{card.discountedPrice}</span>
                              </h5>
                              <Link to="/patient/booking2" className="slider-buy-btn">
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* /Swiper Slide */}
                </div>
                <div className="testimonial-bottom-nav">
                  <div className="slide-next-btn testimonial-next-pre">
                    <i className="fas fa-arrow-left" />
                  </div>
                  <div className="slide-prev-btn testimonial-next-pre">
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banfner */}
    </div>
  )
}

export default BannerSection
