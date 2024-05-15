import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { feedback_fifteen, logo_03 } from "../../imagepath";
const Feedback = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Feedback */}
      <section className="feedback-section-fifteen">
        <div className="container">
          <div className="feedback-schedule-all">
            <div className="row">
              <div className="col-lg-5">
                <div className="feedback-inner-main">
                  <img
                    src={feedback_fifteen}
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="feedback-fifteen-content">
                  <div className="feedback-fift-img">
                    <img src={logo_03} alt="" />
                  </div>
                  <h3>Consult top doctors online for any health concern</h3>
                  <p>Connect within 60secs</p>
                  <Link to="/register">Signup Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Feedback */}
    </>
  );
};
export default Feedback;
