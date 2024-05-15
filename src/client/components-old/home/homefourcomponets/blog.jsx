import React from "react";
import { Link } from "react-router-dom";
import { Shape1, Shape2, Shape3 } from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
function Blog() {
  return (
    <section className="latest-blog">
      <div className="container">
        <div className="section-header-three text-center">
          <h2>Our Latest Blogs</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
            <div className="blog-wrap">
              <div className="image-holder">
                <Link to="/blog/blog-details">
                  <img className="img-fluid" src={Shape1} alt="Post Image" />
                </Link>
              </div>
              <div className="blog-wrap-body">
                <h3>
                  <Link to="/blog/blog-details">
                    In this hospital there are special surgeons
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et..
                </p>
                <div className="blog-footer">
                  <div className="row row-sm align-items-center">
                    <div className="col-6 text-left">
                      <Link
                        to="/blog/blog-details"
                        className="read-txt"
                        tabIndex={0}>
                        View Blog <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="#" className="cal-txt" tabIndex={0}>
                        <i className="far fa-calendar-alt" /> Jan 03, 2020
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
            <div className="blog-wrap">
              <div className="image-holder">
                <Link to="/blog/blog-details">
                  <img className="img-fluid" src={Shape2} alt="Post Image" />
                </Link>
              </div>
              <div className="blog-wrap-body">
                <h3>
                  <Link to="/blog/blog-details">
                    World AIDS Day, designated on 1 December
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et..
                </p>
                <div className="blog-footer">
                  <div className="row row-sm align-items-center">
                    <div className="col-6 text-left">
                      <Link
                        to="/blog/blog-details"
                        className="read-txt"
                        tabIndex={0}>
                        View Blog <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="#" className="cal-txt" tabIndex={0}>
                        <i className="far fa-calendar-alt" /> Jan 03, 2020
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 aos" data-aos="fade-up">
            <div className="blog-wrap">
              <div className="image-holder">
                <Link to="/blog/blog-details">
                  <img className="img-fluid" src={Shape3} alt="Post Image" />
                </Link>
              </div>
              <div className="blog-wrap-body">
                <h3>
                  <Link to="/blog/blog-details">
                    More then 80 clinical trials launch to test coronavirus
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et..
                </p>
                <div className="blog-footer">
                  <div className="row row-sm align-items-center">
                    <div className="col-6 text-left">
                      <Link
                        to="/blog/blog-details"
                        className="read-txt"
                        tabIndex={0}>
                        View Blog <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="#" className="cal-txt" tabIndex={0}>
                        <i className="far fa-calendar-alt" /> Jan 03, 2020
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
