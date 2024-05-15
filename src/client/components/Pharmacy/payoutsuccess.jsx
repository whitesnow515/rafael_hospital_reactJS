import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const PaymentSuccess = (props) => {
  return (
    <div className="main-wrapper">
      <Header {...props} />
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Payment</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Success Card */}
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check" />
                    <h3>Payment Successfully!</h3>
                    <p className="mb-0">Product ID: 245468</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default PaymentSuccess;
