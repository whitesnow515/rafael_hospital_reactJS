/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { coming_soon } from "../../imagepath";

const Comingsoon = (props) => {
  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Coming Soon</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Coming Soon
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Coming Soon */}
      <section className="error-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="error-info">
                <div className="error-img">
                  <img src={coming_soon} className="img-fluid" alt="" />
                </div>
                <div className="error-content">
                  <h2>We're Launching Soon!</h2>
                  <p>We're currently working hard on this page.</p>
                </div>
                <div className="coming-soon-info">
                  <div className="coming-soon-count">
                    <h4 id="day-box">5</h4>
                    <p>Days</p>
                  </div>
                  <div className="coming-soon-count">
                    <h4 id="hr-box">8</h4>
                    <p>Hours</p>
                  </div>
                  <div className="coming-soon-count">
                    <h4 id="min-box">48</h4>
                    <p>Minutes</p>
                  </div>
                  <div className="coming-soon-count">
                    <h4 id="sec-box">20</h4>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Coming Soon */}
      <Footer {...props} />
    </>
  );
};

export default Comingsoon;
