/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { price_icon1, price_icon2, price_icon3 } from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Priceingplan() {
  let pathnames = window.location.pathname;
  //Aos
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <section className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <div className="section-header-one">
                {pathnames.includes("/pages/pricing-plan") ? (
                  <h2>Our Pricing Plan</h2>
                ) : (
                  <h2 className="section-title">Pricing Plan</h2>
                )}
                {pathnames.includes("/pages/pricing-plan") ? (
                  <div className="plan-choose-info">
                    <label className="monthly-plan">Monthly</label>
                    <div className="status-toggle">
                      <input type="checkbox" id="status_1" className="check" />
                      <label htmlFor="status_1" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                    <label className="yearly-plan">Yearly</label>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className={`row justify-content-center ${
              pathnames.includes("/") || pathnames.includes("/index-11")
                ? " align-items-center"
                : " "
            }`}
          >
            <div
              className={`col-lg-4 ${
                pathnames.includes("/") || pathnames.includes("/index-11")
                  ? "col-sm-12 aos"
                  : "col-md-6 d-flex"
              }`}
              data-aos="fade-up"
            >
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price_icon1} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For individuals</p>
                        <h4>Basic</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $99 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/login-email" className="btn">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                  {/* {pathnames.includes("home") ||
                  pathnames.includes("/index-11") ? (
                    <ul className="nav header-navbar-rht">
                      <li className="nav-item">
                        <Link className="nav-link header-login" to="/login">
                          login / Signup
                        </Link>
                      </li>
                    </ul>
                  ) : null} */}
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 ${
                pathnames.includes("/") || pathnames.includes("/index-11")
                  ? "col-sm-12 aos"
                  : "col-md-6 d-flex"
              }`}
              data-aos="fade-up"
            >
              <div
                //  className="card pricing-card pricing-card-active"
                className={`card pricing-card pricing-card${
                  pathnames.includes("/") || pathnames.includes("/index-11")
                    ? "-active"
                    : ""
                }`}
              >
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price_icon2} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For startups</p>
                        <h4>Pro</h4>
                      </div>
                      <div className="pricing-tag">
                        <span>Popular</span>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $199 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Neque porro quisquam est, qui dolorem</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        {pathnames.includes("index") ||
                        pathnames.includes("/index-11") ? (
                          <>
                            <li>Lorem ipsum amet, consectetur</li>
                            <li>Sed ut perspiciatis unde</li>
                            <li>Nemo enim ipsam voluptatem</li>
                          </>
                        ) : null}
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/login-email" className="btn">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 ${
                pathnames.includes("/") || pathnames.includes("/index-11")
                  ? "col-sm-12 aos"
                  : "col-md-6 d-flex"
              }`}
              data-aos="fade-up"
            >
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price_icon3} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For big companies</p>
                        <h4>Enterprise</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $399 <span>/monthly</span>
                      </h2>
                      <h6>What's included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/login-email" className="btn">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Priceingplan;
