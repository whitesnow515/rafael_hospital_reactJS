/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  center_bg,
  doc_01,
  doc_02,
  doc_03,
  eye_icon,
  hospital,
} from "../../imagepath";
import { Link } from "react-router-dom";

function CenterSectionHome6() {
  return (
    <>
      <section className="center-section">
        <div className="ban-bg">
          <img src={center_bg} alt="" className="img-fluid bg-05" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 aos" data-aos="fade-up">
              <div className="center-img">
                <img src={hospital} alt="" className="img-fluid" />
                <div className="center-service">
                  <span>
                    <i className="fa-solid fa-headphones" />
                  </span>
                  <div>
                    <h6>24/7 Service</h6>
                    <p>We are available when you want</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 aos" data-aos="fade-up">
              <div className="center-info">
                <div className="section-heading sec-heading-eye">
                  <img src={eye_icon} alt="" className="img-fluid" />
                  <h2>
                    <span>Who</span> We Are
                  </h2>
                  <p>The Great Place Of Eyecare Hospital Center</p>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <img src={doc_01} alt="" className="img-fluid" />
                    </span>
                    <h6>Expert Professionals and World Class Facilities</h6>
                    <Link to="/patient/search-doctor2">
                      Find Doctors
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <img src={doc_02} alt="" className="img-fluid" />
                    </span>
                    <h6>Specialty Eyecare treatment for all</h6>
                    <Link to="/patient/booking1">
                      Book Now
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <img src={doc_03} alt="" className="img-fluid" />
                    </span>
                    <h6>Online Appointment and Excellent Treatment</h6>
                    <Link to="/patient/booking2">
                      Make an Appointment
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
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

export default CenterSectionHome6;
