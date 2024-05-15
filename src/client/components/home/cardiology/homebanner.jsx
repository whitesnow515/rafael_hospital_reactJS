import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  health_care_1,
  heart_2,
  heart_bg,
  home5banner_img,
} from "../../imagepath";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Homebanner = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const config = "/react/template";
  return (
    <div>
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <h6>
                  <img src={heart_2} className="me-2" alt="#" />
                  Every Beat, Every Moment
                </h6>
                <h1>
                  Preventive Care Is Essential For <br />
                  <span>Healthy Heart</span>
                </h1>
                <p>
                  We can guide you through issues like Cardiac arrest, Heart
                  Failure, Peripheral Artery Disease, Arrhythmia, Atrial
                  Fibrillation, Cholesterol and High BP.
                </p>
                <Link to="/patient/booking1" className="btn plan-btn">
                  Start a Consult
                </Link>
                <Link to="/patient/booking1" className="btn">
                  Click Our Plan
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-img aos" data-aos="fade-up">
                <img src={home5banner_img} className="img-fluid" alt="#" />
                <img src={heart_bg} className="img-fluid" alt="#" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="search-box-one search-ten aos" data-aos="fade-up">
                <div className="search-title">
                  <h5>Book An Apppointment</h5>
                  <img src={health_care_1} alt="#" />
                </div>
                <form action={`${config}/patient/search-doctor`}>
                  <div className="row row-gap">
                    <div className="col-lg-3 col-md-12">
                      <div className="search-input-ten">
                        <span>
                          <i className="fa-solid fa-location-dot" />
                        </span>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <div className="search-input-ten">
                        <span>
                          <i className="fa-solid fa-calendar-minus" />
                        </span>
                        <div className="form-group mb-0">
                          {/* <input type="text" className="form-control datetimepicker" placeholder="Date" /> */}
                          <DatePicker
                            className="form-control datetimepicker"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            placeholderText="Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="search-input-ten">
                        <span>
                          <i className="fa-solid fa-magnifying-glass" />
                        </span>
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Doctor"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="form-search-btn search-btn-ten w-100">
                        <button className="btn" type="submit">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homebanner;
