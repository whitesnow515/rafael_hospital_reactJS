import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { error404 } from "../../imagepath";

const Error404 = (props) => {
  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Error 404</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Error 404
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Error 404 */}
      <section className="error-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="error-info">
                <div className="error-404-img">
                  <img src={error404} className="img-fluid" alt="" />
                  <div className="error-content error-404-content">
                    <h2>Oops! That Page Can’t Be Found.</h2>
                    <p>The page you are looking for was never existed.</p>
                    <Link to="/index" className="btn btn-primary prime-btn">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Error 404 */}
      <Footer {...props} />
    </>
  );
};

export default Error404;
