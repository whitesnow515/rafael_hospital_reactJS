import React from "react";
import { eye_icon, facility_01, facility_02, facility_03, facility_04, facility_05, facility_06, facility_07 } from "../../imagepath";

function FacilitiesSectionHome6() {
    return (
        <>
          <section className="facilities-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 aos" data-aos="fade-up">
                                <div className="section-heading text-center sec-heading-eye">
                                    <img
                                        src={eye_icon}
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h2>
                                        <span>Top</span> Facilities
                                    </h2>
                                    <p>The Great Place Of Eyecare Hospital Center</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="facility-box">
                                    <div className="facility-img">
                                        <img
                                            src={facility_01}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h6>Consultation rooms</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_02}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Audio and Video Call Consultation</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_03}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Modern Equipments</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_04}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Laboratory</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_05}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Optical Store</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_06}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Operation Theaters</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="facility-box">
                                            <div className="facility-img">
                                                <img
                                                    src={facility_07}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <h6>Pharmacy Shop</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
      );
}

export default FacilitiesSectionHome6;