/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Header from '../../header';
// import Footer from '../../footer';
// import FeatherIcon from 'feather-icons-react';
// import {onelogo,oneslide} from "./img"
// import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OnboardingSidebar = () => {
  const [input, setInput] = useState("");

  const handletinput = () => {
    setInput(!input);
  };
  const settings = {
    items: 1,
    margin: 30,
    dots: true,
    nav: true,
    navText: false,
    loop: true,
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidestoshow: 1,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidestoshow: 1,
          slidestoscroll: 1,
          infinite: "true",
        },
      },
    ],
  };

  return (
    <div className="onboarding-slider">
      {/* Slider */}
      <div
        id="onboard-slider"
        className="owl-carousel owl-theme onboard-slider slider"
      >
        <OwlCarousel {...settings}>
          {/* Slider Item */}
          <div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>

          {/* /Slider Item */}
          {/* Slider Item */}
          <div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          {/* /Slider Item */}
          {/* Slider Item */}
          <div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          {/* /Slider Item */}
        </OwlCarousel>
      </div>
      {/* /Slider */}
    </div>
  );
};

export default OnboardingSidebar;
