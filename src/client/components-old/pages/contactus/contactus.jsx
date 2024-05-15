import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import FeatherIcon from "feather-icons-react";

const Contactus = (props) => {
  return (
    <>
      <Header {...props} />

      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Contact Us</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Contact Us */}
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="section-inner-header contact-inner-header">
                  <h6>Get in touch</h6>
                  <h2>Have Any Question?</h2>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          style={{ width: "44px", height: "44px" }}
                        />
                      </i>
                    </div>
                    <div className="contact-details">
                      <h4>Address</h4>
                      <p>8432 Mante Highway, Aminaport, USA</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          style={{ width: "44px", height: "44px" }}
                        />
                      </i>
                    </div>
                    <div className="contact-details">
                      <h4>Phone Number</h4>
                      <p>+1 315 369 5943</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          style={{ width: "44px", height: "44px" }}
                        />
                      </i>
                    </div>
                    <div className="contact-details">
                      <h4>Email Address</h4>
                      <p>doccure@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Services</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Services"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your comments"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-group-btn mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary prime-btn"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact Us */}
        {/* Contact Map */}
        <section className="contact-map d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        {/* /Contact Map */}
      </>
      <Footer {...props} />
    </>
  );
};

export default Contactus;
