import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { maintenance } from "../../imagepath";

const Maintenance = (props) => {
  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Maintenance</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Maintenance
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Maintenance */}
      <section className="error-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="error-info">
                <div className="error-img">
                  <img src={maintenance} className="img-fluid" alt="" />
                </div>
                <div className="error-content">
                  <h2>We are Under Maintenance.</h2>
                  <p>Will be Back Soon!</p>
                  <Link to="/index" className="btn btn-primary prime-btn">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Maintenance */}

      <Footer {...props} />
    </>
  );
};

export default Maintenance;
