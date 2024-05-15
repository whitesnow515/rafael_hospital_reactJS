import React, { useEffect } from "react";
import { faq_img_2, healthcare } from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <section className="faq-section faq-section-ten">
        <div className="floating-bg">
          <img src={healthcare} alt="#" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <img src={faq_img_2} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                <h2 className="section-title">
                  Frequently Asked <span>Questions?</span>
                </h2>
              </div>
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <Link
                        to="#;"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        Experience in When to repair the mitral valve.
                      </Link>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <Link
                        to="#;"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        Have you need an expert medical team in house?
                      </Link>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <Link
                        to="#;"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        Can i make an Appointment Online with White Plains
                        Hospital Kendi?
                      </Link>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <Link
                        to="#;"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                        Experience in When to repair the mitral valve.
                      </Link>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <Link
                        to="#;"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive">
                        Can i make an Appointment Online with White Plains
                        Hospital Kendi?
                      </Link>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
