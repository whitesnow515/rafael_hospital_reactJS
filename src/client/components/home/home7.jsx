import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  dot_1,
  dot_2,
  home_12_banner_1,
  home_12_banner_2,
  home_12_banner_bg,
  home_12_banner_bg2,
  ring_1,
  ring_2,
} from "../imagepath";
import Pricing from "./browsebySpecialities/Home7/pricing";
import Blogsection from "./browsebySpecialities/Home7/blogsection";
import Chooseus from "./browsebySpecialities/Home7/chooseus";
import Servicesection from "./browsebySpecialities/Home7/servicesection";
import Ourdoctors from "./browsebySpecialities/Home7/ourdoctors";
import Feedback from "./browsebySpecialities/Home7/Feedback";
import Footer7 from "./browsebySpecialities/Home7/footer7";
import ProgressCircle from "./paediatric/scrolltotop";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Home3 = (props) => {
  const config = "/react/template";
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="main-wrapper home-twelve">
      <Header {...props} />
      {/* Home Banner */}
      {/* Home Banner */}
      <section className="banner-section-fourteen banner-section-twelve">
        <div className="banner-section-twelve-bg">
          <img src={home_12_banner_bg} alt="" />
          <img src={home_12_banner_bg2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="banner-img banner-img-twelve aos"
                data-aos="fade-up"
              >
                <img src={home_12_banner_1} className="img-fluid" alt="" />
                <img src={home_12_banner_2} className="img-fluid" alt="" />
                <div className="banner-banner-img-twelve-bg">
                  <img src={dot_1} alt="" />
                  <img src={dot_2} alt="" />
                  <img src={ring_1} alt="" />
                  <img src={ring_2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-content banner-content-fourteen aos"
                data-aos="fade-up"
              >
                <h1>
                  We take care <span>of Your Pets</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <div className="banner-btns-fourteen ">
                  <Link to="/patient/booking1" className="btn btn-primary me-2">
                    Start a Consult
                  </Link>
                  <Link to="/patient/booking1" className="btn btn-primary ">
                    Schedule a Call
                  </Link>
                </div>
              </div>
              <div className="search-box-fourteen aos" data-aos="fade-up">
                <form
                  action={`${config}/patient/search-doctor`}
                  className="form-block d-flex"
                >
                  <div className="search-input">
                    <div className="form-group">
                      <label>Date</label>
                      {/* 
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Thu, Mar 24, 2022"
                      /> 
                      */}
                      <DatePicker
                        className="form-control datetimepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Thu, Mar 24, 2022"
                      />
                    </div>
                  </div>
                  <div className="search-input">
                    <div className="form-group mb-0">
                      <label className="location-icon">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="San Diego Branch"
                      />
                    </div>
                  </div>
                  <div className="search-btn">
                    <Link
                      to="/patient/booking1"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Book Now
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* /Home Banner */}
      {/* Clinic and Specialities */}
      {/* <HomeClinic /> */}
      {/* Clinic and Specialities */}
      {/* Category Section */}
      {/* <BrowsebySpecialities/> */}
      {/* Category Section */}
      {/* Popular Section */}
      {/* <BookourBestDoctor/> */}
      {/* /Popular Section */}
      {/* <HomeFeatures /> */}
      {/* <HomeBlog/> */}
      <Servicesection />
      <Ourdoctors />
      <Feedback />
      <Pricing />
      <Blogsection />
      <Chooseus />
      <>
        {/* Footer */}
        <Footer7 />
        <ProgressCircle />
      </>
    </div>
  );
};

export default Home3;
