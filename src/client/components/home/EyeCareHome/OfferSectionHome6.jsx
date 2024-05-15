import React from "react";
import { offer_01, offer_02 } from "../../imagepath";
import { Link } from 'react-router-dom';
function OfferSectionHome6() {
    return (
        <>
          <section className="offer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex">
                                <div className="offer-wrap flex-fill">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="off-img">
                                                <img
                                                    src={offer_01}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="off-info">
                                                <h6>NEW USER OFFER</h6>
                                                <p>21 - 25 April 2023</p>
                                                <h5>Free Eye Camp </h5>
                                                <Link to="#" className="btn btn-light-blue">
                                                    Book Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className="offer-wrap flat-offer flex-fill">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="off-img">
                                                <img
                                                    src={offer_02}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="off-info">
                                                <h6>Flat 30% OffER</h6>
                                                <p>21 April 2023</p>
                                                <h5>Crystal Clear </h5>
                                                <Link to="#" className="btn btn-light-blue">
                                                    Buy Now
                                                </Link>
                                            </div>
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

export default OfferSectionHome6;