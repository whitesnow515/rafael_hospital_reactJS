import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  home_12_pricing_bg_3,
  home_12_pricing_bg_4,
  home_12_pricing_bg_5,
} from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
const Pricing = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Pricing */}
      <section className="home-twelve-pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen">
                  <div className="service-inner-fourteen-two">
                    <h3>OUR PACKAGES</h3>
                  </div>
                </div>
                <h2>Our Pricing Plan</h2>
                <p>Our Special Package</p>
              </div>
            </div>
          </div>
          <div className="row row-gap justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="price-card-twelve">
                <div className="price-bg">
                  <img src={home_12_pricing_bg_4} alt="" />
                  <img src={home_12_pricing_bg_5} alt="" />
                  <img src={home_12_pricing_bg_3} alt="" />
                </div>
                <div className="price-content">
                  <div className="card-title">
                    <h3>Friendly Pack</h3>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>$</sup> 150 / <span>Visit</span>
                    </h2>
                  </div>
                  <div className="pack-details">
                    <ul>
                      <li>
                        <i className="feather-check-circle" />
                        Basic Checkup
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Grooming
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Pet Shower
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Vaccination
                      </li>
                    </ul>
                  </div>
                  <div className="price-btn">
                    <Link to="/pages/pricing-plan" className="btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="price-card-twelve active">
                <div className="price-bg">
                  <img src={home_12_pricing_bg_4} alt="" />
                  <img src={home_12_pricing_bg_5} alt="" />
                  <img src={home_12_pricing_bg_3} alt="" />
                </div>
                <div className="price-content">
                  <div className="card-title">
                    <h3>Exclusive Pack</h3>
                    <span>Best Offer</span>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>$</sup> 175 / <span>Visit</span>
                    </h2>
                  </div>
                  <div className="pack-details">
                    <ul>
                      <li>
                        <i className="feather-check-circle" />
                        Basic Checkup
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Grooming
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Pet Shower
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Vaccination
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Hair fall Pack
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        30 day Services
                      </li>
                    </ul>
                  </div>
                  <div className="price-btn">
                    <Link to="/pages/pricing-plan" className="btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="price-card-twelve">
                <div className="price-bg">
                  <img src={home_12_pricing_bg_4} alt="" />
                  <img src={home_12_pricing_bg_5} alt="" />
                  <img src={home_12_pricing_bg_3} alt="" />
                </div>
                <div className="price-content">
                  <div className="card-title">
                    <h3>Family Pack</h3>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>$</sup> 200 / <span>Visit</span>
                    </h2>
                  </div>
                  <div className="pack-details">
                    <ul>
                      <li>
                        <i className="feather-check-circle" />
                        30 day Services
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Grooming
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Pet Shower
                      </li>
                      <li>
                        <i className="feather-check-circle" />
                        Vaccination
                      </li>
                    </ul>
                  </div>
                  <div className="price-btn">
                    <Link to="/pages/pricing-plan" className="btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Pricing */}
    </>
  );
};
export default Pricing;
