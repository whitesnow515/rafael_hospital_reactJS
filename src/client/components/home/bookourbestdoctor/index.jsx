import React from "react";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
} from "./img.jsx";
//slider
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeBookDoctor = () => {
  const settings = {
    width: 400,
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "0px",
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="section section-doctor">
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2>Book Our Best Doctor</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="doctor-slider slider">
              <Slider {...settings}>
                <div>
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG01}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Ruby Perrin</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <span className="d-inline-block average-rating ms-1">
                          (17)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG02}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Darren Elder</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (35)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG03}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Deborah Angel</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DNB - Cardiology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (27)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG04}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Sofia Brient</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MS - General Surgery, MCh - Urology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (4)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG05}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">
                          Marvin Campbell
                        </Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Ophthalmology, DNB - Ophthalmology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (66)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Michigan, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $700{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG06}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">
                          Katharine Berthold
                        </Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (52)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG07}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Linda Tobin</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DM - Neurology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (43)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Kansas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Doctor Widget */}
                {/* Doctor Widget */}
                <div>
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={IMG08}
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        {" "}
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Paul Richard</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Dermatology , Venereology &amp; Lepros
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star filled" />
                        &nbsp;
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> California,
                          USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn">
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          {" "}
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Doctor Widget */}
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBookDoctor;
