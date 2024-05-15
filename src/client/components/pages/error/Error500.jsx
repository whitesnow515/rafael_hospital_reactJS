import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { error500 } from "../../imagepath";

const Error500 = (props) => {
  return (
    <div>
      <>
        <Header {...props} />
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar-two">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">Error 500</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/index">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Error 500
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Error 500 */}
          <section className="error-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                  <div className="error-info">
                    <div className="error-img">
                      <img src={error500} className="img-fluid" alt="" />
                    </div>
                    <div className="error-content">
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
          </section>
          {/* /Error 500 */}
        </>

        <Footer {...props} />
      </>
    </div>
  );
};

export default Error500;
