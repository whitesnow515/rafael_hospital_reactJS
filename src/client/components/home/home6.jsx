/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ban_bg_01,
  ban_bg_02,
  banner_11,
  doctor_13,
  doctor_14,
  doctor_15,
  doctor_16,
  doctor_17,
  doctor_18,
  eye,
  star,
} from "../imagepath";
import SpecialtiesHome6 from "./EyeCareHome/Specialities";
import CenterSectionHome6 from "./EyeCareHome/CenterSectionHome6";
import CounterSectionHome6 from "./EyeCareHome/CounterSectionHome6";
import ClinicSectionHome6 from "./EyeCareHome/ClinicSectionHome6";
import StoreSectionHome6 from "./EyeCareHome/StoreSectionHome6";
import FacilitiesSectionHome6 from "./EyeCareHome/FacilitiesSectionHome6";
import BlogSectionHome6 from "./EyeCareHome/BlogSectionHome6";
import TestimonialsHome6 from "./EyeCareHome/TestimonialsHome6";
import AppointmentHome6 from "./EyeCareHome/AppointmentHome6";
import FooterHome6 from "./EyeCareHome/FooterHome6";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../header";
import ProgressCircle from "./paediatric/scrolltotop";
import FaqHome6 from "./EyeCareHome/FaqHome6";
import UserOffer from "./EyeCareHome/UserOffer";

const Home6 = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  let pathnames = window.location.pathname;
  return (
    <>
      <Header {...props} />
      <section className="doctor-search-section doctor-search-eleven">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 aos" data-aos="fade-up">
              <div className="banner-header">
                <p>Take Eye Care Solution from Experts</p>
                <h1>Eye Care &amp; Holistics The exeperts</h1>
                <Link to="/patient/booking1" className="btn btn-light-blue">
                  Make an Appointment
                </Link>
              </div>
              <div className="banner-users">
                <h6>
                  <img src={star} alt="img" />
                  4.8 Well Experienced
                </h6>
                <ul>
                  <li>
                    <img src={doctor_13} alt="img" />
                  </li>
                  <li>
                    <img src={doctor_14} alt="img" />
                  </li>
                  <li>
                    <img src={doctor_15} alt="img" />
                  </li>
                  <li>
                    <img src={doctor_16} alt="img" />
                  </li>
                  <li>
                    <img src={doctor_17} alt="img" />
                  </li>
                  <li>
                    <img src={doctor_18} alt="img" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 aos" data-aos="fade-up">
              <img src={banner_11} className="img-fluid dr-img" alt="" />
            </div>
          </div>
        </div>
        <div className="ban-bg">
          <img src={ban_bg_01} className="img-fluid bg-01" alt="" />
          <img src={ban_bg_02} className="img-fluid bg-02" alt="" />
          <img src={eye} className="img-fluid bg-03" alt="" />
        </div>
      </section>
      <SpecialtiesHome6 />
      <CenterSectionHome6 />
      <CounterSectionHome6 />
      <ClinicSectionHome6 />
      <StoreSectionHome6 />
      <UserOffer />
      <FacilitiesSectionHome6 />
      <BlogSectionHome6 />
      <TestimonialsHome6 />
      <AppointmentHome6 />
      <FaqHome6 />
      <FooterHome6 />
      <ProgressCircle />
    </>
  );
};

export default Home6;
