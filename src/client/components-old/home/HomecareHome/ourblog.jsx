import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { blog_18, blog_19, blog_20, blog_bg_14 } from "../../imagepath";
import { Link } from "react-router-dom";

const OurBlog = () => {
  const options = {
    items: 5,
    margin: 30,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <section className="our-blog-fourteen">
      <div className="section-bg">
        <img src={blog_bg_14} alt="Img" />
      </div>
      <div className="container">
        <div className="section-head-fourteen">
          <h2>
            Our <span> Blog </span>
          </h2>
          <p>Our latest articles</p>
        </div>
        <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="false"
            >
              All Blogs
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <button
              className="nav-link"
              id="pills-family-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-family"
              type="button"
              role="tab"
              aria-controls="pills-family"
              aria-selected="true"
            >
              Health and Safety
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={700}
          >
            <button
              className="nav-link"
              id="pills-adult-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-adult"
              type="button"
              role="tab"
              aria-controls="pills-adult"
              aria-selected="false"
            >
              Caregiving
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <button
              className="nav-link"
              id="pills-accident-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-accident"
              type="button"
              role="tab"
              aria-controls="pills-accident"
              aria-selected="false"
            >
              Food{" "}
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            <button
              className="nav-link"
              id="pills-fitness-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-fitness"
              type="button"
              role="tab"
              aria-controls="pills-fitness"
              aria-selected="false"
            >
              Senior Care
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            <button
              className="nav-link"
              id="pills-explore-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-explore"
              type="button"
              role="tab"
              aria-controls="pills-explore"
              aria-selected="false"
            >
              Physiotherapy
            </button>
          </li>
        </ul>
        <div className="tab-content pt-0 dashboard-tab">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-family"
            role="tabpanel"
            aria-labelledby="pills-family-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-adult"
            role="tabpanel"
            aria-labelledby="pills-adult-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-accident"
            role="tabpanel"
            aria-labelledby="pills-accident-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-fitness"
            role="tabpanel"
            aria-labelledby="pills-fitness-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-explore"
            role="tabpanel"
            aria-labelledby="pills-explore-tab"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="blog-slide-fourteen ">
                  <OwlCarousel {...options}>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_19} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Caregiving</h6>
                          <span>06 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Navigating the Transition: A Guide to Choosing the
                            Right Old Age Home
                          </Link>
                        </h4>
                        <p>
                          Explore factors to consider when selecting age home,
                          ensuring a seamless transition for your loved ones.
                          Gain insights into facility options, care services,
                          and creating a supportive environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            850 views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_20} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Physiotherapy</h6>
                          <span>10 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Empowering Aging Bodies: The Impact of Physiotherapy
                            in Old Age Home Wellness
                          </Link>
                        </h4>
                        <p>
                          Discover the transformative effects of physiotherapy
                          in home care, focusing on tailored interventions that
                          address mobility challenges, pain management, and
                          overall physical health for elderly residents.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            4.5k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="blog-grid-fourteen"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="blog-grig-img">
                        <Link to="/blog-details">
                          <img src={blog_18} alt="Img" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <div className="grid-head">
                          <h6>Health and Safety</h6>
                          <span>01 May 2023</span>
                        </div>
                        <h4>
                          <Link to="/blog-details">
                            Adapting Homes for Aging Gracefully: Design Tips for
                            Old Age Comfort
                          </Link>
                        </h4>
                        <p>
                          Explore practical design tips to make living spaces in
                          old age homes adaptable and comfortable, enhancing the
                          quality of life for seniors. Learn about
                          accessibility, safety features, and creating a warm
                          environment.
                        </p>
                        <div className="grid-footer">
                          <span>
                            <i className="feather-eye" />
                            1k views
                          </span>
                          <Link to="/blog-details">
                            Read More
                            <i className="feather-arrow-right-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav-button">
            <Link to="/blog-grid" className="view-all">
              View All Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
