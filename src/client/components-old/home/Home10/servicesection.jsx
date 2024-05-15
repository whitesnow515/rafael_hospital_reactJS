import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  serive_bg_icon,
  service_service_3,
  service_service_2,
  service_service_1,
} from "../../imagepath";
const Servicesection = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* services Section */}
      <section className="services-section-fifteen">
        <div className="service-bg-icon">
          <img src={serive_bg_icon} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Our <span>Services</span>
                </h2>
                <p>
                  Our goal is to give the patient maximum relief within minimal
                  pain inflicted
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img
                          src={service_service_3}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">EAR Treatment</Link>
                      <span>5+ Services</span>
                    </div>
                    <p>
                      Surgery for the human sensory organs like the ear requires
                      precision to achieve desirable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img
                          src={service_service_2}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">Nose and Sinus</Link>
                      <span>10+ Services</span>
                    </div>
                    <p>
                      The cranial aspect of the human body commanded respect
                      from patients and doctors alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img
                          src={service_service_1}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">
                        Throat / Larynx Surgery
                      </Link>
                      <span>15+ Services</span>
                    </div>
                    <p>
                      Laryngoplasty was introduced and popularised by Isshiki in
                      the 1970’s.
                    </p>
                  </div>
                </div>
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
