import React, { useEffect } from "react";
import { client_02, client_03, feedback_six } from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
function FeedBackHome9() {
    useEffect(() => {
        AOS.init({duration: 1200,
          once: true});  
        
      }, []);

    const doctersettings = {
      items: 1,
     loop:true,
      margin:15,
        dots: false,
        nav:true,
        // navContainer: '.slide-nav-2',
        navText: ['<i class="fa-solid fa-caret-left "></i>', '<i class="fa-solid fa-caret-right"></i>'],
    
    autoplay:false,
    infinite: "true",
    
    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: [{
    breakpoint: 992,
    settings: {
      slidestoshow: 3
      }
    },
    {
    breakpoint: 800,
    settings: {
      slidestoshow: 3
      }
    },
    {
    breakpoint: 776,
    settings: {
      slidestoshow: 3
      }
    },
    {
    breakpoint: 567,
    settings: {
      slidestoshow: 1
    }
    }]
    }
    return (
        <>
            <section className="clients-section-fourteen">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="client-inner-main">
                                <img
                                    src={feedback_six}
                                    alt="image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header-fourteen text-end">
                                <div className="service-inner-fourteen justify-content-end">
                                    <div className="service-inner-fourteen-one"></div>
                                    <div className="service-inner-fourteen-two">
                                        <h3>Happy Clients</h3>
                                    </div>
                                    <div className="service-inner-fourteen-three"></div>
                                </div>
                                <h2>Our Clients Feedback About Us</h2>
                            </div>
                            <div className=" feedback-slider-fourteen owl-theme aos" data-aos="fade-up" >
                                <OwlCarousel {...doctersettings}>
                                    <div className="card feedback-card">
                                        <div className="card-body feedback-card-body">
                                            <div className="feedback-inner-main">
                                                <div className="feedback-inner-img">
                                                    <h6>March 03, 2023</h6>
                                                    <img
                                                        src={client_02}
                                                        alt="image"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="rating rating-fourteen">
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <h4>Jenifer Robinson</h4>
                                                <h6>Texas, USA</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card feedback-card">
                                        <div className="card-body feedback-card-body">
                                            <div className="feedback-inner-main">
                                                <div className="feedback-inner-img">
                                                    <h6>April 04, 2023</h6>
                                                    <img
                                                        src={client_03}
                                                        alt="image"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="rating rating-fourteen">
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <h4>Matthew George</h4>
                                                <h6>Texas, USA</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card feedback-card">
                                        <div className="card-body feedback-card-body">
                                            <div className="feedback-inner-main">
                                                <div className="feedback-inner-img">
                                                    <h6>May 09, 2023</h6>
                                                    <img
                                                        src={client_03}
                                                        alt="image"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="rating rating-fourteen">
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <h4>Jenifer Paul</h4>
                                                <h6>Mexico, USA</h6>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FeedBackHome9;