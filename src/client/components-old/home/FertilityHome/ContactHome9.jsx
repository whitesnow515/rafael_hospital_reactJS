import React from "react";
import { contact_fourteen, contact_icon1, contact_icon2, contact_icon3 } from "../../imagepath";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ContactHome9() {
    return (
        <>
            <section className="contact-section-fourteen">
                <div className="container">
                    <div className="contact-schedule-main">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="scheduling-left-main">
                                    <h2>Are you pregnant?</h2>
                                    <p>Free talk with us for Schedule a Consultation.</p>
                                    <ul>
                                        <li>
                                            <Link to="/doctor/appointments">Fix an Appoint</Link>
                                        </li>
                                        <li>
                                            <Link to="/patient/booking1">Make a Call</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Whatsapp</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="scheduling-right-main">
                                    <img
                                        src={contact_fourteen}
                                        alt="image"
                                        className="img-fluid"
                                    />
                                    <div className="scheduling-right-img">
                                        <img src={contact_icon3} alt="" />
                                    </div>
                                    <div className="scheduling-right-imgtwo">
                                        <img src={contact_icon2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-inner-image">
                            <img src={contact_icon1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ContactHome9;