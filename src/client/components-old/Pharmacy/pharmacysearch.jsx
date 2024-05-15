import React from "react";
import { Medicalimg1, Medicalimg2, Medicalimg3 } from "./image";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Header from "../header";
import Footer from "../footer";

const PharmacySearch = (props) => {
  return (
    <div className="main-wrapper">
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Search</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search
                  </li>
                </ol>
              </nav>
            </div>
            {/* <div className="col-md-4 col-12 d-md-block d-none">
							<div className="sort-by">
								<span className="sort-title">Sort by</span>
								<span className="sortby-fliter">
									<select className="select form-select">
										<option>Select</option>
										<option className="sorting">Rating</option>
										<option className="sorting">Popular</option>
										<option className="sorting">Latest</option>
										<option className="sorting">Free</option>
									</select>
								</span>
							</div>
						</div> */}
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Search Filter</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <label>Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Location"
                      />
                    </div>
                    <div className="filter-widget">
                      <h4>Categories</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Popular
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Latest
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Ratings
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Availability
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="gender_type"
                            defaultChecked
                          />
                          <span className="checkmark" /> Open 24 Hrs
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Home Delivery
                        </label>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn w-100">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img1">
                        <Link to="/Pharmacy/pharmacy-details">
                          <img
                            src={Medicalimg1}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name mb-2">
                          <Link to="/Pharmacy/pharmacy-details">
                            Medlife Medical
                          </Link>
                        </h4>
                        <div className="rating mb-2">
                          <span className="badge badge-primary">4.0</span>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating ms-1">
                            (17)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <div className="clini-infos pt-3">
                            <p className="doc-location mb-2">
                              <i className="fas fa-phone-volume me-1" />{" "}
                              320-795-8815
                            </p>
                            <p className="doc-location mb-2 text-ellipse">
                              <i className="fas fa-map-marker-alt me-1" /> 96
                              Red Hawk Road Cyrus, MN 56323{" "}
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" />{" "}
                              Chemists, Surgical Equipment Dealer
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" /> Opens
                              at 08.00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clinic-booking">
                        <Link
                          className="view-pro-btn"
                          to="/Pharmacy/pharmacy-details"
                        >
                          View Details
                        </Link>
                        <Link className="apt-btn" to="/Pharmacy/product-all">
                          Browse Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img1">
                        <Link to="/Pharmacy/pharmacy-details">
                          <img
                            src={Medicalimg2}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name mb-2">
                          <Link to="/Pharmacy/pharmacy-details">
                            PharmaMed Medical
                          </Link>
                        </h4>
                        <div className="rating mb-2">
                          <span className="badge badge-primary">4.0</span>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating ms-1">
                            (17)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <div className="clini-infos pt-3">
                            <p className="doc-location mb-2">
                              <i className="fas fa-phone-volume me-1" />{" "}
                              913-631-2538
                            </p>
                            <p className="doc-location mb-2 text-ellipse">
                              <i className="fas fa-map-marker-alt me-1" /> 3830
                              Poe Lane Kansas City, KS 66216{" "}
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" />{" "}
                              Chemists, Surgical Equipment Dealer
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" /> Opens
                              at 08.00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clinic-booking">
                        <Link
                          className="view-pro-btn"
                          to="/Pharmacy/pharmacy-details"
                        >
                          View Details
                        </Link>
                        <Link className="apt-btn" to="/Pharmacy/product-all">
                          Browse Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img1">
                        <Link to="/Pharmacy/pharmacy-details">
                          <img
                            src={Medicalimg3}
                            className="img-fluid"
                            alt="User Image"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name mb-2">
                          <Link to="/Pharmacy/pharmacy-details">
                            The Pill Club Medical
                          </Link>
                        </h4>
                        <div className="rating mb-2">
                          <span className="badge badge-primary">4.0</span>
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating ms-1">
                            (17)
                          </span>
                        </div>
                        <div className="clinic-details">
                          <div className="clini-infos pt-3">
                            <p className="doc-location mb-2">
                              <i className="fas fa-phone-volume me-1" />{" "}
                              816-270-2336
                            </p>
                            <p className="doc-location mb-2 text-ellipse">
                              <i className="fas fa-map-marker-alt me-1" /> 3849
                              Nutter Street Ferrelview, MO 64163{" "}
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" />{" "}
                              Chemists, Surgical Equipment Dealer
                            </p>
                            <p className="doc-location mb-2">
                              <i className="fas fa-chevron-right me-1" /> Opens
                              at 08.00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clinic-booking">
                        <Link
                          className="view-pro-btn"
                          to="/Pharmacy/pharmacy-details"
                        >
                          View Details
                        </Link>
                        <Link className="apt-btn" to="/Pharmacy/product-all">
                          Browse Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              <div className="load-more text-center">
                <Link className="btn btn-primary btn-md" to="#">
                  Load More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
};

export default PharmacySearch;
