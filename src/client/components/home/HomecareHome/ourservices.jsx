import React from "react";
import {
  Service_doctor_01,
  Service_doctor_02,
  Service_doctor_03,
  Service_doctor_04,
  Service_doctor_05,
  Service_doctor_06,
  Service_doctor_07,
  Service_doctor_08,
  Service_doctor_09,
  Service_doctor_10,
  service_img,
  service_img_01,
  service_img_02,
  service_sec_bg,
} from "../../imagepath";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="service-sec-fourteen">
      <div className="section-bg">
        <img src={service_sec_bg} alt="Img" />
      </div>
      <div className="container">
        <div className="section-head-fourteen">
          <h2>
            Our <span> Services</span>
          </h2>
          <p>More the quantity, higher the discount. Hurry, Buy Now!</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 d-flex">
            <div className="service-type-cards w-100">
              <div className="service-types" data-aos="fade-down">
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_01} alt="Img" />
                  </Link>
                </div>
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Nurse at Home</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
              </div>
              <div className="service-types" data-aos="fade-down">
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_02} alt="Img" />
                  </Link>
                </div>
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Mobility Assistance</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
              </div>
              <div className="service-types" data-aos="fade-down">
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_03} alt="Img" />
                  </Link>
                </div>
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Physiotherapy</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
              </div>
              <div className="service-types" data-aos="fade-down">
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_04} alt="Img" />
                  </Link>
                </div>
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Medical Equipment</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
              </div>
              <div className="service-types" data-aos="fade-down">
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_05} alt="Img" />
                  </Link>
                </div>
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Trained Attendants</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="services-img-col w-100">
              <div className="sec-img-center">
                <img src={service_img} alt="Img" />
              </div>
              <div
                className="img-center img-center-one"
                data-aos="fade-down"
                data-aos-delay={500}
              >
                <img src={service_img_01} alt="Img" />
              </div>
              <div
                className="img-center img-center-two"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <img src={service_img_02} alt="Img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 d-flex">
            <div className="service-type-cards w-100">
              <div
                className="service-types service-type-right"
                data-aos="fade-down"
              >
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Lab Tests</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_06} alt="Img" />
                  </Link>
                </div>
              </div>
              <div
                className="service-types service-type-right"
                data-aos="fade-down"
              >
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Doctor Consultation</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_07} alt="Img" />
                  </Link>
                </div>
              </div>
              <div
                className="service-types service-type-right"
                data-aos="fade-down"
              >
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Mother &amp; Baby Care</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_08} alt="Img" />
                  </Link>
                </div>
              </div>
              <div
                className="service-types service-type-right"
                data-aos="fade-down"
              >
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Vaccination</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_09} alt="Img" />
                  </Link>
                </div>
              </div>
              <div
                className="service-types service-type-right"
                data-aos="fade-down"
              >
                <div className="service-content">
                  <h4>
                    <Link to="/search-2">Tele Consultation</Link>
                  </h4>
                  <Link to="/search-2" className="explore-link">
                    Explore
                    <i className="feather-arrow-right-circle" />
                  </Link>
                </div>
                <div className="doctor-image">
                  <Link to="/search-2">
                    <img src={Service_doctor_10} alt="Img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
