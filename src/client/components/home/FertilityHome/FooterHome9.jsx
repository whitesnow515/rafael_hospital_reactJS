import React from "react";
import { logo } from "../image";
import { Link } from "react-router-dom";

function FooterHome9() {
    return (
        <>
            <footer className="footer footer-one footer-fourteen">
                <div className="footer-top aos" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-widget footer-about">
                                    <div className="footer-logo">
                                        <Link to="/index-10">
                                            <img src={logo} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-about-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna ad minim
                                            veniam aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="footer-widget footer-menu">
                                            <h2 className="footer-title">Company</h2>
                                            <ul>
                                                <li>
                                                    <Link to="#">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Specialities</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Consult</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="footer-widget footer-menu">
                                            <h2 className="footer-title">Specialities</h2>
                                            <ul>
                                                <li>
                                                    <Link to="#">Neurology</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Cardiologist</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Dentist</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4">
                                        <div className="footer-widget footer-contact">
                                            <h2 className="footer-title">Contact Us</h2>
                                            <div className="footer-contact-info">
                                                <div className="footer-address">
                                                    <p>
                                                        <i className="feather-map-pin" /> 3556 Beech Street, USA
                                                    </p>
                                                </div>
                                                <div className="footer-address">
                                                    <p>
                                                        <i className="feather-phone-call" /> +1 315 369 5943
                                                    </p>
                                                </div>
                                                <div className="footer-address mb-0">
                                                    <p>
                                                        <i className="feather-mail" /> doccure@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-7">
                                <div className="footer-widget">
                                    <h2 className="footer-title">Join Our Newsletter</h2>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email"
                                            />
                                            <button type="submit" className="btn">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <i className="fab fa-facebook" />{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <i className="fab fa-twitter" />{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" target="_blank">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        {/* Copyright */}
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="copyright-text">
                                        <p className="mb-0"> Copyright © 2023 All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    {/* Copyright Menu */}
                                    <div className="copyright-menu">
                                        <ul className="policy-menu">
                                            <li>
                                                <Link to="/privacy-policy">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="/terms-condition">Terms and Conditions</Link>
                                            </li>
                                            <li>
                                                <Link to="/login">Login &amp; Register</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /Copyright Menu */}
                                </div>
                            </div>
                        </div>
                        {/* /Copyright */}
                    </div>
                </div>
            </footer>

        </>
    );
}

export default FooterHome9;