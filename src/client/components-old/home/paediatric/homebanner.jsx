import React, { useState } from "react";
import {
  atom_bond,
  baby_star,
  cloud_1,
  cloud_2,
  gold_star,
  heart_1,
  home_13_banner,
  pink_star,
  pulse_1,
  pulse_2,
  pulse_3,
  pulse_4,
  pulse_6,
  pulse_7,
  pulse_white,
  star_1,
} from "../../imagepath";

import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
const Homebanner = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const config = "/react/template";

  const options = [
    { value: 1, label: "English" },
    { value: 2, label: "Spanish" },
    { value: 3, label: "Mexico" },
  ];

  return (
    <div>
      <section
        className="banner-section-thirteen common-padding aos"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content aos" data-aos="fade-up">
                <h4>We specialize in Paediatric Care</h4>
                <h1>A Safe Care for your children’s health</h1>
                <p>
                  Supporting you to keep your child healthy with easy access to
                  high-quality paediatric care.
                </p>
                <div className="banner-btns-fourteen ">
                  <Link
                    to="/patient/search-doctor"
                    className="btn btn-primary "
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="banner-center-img d-flex justify-content-center">
                <img src={home_13_banner} alt="#" />
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="search-box-one search-box-thirteen aos"
                data-aos="fade-up"
              >
                <div className="search-title">
                  <h5>Fix Appointment</h5>
                </div>
                <form action={`${config}/patient/search-doctor2`}>
                  <div className="search-input search-calendar-line-thirteen">
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
                  <div className="search-input search-line-thirteen">
                    <span>
                      <i className="fas fa-user-friends" />
                    </span>

                    <Select
                      className="select w-100"
                      defaultValue={options[0]}
                      options={options}
                      placeholder="English"
                      isSearchable={false}
                    />
                  </div>
                  <div className="search-input search-map-line-thirteen">
                    <span>
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                      <Link
                        className="current-loc-icon current_location"
                        to="#"
                      ></Link>
                    </div>
                  </div>
                  <div className="search-input search-users-line-thirteen">
                    <span>
                      <i className="fas fa-user-friends" />
                    </span>
                    <Select
                      className="select w-100"
                      defaultValue={options.find(
                        (option) => option.value === 1
                      )}
                      options={options}
                      placeholder="English"
                      isSearchable={false}
                    />
                  </div>
                  <div className="form-search-btn">
                    <Link
                      to="/patient/search-doctor"
                      className="btn"
                      type="submit"
                    >
                      See Availability
                      <i>
                        <FeatherIcon icon={"arrow-right"} />
                      </i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-section-thirteen-bg">
          <div className="banner-section-thirteen-bg-one">
            <img src={pulse_1} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-two">
            <img src={pulse_2} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-three">
            <img src={pulse_4} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-four">
            <img src={pulse_3} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-five">
            <img src={pulse_3} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-six">
            <img src={pulse_6} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-seven">
            <img src={gold_star} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-eight">
            <img src={pink_star} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-nine">
            <img src={atom_bond} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-ten">
            <img src={pulse_7} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-eleven">
            <img src={atom_bond} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-thirteen">
            <img src={pulse_white} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-fourteen">
            <img src={star_1} alt="#" className="img-fluid" />
          </div>
          <div
            className="banner-section-thirteen-bg-fifteen aos"
            data-aos="fade-left"
          >
            <img src={cloud_1} alt="#" />
          </div>
          <div
            className="banner-section-thirteen-bg-sixteen aos"
            data-aos="fade-right"
          >
            <img src={cloud_2} alt="#" />
          </div>
          <div className="banner-section-thirteen-bg-seventeen">
            <Link to="#">Trained paediatric doctors</Link>
          </div>
          <div className="banner-section-thirteen-bg-eighteen">
            <Link to="#">New Born Care</Link>
          </div>
          <div className="banner-section-thirteen-bg-ninteen">
            <Link to="#">Child care treatments</Link>
          </div>
          <div className="banner-section-thirteen-bg-twenty">
            <img src={baby_star} alt="#" />
          </div>
          <div className="banner-section-thirteen-bgs">
            <img src={heart_1} alt="#" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homebanner;
