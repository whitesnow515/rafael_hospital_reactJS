import React from "react";
import { client_01, client_02, client_03, client_04 } from "../../imagepath";
import Slider from "react-slick";

function Testimonial() {
  const settings = {
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: true,
    // prevArrow: true,
    // nextArrow: false,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <Slider {...settings}>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src={client_01} className="img-fluid" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>John Doe</span> New York
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src={client_02} className="img-fluid" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Amanda Warren</span> Florida
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src={client_03} className="img-fluid" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Betty Carlson</span> Georgia
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src={client_04} className="img-fluid" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Veronica</span> California
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img src={client_01} className="img-fluid" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Richard</span> Michigan
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
