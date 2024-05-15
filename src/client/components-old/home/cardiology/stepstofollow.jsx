import React, { useEffect } from "react";
import { healthcare, heartpulse } from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Stepstofollow = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <section className="need-to-know-section steps-to-follow">
        <div className="floating-bg">
          <img src={healthcare} alt="#" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 aos" data-aos="fade-up">
              <div className="gallery-box-block">
                <div className="gallery-box-right">
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>1</span>
                        <img src={heartpulse} className="img-fluid" alt="#" />
                      </div>
                      <h6>Choose Your Doctor</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>3</span>
                        <img src={heartpulse} className="img-fluid" alt="#" />
                      </div>
                      <h6>Consult with doctor</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                </div>
                <div className="gallery-box-left">
                  <div className="box-detail mb-4 ">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>2</span>
                        <img src={heartpulse} className="img-fluid" alt="#" />
                      </div>
                      <h6>Set Appointment</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                  <div className="box-detail">
                    <div className="steps-list-box">
                      <div className="steps-list-img">
                        <span>4</span>
                        <img src={heartpulse} className="img-fluid" alt="#" />
                      </div>
                      <h6>Get recommendation</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Easy Steps For <span>New Patients</span>
                </h2>
                <div className="need-to-know-content">
                  <p>
                    If one of the valves in your heart becomes diseased it can
                    affect the flow of blood. This can happen in one of two
                    ways: valve stenosis (where the valve does not fully open
                    and obstructs or restricts flow) or valve incompetence
                    (where the valve does not close properly and blood is
                    allowed to leak backwards)....
                  </p>
                  <div className="content-btn-block d-flex">
                    <Link
                      to="/patient/booking1"
                      className=" need-to-know-content-btn book-btn me-2">
                      Book Appointment
                    </Link>
                    <Link
                      to="/pages/pricing-plan"
                      className=" need-to-know-content-btn">
                      Click Our Plan
                    </Link>
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

export default Stepstofollow;
