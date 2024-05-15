import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Searchfilter = () => {
  useEffect(() => {
    const handleInputChange = (event) => {
      const min = parseInt(event.target.value.split(",")[0]);
      const max = parseInt(event.target.value.split(",")[1]);

      setMinValue(min);
      setMaxValue(max);
    };

    const priceRange = document.getElementById("price-range");
    const priceRangeMin = document.getElementById("pricerangemin");
    const priceRangeMax = document.getElementById("pricerangemax");

    if (priceRange) {
      priceRangeMin.textContent = 10;
      priceRangeMax.textContent = 10000;

      priceRange.addEventListener("input", handleInputChange);
    }

    return () => {
      if (priceRange) {
        priceRange.removeEventListener("input", handleInputChange);
      }
    };
  }, []);

  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(10000);

  return (
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
                      <input type="checkbox" name="availability" />
                      <span className="checkmark" />
                      Available Today
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="availability" />
                      <span className="checkmark" />
                      Available Tomorrow
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="availability" />
                      <span className="checkmark" />
                      Available in Next 7 Days
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="availability" />
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
              <Link to="#collapsethree" data-bs-toggle="collapse">
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
                    <h6>
                      Price:
                      <span>
                        $<span id="pricerangemin">{minValue}</span>- $
                        <span id="pricerangemax">{maxValue}</span>
                        <input
                          type="range"
                          id="price-range"
                          min={10}
                          max={10000}
                          value={`${minValue},${maxValue}`}
                        />
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
              <Link to="#collapsefour" data-bs-toggle="collapse">
                Speciality
              </Link>
            </h4>
            <div id="collapsefour" className="collapse show">
              <div className="filter-collapse">
                <ul>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="speciality" />
                      <span className="checkmark" />
                      Urology
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="speciality" />
                      <span className="checkmark" />
                      Ophthalmology
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="speciality" />
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
              <Link to="#collapsefive" data-bs-toggle="collapse">
                Experience
              </Link>
            </h4>
            <div id="collapsefive" className=" collapse show">
              <div className="filter-collapse">
                <ul>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="experience" />
                      <span className="checkmark" />
                      1-5 Years
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="experience" />
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
                      <i className="feather-video online-icon" /> Video Call
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="online" />
                      <span className="checkmark" />
                      <i className="feather-mic online-icon" /> Audio Call
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="online" />
                      <span className="checkmark" />
                      <i className="feather-message-square online-icon" /> Chat
                    </label>
                  </li>
                  <li>
                    <label className="custom_check d-inline-flex">
                      <input type="checkbox" name="online" />
                      <span className="checkmark" />
                      <i className="feather-users online-icon" /> Instant
                      Consulting
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
              <Link to="#collapseseven" data-bs-toggle="collapse">
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
                        <span className="rating-count">(40)</span>
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
                        <span className="rating-count">(35)</span>
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
                        <span className="rating-count">(20)</span>
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
                        <span className="rating-count">(10)</span>
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
                        <span className="rating-count">(05)</span>
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
              <Link to="#collapseeight" data-bs-toggle="collapse">
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
                <Link to="#" className="btn btn-outline-primary">
                  Reset
                </Link>
              </div>
            </div>
          </div>
          {/* /Filter Btn */}
        </div>
      </div>
    </div>
  );
};

export default Searchfilter;
