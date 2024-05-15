import React, { useEffect } from "react";
import {
  feature_13,
  feature_14,
  feature_15,
  feature_16,
  healthcare,
} from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Needtoknow = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <section className="need-to-know-section">
        <div className="floating-bg">
          <img src={healthcare} alt="#" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Need To Know <span>Cardiac Conditions</span>
                </h2>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_1"
                      type="button"
                      role="tab"
                      aria-controls="content_1"
                      aria-selected="true">
                      Heart valve disease
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_2"
                      type="button"
                      role="tab"
                      aria-controls="content_2"
                      aria-selected="false">
                      Heart failure
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link tag-list"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#content_3"
                      type="button"
                      role="tab"
                      aria-controls="content_3"
                      aria-selected="false">
                      Pacemakers and defibrillators
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="content_1"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <div className="need-to-know-content">
                      <h3>Heart valve disease</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
                      <Link
                        to="/patient/booking1"
                        className=" need-to-know-content-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="content_2"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                    <div className="need-to-know-content">
                      <h3>Heart failure</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
                      <Link
                        to="/patient/booking1"
                        className=" need-to-know-content-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="content_3"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab">
                    <div className="need-to-know-content">
                      <h3>Pacemakers and defibrillators</h3>
                      <p>
                        If one of the valves in your heart becomes diseased it
                        can affect the flow of blood. This can happen in one of
                        two ways: valve stenosis (where the valve does not fully
                        open and obstructs or restricts flow) or valve
                        incompetence (where the valve does not close properly
                        and blood is allowed to leak backwards)....
                      </p>
                      <Link
                        to="/patient/booking1"
                        className=" need-to-know-content-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 aos" data-aos="fade-up">
              <div className="gallery-box-block">
                <div className="gallery-box-left">
                  <div className="box-detail mb-2 ">
                    <img src={feature_13} className="img-fluid" alt="#" />
                  </div>
                  <div className="box-detail">
                    <img src={feature_14} className="img-fluid" alt="#" />
                  </div>
                </div>
                <div className="gallery-box-right">
                  <div className="box-detail">
                    <img src={feature_15} className="img-fluid" alt="#" />
                  </div>
                  <div className="box-detail">
                    <img src={feature_16} className="img-fluid" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Needtoknow;
