import React from "react";
import { IMG01, IMG02, IMG03, IMG04, IMG07, IMG08 } from "./img";
import { patient, patient1, patient2 } from "../../Pharmacy/image";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body pt-0">
          {/* Tab Menu */}
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="#doc_overview"
                  data-bs-toggle="tab">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_locations"
                  data-bs-toggle="tab">
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_reviews"
                  data-bs-toggle="tab">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_business_hours"
                  data-bs-toggle="tab">
                  Business Hours
                </Link>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu */}
          {/* Tab Content */}
          <div className="tab-content pt-0">
            {/* Overview Content */}
            <div
              role="tabpanel"
              id="doc_overview"
              className="tab-pane fade show active">
              <div className="row">
                <div className="col-md-12 col-lg-9">
                  {/* About Details */}
                  <div className="widget about-widget">
                    <h4 className="widget-title">About Me</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* /About Details */}
                  {/* Education Details */}
                  <div className="widget education-widget">
                    <h4 className="widget-title">Education</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                American Dental Medical University
                              </Link>
                              <div>BDS</div>
                              <span className="time">1998 - 2003</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                American Dental Medical University
                              </Link>
                              <div>MDS</div>
                              <span className="time">2003 - 2005</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Education Details */}
                  {/* Experience Details */}
                  <div className="widget experience-widget">
                    <h4 className="widget-title">Work &amp; Experience</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Glowing Smiles Family Dental Clinic
                              </Link>
                              <span className="time">
                                2010 - Present (5 years)
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Comfort Care Dental Clinic
                              </Link>
                              <span className="time">
                                2007 - 2010 (3 years)
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="#/" className="name">
                                Dream Smile Dental Practice
                              </Link>
                              <span className="time">
                                2005 - 2007 (2 years)
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Experience Details */}
                  {/* Awards Details */}
                  <div className="widget awards-widget">
                    <h4 className="widget-title">Awards</h4>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">July 2019</p>
                              <h4 className="exp-title">Humanitarian Award</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">March 2011</p>
                              <h4 className="exp-title">
                                Certificate for International Volunteer Service
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">May 2008</p>
                              <h4 className="exp-title">
                                The Dental Professional of The Year Award
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Awards Details */}
                  {/* Services List */}
                  <div className="service-list">
                    <h4>Services</h4>
                    <ul className="clearfix">
                      <li>Tooth cleaning </li>
                      <li>Root Canal Therapy</li>
                      <li>Implants</li>
                      <li>Composite Bonding</li>
                      <li>Fissure Sealants</li>
                      <li>Surgical Extractions</li>
                    </ul>
                  </div>
                  {/* /Services List */}
                  {/* Specializations List */}
                  <div className="service-list">
                    <h4>Specializations</h4>
                    <ul className="clearfix">
                      <li>Children Care</li>
                      <li>Dental Care</li>
                      <li>Oral and Maxillofacial Surgery </li>
                      <li>Orthodontist</li>
                      <li>Periodontist</li>
                      <li>Prosthodontics</li>
                    </ul>
                  </div>
                  {/* /Specializations List */}
                </div>
              </div>
            </div>
            {/* /Overview Content */}
            {/* Locations Content */}
            <div role="tabpanel" id="doc_locations" className="tab-pane fade">
              {/* Location List */}
              <div className="location-list">
                <div className="row">
                  {/* Clinic Content */}
                  <div className="col-md-6">
                    <div className="clinic-content">
                      <h4 className="clinic-name">
                        <Link to="#">Smile Cute Dental Care Center</Link>
                      </h4>
                      <p className="doc-speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (4)
                        </span>
                      </div>
                      <div className="clinic-details mb-0">
                        <h5 className="clinic-direction">
                          {" "}
                          <i className="fas fa-map-marker-alt" /> 2286 Sundown
                          Lane, Austin, Texas 78749, USA <br />
                          <Link to="#;">Get Directions</Link>
                        </h5>
                        <ul>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG07} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG08} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG07} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG01} alt="Feature Image" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Content */}
                  {/* Clinic Timing */}
                  <div className="col-md-4">
                    <div className="clinic-timing">
                      <div>
                        <p className="timings-days">
                          <span> Mon - Sat </span>
                        </p>
                        <p className="timings-times">
                          <span>10:00 AM - 2:00 PM</span>
                          <span>4:00 PM - 9:00 PM</span>
                        </p>
                      </div>
                      <div>
                        <p className="timings-days">
                          <span>Sun</span>
                        </p>
                        <p className="timings-times">
                          <span>10:00 AM - 2:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Timing */}
                  <div className="col-md-2">
                    <div className="consult-price">$250</div>
                  </div>
                </div>
              </div>
              {/* /Location List */}
              {/* Location List */}
              <div className="location-list">
                <div className="row">
                  {/* Clinic Content */}
                  <div className="col-md-6">
                    <div className="clinic-content">
                      <h4 className="clinic-name">
                        <Link to="#">The Family Dentistry Clinic</Link>
                      </h4>
                      <p className="doc-speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (4)
                        </span>
                      </div>
                      <div className="clinic-details mb-0">
                        <p className="clinic-direction">
                          {" "}
                          <i className="fas fa-map-marker-alt" /> 2883
                          University Street, Seattle, Texas Washington, 98155{" "}
                          <br />
                          <Link to="#;">Get Directions</Link>
                        </p>
                        <ul>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG01} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG02} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG03} alt="Feature Image" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-fancybox="gallery2">
                              <img src={IMG04} alt="Feature Image" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Content */}
                  {/* Clinic Timing */}
                  <div className="col-md-4">
                    <div className="clinic-timing">
                      <div>
                        <p className="timings-days">
                          <span> Tue - Fri </span>
                        </p>
                        <p className="timings-times">
                          <span>11:00 AM - 1:00 PM</span>
                          <span>6:00 PM - 11:00 PM</span>
                        </p>
                      </div>
                      <div>
                        <p className="timings-days">
                          <span>Sat - Sun</span>
                        </p>
                        <p className="timings-times">
                          <span>8:00 AM - 10:00 AM</span>
                          <span>3:00 PM - 7:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Timing */}
                  <div className="col-md-2">
                    <div className="consult-price">$350</div>
                  </div>
                </div>
              </div>
              {/* /Location List */}
            </div>
            {/* /Locations Content */}
            {/* Reviews Content */}
            <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
              {/* Review Listing */}
              <div className="widget review-listing">
                <ul className="comments-list">
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar avatar-sm rounded-circle"
                        alt="User Image"
                        src={patient}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Richard Wilson</span>
                          <span className="comment-date">
                            Reviewed 2 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up" /> I recommend the
                          doctor
                        </p>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#">
                            <i className="fas fa-reply" /> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </Link>
                            <Link to="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Comment Reply */}
                    <ul className="comments-reply">
                      <li>
                        <div className="comment">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            alt="User Image"
                            src={patient1}
                          />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Charlene Reed
                              </span>
                              <span className="comment-date">
                                Reviewed 3 Days ago
                              </span>
                              <div className="review-count rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam. Curabitur non nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <Link className="comment-btn" to="#">
                                <i className="fas fa-reply" /> Reply
                              </Link>
                              <p className="recommend-btn">
                                <span>Recommend?</span>
                                <Link to="#" className="like-btn">
                                  <i className="far fa-thumbs-up" /> Yes
                                </Link>
                                <Link to="#" className="dislike-btn">
                                  <i className="far fa-thumbs-down" /> No
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* /Comment Reply */}
                  </li>
                  {/* /Comment List */}
                  {/* Comment List */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar avatar-sm rounded-circle"
                        alt="User Image"
                        src={patient2}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Travis Trimble</span>
                          <span className="comment-date">
                            Reviewed 4 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#">
                            <i className="fas fa-reply" /> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#" className="like-btn">
                              <i className="far fa-thumbs-up" /> Yes
                            </Link>
                            <Link to="#" className="dislike-btn">
                              <i className="far fa-thumbs-down" /> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Comment List */}
                </ul>
                {/* Show All */}
                <div className="all-feedback text-center">
                  <Link to="#" className="btn btn-primary btn-sm">
                    Show all feedback <strong>(167)</strong>
                  </Link>
                </div>
                {/* /Show All */}
              </div>
              {/* /Review Listing */}
              {/* Write Review */}
              <div className="write-review">
                <h4>
                  Write a review for <strong>Dr. Darren Elder</strong>
                </h4>
                {/* Write Review Form */}
                <form>
                  <div className="form-group">
                    <label>Review</label>
                    <div className="star-rating">
                      <input
                        id="star-5"
                        type="radio"
                        name="rating"
                        defaultValue="star-5"
                      />
                      <label htmlFor="star-5" title="5 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-4"
                        type="radio"
                        name="rating"
                        defaultValue="star-4"
                      />
                      <label htmlFor="star-4" title="4 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-3"
                        type="radio"
                        name="rating"
                        defaultValue="star-3"
                      />
                      <label htmlFor="star-3" title="3 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-2"
                        type="radio"
                        name="rating"
                        defaultValue="star-2"
                      />
                      <label htmlFor="star-2" title="2 stars">
                        <i className="active fa fa-star" />
                      </label>
                      <input
                        id="star-1"
                        type="radio"
                        name="rating"
                        defaultValue="star-1"
                      />
                      <label htmlFor="star-1" title="1 star">
                        <i className="active fa fa-star" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your review</label>
                    <textarea
                      id="review_desc"
                      maxLength={100}
                      className="form-control"
                      defaultValue={""}
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <small className="text-muted">
                        <span id="chars">100</span> characters remaining
                      </small>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <div className="terms-accept">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="terms_accept" />
                        <label htmlFor="terms_accept">
                          I have read and accept{" "}
                          <Link to="#">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn">
                      Add Review
                    </button>
                  </div>
                </form>
                {/* /Write Review Form */}
              </div>
              {/* /Write Review */}
            </div>
            {/* /Reviews Content */}
            {/* Business Hours Content */}
            <div
              role="tabpanel"
              id="doc_business_hours"
              className="tab-pane fade">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  {/* Business Hours Widget */}
                  <div className="widget business-widget">
                    <div className="widget-content">
                      <div className="listing-hours">
                        <div className="listing-day current">
                          <div className="day">
                            Today <span>5 Nov 2019</span>
                          </div>
                          <div className="time-items">
                            <span className="open-status">
                              <span className="badge bg-success-light">
                                Open Now
                              </span>
                            </span>
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Monday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Tuesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Wednesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Thursday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Friday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Saturday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day closed">
                          <div className="day">Sunday</div>
                          <div className="time-items">
                            <span className="time">
                              <span className="badge bg-danger-light">
                                Closed
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Business Hours Widget */}
                </div>
              </div>
            </div>
            {/* /Business Hours Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
