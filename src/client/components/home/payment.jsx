import React from "react";
import Headerconsultation from "./headerconsultation";
import { doctor02 } from "../pages/aboutus/img";
import { Link } from "react-router-dom";

const Payment = () => {
  const config = "/react/template";
  return (
    <div className="main-wrapper">
      <Headerconsultation />
      {/* /Header */}
      {/* Page Content */}
      <div className="doctor-content">
        <div className="container">
          {/* Payment */}
          <div className="row">
            <div className="col-md-12">
              <div className="back-link">
                <Link to="/consultation">
                  <i className="fa-solid fa-arrow-left-long" /> Back
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="paitent-header">
                <h4 className="paitent-title">Payment</h4>
              </div>
              <div className="booking-header">
                <h4 className="booking-title">Payments Methods</h4>
              </div>
              <div className="payments-form">
                <form action={`${config}/bookingsuccess`}>
                  <div className="payment-form-group">
                    <div className="form-group">
                      <label className="custom_radio">
                        <input type="radio" name="payment" defaultChecked="" />
                        <span className="checkmark" /> Debit or Credit Card
                      </label>
                    </div>
                    <div className="form-group card-label">
                      <label>Name on Card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group card-label">
                      <label>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group card-label">
                          <label>Expiry Month</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group card-label">
                          <label>Expiry Year</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="YYYY"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group card-label">
                          <label>CVV</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="****"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-form-group">
                    <div className="form-group">
                      <label className="custom_radio">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> Paypal
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom_radio">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> Cash on Visit
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom_radio">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> Bank Transfer
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom_radio">
                        <input type="radio" name="payment" />
                        <span className="checkmark" /> UPI
                      </label>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="booking-btn">
                      <button
                        type="submit"
                        className="btn btn-primary prime-btn justify-content-center align-items-center"
                      >
                        Next <i className="feather-arrow-right-circle" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="booking-header">
                <h4 className="booking-title">Booking Summary</h4>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-doctor-left">
                      <div className="booking-doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img src={doctor02} alt="" />
                        </Link>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <Link to="/patient/doctor-profile">Dr. John Doe</Link>
                        </h4>
                        <p>MBBS, Dentist</p>
                      </div>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <i className="fas fa-circle-check" />
                        <Link to="/doctor/profile-setting">Edit</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body booking-list-body">
                  <div className="booking-list">
                    <div className="booking-date-list">
                      <ul>
                        <li>
                          Booking Date: <span>Sun, 30 Aug 2022</span>
                        </li>
                        <li>
                          Booking Time: <span>10.00AM to 11:00AM</span>
                        </li>
                      </ul>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <Link to="/patient/booking1">Edit</Link>
                      </p>
                    </div>
                  </div>
                  <div className="booking-list">
                    <div className="booking-date-list">
                      <ul>
                        <li>
                          Consultation Type:{" "}
                          <span>
                            <i className="feather-video" /> Video Consulting
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <Link to="/consultation">Edit</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body booking-list-body">
                  <div className="booking-list">
                    <div className="booking-date-list consultation-date-list">
                      <ul>
                        <li>
                          Consultation Fee: <span>$150.00</span>
                        </li>
                        <li>
                          Booking Fee: <span>$8.00</span>
                        </li>
                        <li>
                          Tax: <span>$5.00</span>
                        </li>
                        <li>
                          <span className="total-amount" />
                          Total <span>$163.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-btn proceed-btn">
                <Link
                  to="/bookingsuccess"
                  className="btn btn-primary prime-btn"
                >
                  Proceed to Pay $163.00
                </Link>
              </div>
            </div>
          </div>
          {/* /Payment */}
        </div>
      </div>
      {/* /Page Content */}
      {/* Cursor */}
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
      {/* /Cursor */}
    </div>
  );
};

export default Payment;
