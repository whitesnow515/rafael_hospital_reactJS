/* eslint-disable no-unused-vars */
import React from "react";
import {
  atom_bond2,
  features_01,
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
} from "../../imagepath";
const Services = () => {
  return (
    <div>
      <section className="services-section-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <div className="section-inner-thirteen">
                  <img src={atom_bond2} alt="#" />
                </div>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={service_1} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Prenatal/New-born</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={service_2} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>New-born examinate</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={service_3} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Vaccinations </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={service_4} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Blood tests</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={service_5} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>diagnostic tests</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <img src={features_01} alt="#" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Home visits</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
