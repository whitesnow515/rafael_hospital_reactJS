import React from "react";
import { offer01, offer02 } from "../image";
import { Link } from "react-router-dom";
const UserOffer = () => {
  return (
    <>
      {/* Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex">
              <div className="offer-wrap flex-fill">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="off-img">
                      <img src={offer01} alt="" className="img-fluid" />
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
                      <img src={offer02} alt="" className="img-fluid" />
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
      {/* /Offer Section */}
    </>
  );
};

export default UserOffer;
