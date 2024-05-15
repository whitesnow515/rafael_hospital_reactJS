import React, { useEffect } from "react";
import { hand, heartplus, hexagon_group_3 } from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Bookappointment = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <section className="book-appointment-section aos" data-aos="fade-up">
        <div className="container">
          <div className="book-appointment-ten text-center">
            <div className="book-section-bg">
              <img src={hexagon_group_3} alt="#" />
              <img src={hand} alt="#" />
              <img src={heartplus} alt="#" />
            </div>
            <h2>Book An Appointment Today</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="appointment-btn-group">
              <Link to="/patient/booking1" className="appointment-blue-btn">
                Start a Consult
              </Link>
              <Link to="/patient/booking1">Click Our Plan</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookappointment;
