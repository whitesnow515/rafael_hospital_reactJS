/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  appointment_ryt_1,
  experience_1,
  experience_2,
  experience_3,
  experience_5,
  experience_6,
} from "../../imagepath";
const Contact = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* contact */}
      <section className="appointment-section-fifteen">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7">
              <div className="appointment-schedule-main">
                <h2>Book Appointment</h2>
                <h6>More the quantity, higher the discount. Hurry, Buy Now!</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul>
                  <li>
                    <div className="appointment-schedule-img">
                      <img src={experience_2} alt="" />
                      <div className="appoint-inner-img">
                        <img src={experience_3} />
                      </div>
                    </div>
                    <span>Find Experience Doctors</span>
                  </li>
                  <li>
                    <div className="appointment-schedule-img">
                      <img src={experience_5} alt="" />
                      <div className="appoint-inner-img">
                        <img src={experience_1} alt="" />
                      </div>
                    </div>
                    <span>Share your Health Issues</span>
                  </li>
                  <li>
                    <div className="appointment-schedule-img">
                      <img src={experience_6} alt="" />
                      <div className="appoint-inner-img">
                        <img src={experience_2} alt="" />
                      </div>
                    </div>
                    <span>Get solution about health</span>
                  </li>
                </ul>
                <Link to="patient/booking2">Book an Appointment</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="appointment-right-image appoint-fift-img">
                <img src={appointment_ryt_1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /contact */}
    </>
  );
};
export default Contact;
