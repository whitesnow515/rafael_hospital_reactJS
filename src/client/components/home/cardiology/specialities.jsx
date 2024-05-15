import React, { useEffect } from "react";
import {
  drugssvg,
  health,
  healthcare,
  healthcarelove,
  syringesvg,
  userdoctor,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialities = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div>
      <section className="specialities-section-one">
        <div className="floating-bg">
          <img src={healthcare} alt="#" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Why <span>Doccure?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="specialities-block aos" data-aos="fade-up">
            <ul>
              <li>
                <div className="specialities-item">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <img src={healthcarelove} alt="#" />
                    </div>
                  </div>
                  <p>Personalized Health care</p>
                </div>
              </li>
              <li>
                <div className="specialities-item">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <img src={userdoctor} alt="#" />
                    </div>
                  </div>
                  <p>World-Leading Experts</p>
                </div>
              </li>
              <li>
                <div className="specialities-item">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <img src={health} alt="#" />
                    </div>
                  </div>
                  <p>Regularly Check Up</p>
                </div>
              </li>
              <li>
                <div className="specialities-item">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <img src={drugssvg} alt="#" />
                    </div>
                  </div>
                  <p>Treatment For Complex Conditions</p>
                </div>
              </li>
              <li>
                <div className="specialities-item">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <img src={syringesvg} alt="#" />
                    </div>
                  </div>
                  <p>Minimally Invasive Procedures</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
