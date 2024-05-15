import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Doctersection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <section className="doctor-divison">
      <div className="d-flex">
        <div className="doc-background aos" data-aos="fade-up">
          <h3>ARE YOU A DOCTOR?</h3>
          <p>
            The service allows you to get maximum visibility online and to
            manage appointments and contacts coming from the site, in a simple
            and fast way.
          </p>
          <Link to="/patient/doctor-profile" className="doc-bok-btn">
            Book Now
          </Link>
        </div>
        <div className="pat-background aos" data-aos="fade-up">
          <h3>ARE YOU A PATIENT?</h3>
          <p>
            The service allows you to get maximum visibility online and to
            manage appointments and contacts coming from the site, in a simple
            and fast way.
          </p>
          <Link to="/patient/booking1" className="doc-bok-btn">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Doctersection;
