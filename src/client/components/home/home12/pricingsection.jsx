import React from 'react'
import { heartpulse,  priceicon04, priceicon05, priceicon06, pricesrickerribbon, variouslogo01, variouslogo02, variouslogo03, variouslogo04, variouslogo05, variouslogo06 } from '../../imagepath'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const PricingSection = () => {
    const specialitysettings = {
        items: 6,
        loop: true,
        margin: 15,
        dots: false,
        nav: false,

        autoplay: true,
        infinite: "true",

        slidestoscroll: 1,

        rows: 6,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 4,
            },
            1000: {
                items: 6,
            },
            1300: {
                items: 7,
            },
        },
    };

   


    return (
        <div>
            {/* Pricing Sec */}
            <section className="pricing-sec-twelve">
                <div className="container">
                    <div className="section-head-twelve">
                        <div className="title-head-twelve">
                            <h2>Our Pricing </h2>
                            <p> Choose the package that best suit you</p>
                        </div>
                        <ul className="nav nav-pills inner-tab " id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-monthly-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-monthly"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-monthly"
                                    aria-selected="false"
                                >
                                    Monthly
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-yearly-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-yearly"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-yearly"
                                    aria-selected="true"
                                >
                                    yearly
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content pt-0 dashboard-tab">
                        <div
                            className="tab-pane fade show active"
                            id="pills-monthly"
                            role="tabpanel"
                            aria-labelledby="pills-monthly-tab"
                        >
                            <div className="row justify-content-center">
                                <div
                                    className="col-lg-4 col-md-6 aos"
                                    data-aos="flip-left"
                                    data-aos-delay={400}
                                >
                                    <div className="pricing-card-twelve">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon06} alt="Img" />
                                            </span>
                                            <h5>Free</h5>
                                        </div>
                                        <div className="cost-price">
                                            <span>$0</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                500 Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                50 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                20 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 aos"
                                    data-aos="flip-left"
                                    data-aos-delay={600}
                                >
                                    <div className="pricing-card-twelve active">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon05} alt="Img" />
                                            </span>
                                            <h5>Essential</h5>
                                            <div className="sticker-ribbon">
                                                <img
                                                    src={pricesrickerribbon}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="cost-price">
                                            <span>$50</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                500 Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                80 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                25 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 aos"
                                    data-aos="flip-left"
                                    data-aos-delay={800}
                                >
                                    <div className="pricing-card-twelve">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon04} alt="Img" />
                                            </span>
                                            <h5>Team</h5>
                                        </div>
                                        <div className="cost-price">
                                            <span>$200</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                Unlimited Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                100 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                30 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-yearly"
                            role="tabpanel"
                            aria-labelledby="pills-yearly-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-card-twelve">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon06} alt="Img" />
                                            </span>
                                            <h5>Free</h5>
                                        </div>
                                        <div className="cost-price">
                                            <span>$0</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                500 Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                50 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                20 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-card-twelve active">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon05} alt="Img" />
                                            </span>
                                            <h5>Essential</h5>
                                            <div className="sticker-ribbon">
                                                <img
                                                    src={pricesrickerribbon}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="cost-price">
                                            <span>$50</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                500 Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                80 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                25 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-card-twelve">
                                        <div className="icon-price">
                                            <span>
                                                <img src={priceicon04} alt="Img" />
                                            </span>
                                            <h5>Team</h5>
                                        </div>
                                        <div className="cost-price">
                                            <span>$200</span>
                                            <h6>per month</h6>
                                        </div>
                                        <ul className="price-feature-first">
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                Unlimited Conversations p/m
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                100 Websites
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={heartpulse} alt="Img" />
                                                </span>
                                                30 GB Data Storage
                                            </li>
                                        </ul>
                                        <ul className="price-features-second">
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Everything Off{" "}
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Chat Widget
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="feather-plus" />
                                                </span>
                                                Real Time Support
                                            </li>
                                        </ul>
                                        <div className="booking-button text-center">
                                            <Link to="/patient/booking1" className="btn btn-primary w-100">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="various-logo-sec">
                        <div className="row">
                            <div className="col-md-12">


                            <div className="partners-info aos" data-aos="fade-up">
                            <ul className="owl-carousel partners-slider d-flex">
                              <OwlCarousel {...specialitysettings}>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo01}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo02}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo03}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo04}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo05}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo06}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo01}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo02}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo03}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo04}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo05}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={variouslogo06}
                                      alt="partners"
                                    />
                                  </Link>
                                </li>
                              </OwlCarousel>
                            </ul>
                          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Sec */}
        </div>
    )
}

export default PricingSection
