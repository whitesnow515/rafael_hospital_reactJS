import React, { useEffect } from "react";
import { home_12_why_us } from "../../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
const Chooseus = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Choose us */}
      <section className="choose-us-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fourteen text-center">
                <div className="service-inner-fourteen justify-content-center">
                  <div className="service-inner-fourteen-two">
                    <h3>Why Us</h3>
                  </div>
                </div>
                <h2>Why Choose Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-us-right-main">
                <img src={home_12_why_us} alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-us-content">
                <div
                  className="us-faq aos"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Lorem ipsum dolor sit amet
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse shade show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Lorem ipsum dolor sit amet
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Lorem ipsum dolor sit amet
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Lorem ipsum dolor sit amet
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Lorem ipsum dolor sit amet
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Choose us */}
    </>
  );
};
export default Chooseus;
