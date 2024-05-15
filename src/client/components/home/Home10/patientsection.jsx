/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import {
  fifteen_bg_icon3,
  patients_img_fifteen,
  we_are_icon1,
  we_are_icon2,
  we_are_icon3,
} from "../../imagepath";
const PatientsSection = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Patients Section */}
      <div className="Patients-section-fifteen">
        <div className="patient-fifteen-icon">
          <img src={fifteen_bg_icon3} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="patients-left-front patients-left-img">
                <img src={patients_img_fifteen} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-fifteen section-header-fifteenpatient">
                <h2>
                  Who <span>We Are</span>
                </h2>
                <p>
                  Our goal is to give the patient maximum relief within minimal
                  pain inflicted
                </p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <img src={we_are_icon1} alt="" />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={14500} duration={5} />
                      </h3>
                    </div>
                    <h6>ENT Surgery</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <img src={we_are_icon2} alt="" />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={50000} duration={5} />
                        <span>+</span>
                      </h3>
                    </div>
                    <h6>Happy Patients</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <img src={we_are_icon3} alt="" />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={30} duration={5} />
                        <span>+</span>
                      </h3>
                    </div>
                    <h6>Years of Service</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Patients Section */}
    </>
  );
};
export default PatientsSection;
