import React, { useEffect, useState } from "react";
import Header from "../../header";
// import Searchfilter from "./searchFilter";
import StickyBox from "react-sticky-box";
import Doctors from "./doctors";
import Footer from "../../footer";
import { Link } from "react-router-dom";
// import Slider from "react-slider";

const SearchDoctor2 = (props) => {
  // let pathname = props.location.pathname;

  // if (props.location.pathname === "/patient/search-doctor2") {
  //   require("../../../assets/css/feather.css");
  // }
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(5000);

  useEffect(() => {
    if (document.getElementById("price-range")) {
      setMinValue(10);
      setMaxValue(10000);

      const slider = document.getElementById("price-range");
      slider.addEventListener("input", handleSliderChange);

      return () => {
        slider.removeEventListener("input", handleSliderChange);
      };
    }
  }, []);

  const handleSliderChange = (event) => {
    const min = parseInt(event.target.value.split(",")[0]);
    const max = parseInt(event.target.value.split(",")[1]);

    setMinValue(min);
    setMaxValue(max);
  };
  return (
    <div className="main-wrapper">
      <Header {...props} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Search Doctors</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Search Doctors
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      <div className="doctor-content content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 map-view">
              <div className="row">
                <div className="col-lg-3  theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>
                      <div className="filter-contents">
                        <div className="filter-header">
                          <h4 className="filter-title">Filter</h4>
                        </div>
                        <div className="filter-details">
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link to="#collapseone" data-bs-toggle="collapse">
                                Gender
                              </Link>
                            </h4>
                            <div id="collapseone" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="gender" />
                                      <span className="checkmark" />
                                      Male Gender
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="gender" />
                                      <span className="checkmark" />
                                      Female Gender
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link to="#collapsetwo" data-bs-toggle="collapse">
                                Availability
                              </Link>
                            </h4>
                            <div id="collapsetwo" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="availability"
                                      />
                                      <span className="checkmark" />
                                      Available Today
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="availability"
                                      />
                                      <span className="checkmark" />
                                      Available Tomorrow
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="availability"
                                      />
                                      <span className="checkmark" />
                                      Available in Next 7 Days
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="availability"
                                      />
                                      <span className="checkmark" />
                                      Available in Next 30 Days
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsethree"
                                data-bs-toggle="collapse"
                              >
                                Consultation Fee
                              </Link>
                            </h4>
                            <div id="collapsethree" className="collapse show">
                              <div className="filter-collapse">
                                <div className="filter-content filter-content-slider">
                                  <p>
                                    $100 <span>$10000</span>
                                  </p>
                                  <div className="slider-wrapper">
                                    <div id="price-range" />
                                  </div>
                                  <div className="price-wrapper">
                                    <input
                                      style={{ width: "100%" }}
                                      id="price-range"
                                      type="range"
                                      min={10}
                                      max={10000}
                                      values={`${minValue},${maxValue}`}
                                      onChange={handleSliderChange}
                                    />
                                    <h6>
                                      Price:
                                      <span>
                                        $
                                        <span id="pricerangemin">
                                          {minValue}
                                        </span>
                                        - $
                                        <span id="pricerangemax">
                                          {maxValue}
                                        </span>
                                      </span>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefour"
                                data-bs-toggle="collapse"
                              >
                                Speciality
                              </Link>
                            </h4>
                            <div id="collapsefour" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Urology
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Ophthalmology
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Cardiology
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefive"
                                data-bs-toggle="collapse"
                              >
                                Experience
                              </Link>
                            </h4>
                            <div id="collapsefive" className=" collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="experience"
                                      />
                                      <span className="checkmark" />
                                      1-5 Years
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="experience"
                                      />
                                      <span className="checkmark" />
                                      5+ Years
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link to="#collapsesix" data-bs-toggle="collapse">
                                Online Consultation
                              </Link>
                            </h4>
                            <div id="collapsesix" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <i className="feather-video online-icon" />{" "}
                                      Video Call
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <i className="feather-mic online-icon" />{" "}
                                      Audio Call
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <i className="feather-message-square online-icon" />{" "}
                                      Chat
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <i className="feather-users online-icon" />{" "}
                                      Instant Consulting
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapseseven"
                                data-bs-toggle="collapse"
                              >
                                By Rating
                              </Link>
                            </h4>
                            <div id="collapseseven" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <span className="rating-count">
                                          (40)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (35)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (20)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (10)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (05)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapseeight"
                                data-bs-toggle="collapse"
                              >
                                Languages
                              </Link>
                            </h4>
                            <div id="collapseeight" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="language" />
                                      <span className="checkmark" />
                                      English
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="language" />
                                      <span className="checkmark" />
                                      French
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="language" />
                                      <span className="checkmark" />
                                      Spanish
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input type="checkbox" name="language" />
                                      <span className="checkmark" />
                                      German
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Btn */}
                          <div className="filter-btn apply-btn">
                            <div className="row">
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary">
                                  Apply
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-primary"
                                >
                                  Reset
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Btn */}
                        </div>
                      </div>
                    </div>
                  </StickyBox>
                </div>

                <div className="col-lg-9">
                  <Doctors />
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

export default SearchDoctor2;
