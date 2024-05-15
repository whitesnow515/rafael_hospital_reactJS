import React, { useEffect } from "react";
import {
  bath_tub,
  bottel,
  injection,
  pet_doctor,
} from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
const Servicesection = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* services Section */}
      <section className="services-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen">
                  <div className="service-inner-fourteen-two">
                    <h3>OUR SERVICES</h3>
                  </div>
                </div>
                <h2>What can We do</h2>
                <p>Our Professional Services</p>
              </div>
            </div>
          </div>
          <div className="row row-gap justify-content-center">

          
          <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="our-services-list">
                <div className="service-icon">
                  <img src={pet_doctor} alt="" />
                </div>
                <h4>Pet Care</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="our-services-list">
                <div className="service-icon">
                  <img src={bottel} alt="" />
                </div>
                <h4>Pet Medicine</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="our-services-list">
                <div className="service-icon">
                  <img src={injection} alt="" />
                </div>
                <h4>Vaccination</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="our-services-list">
                <div className="service-icon">
                  <img src={bath_tub} alt="" />
                </div>
                <h4>Pet wash</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>




          </div>
        </div>
      </section>
      {/* /services Section */}
    </>
  );
};
export default Servicesection;
