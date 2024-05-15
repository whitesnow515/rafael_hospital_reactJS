/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  aboutus_fift_1,
  aboutus_icon1,
  client_01,
  client_02,
  client_03,
} from "../../imagepath";
//slider
// import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Patientaboutus = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    infinite: true,
    //     rows: 0,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,

    // responsive: [
    //     {
    //         breakpoint: 400,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,

    //         }
    //     },
    //     {
    //         breakpoint: 993,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             infinite: true,

    //         }
    //     }
    // ]
  };
  return (
    <section className="about-us-section-fifteen">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-fifteen text-center">
              <h2>
                Our <span>Patients Says</span>
              </h2>
              <p>What our Patients say about us</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="aboutus-img-main">
              <img src={aboutus_fift_1} alt="image" className="img-fluid" />
              <div className="aboutus-img-one">
                <img src={aboutus_icon1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="slider vertical-slider slick-initialized slick-slider slick-vertical">
              <Slider
                {...settings}
                className="slider vertical-slider slick-initialized slick-slider slick-vertical"
              >
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <img src={client_01} alt="" className="img-fluid" />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <img src={client_01} alt="" className="img-fluid" />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <img src={client_02} alt="" className="img-fluid" />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <img src={client_03} alt="" className="img-fluid" />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patientaboutus;
