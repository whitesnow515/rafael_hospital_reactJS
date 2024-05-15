/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  eye_blog_01,
  eye_blog_02,
  eye_blog_03,
  eye_blog_04,
  eye_icon,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
function BlogSectionHome6() {
  const doctersettings = {
    items: 4,
    loop: true,
    margin: 15,
    dots: true,
    nav: true,
    //   navContainer: '.slide-nav-2',
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  };
  return (
    <>
      <section className="our-blog-section eye-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <img src={eye_icon} alt="" className="img-fluid" />
                <h2>
                  <span>Blog</span> Post
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
          </div>
          <div className="eye-blogslider owl-them aos" data-aos="fade-up">
            <OwlCarousel {...doctersettings}>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={eye_blog_01}
                        alt=""
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <div className="blog-name">
                        <img
                          src={doctor_thumb_01}
                          alt=""
                          className="img-fluid"
                        />
                        <div>
                          <Link to="#">Deirdre Carolyn</Link>
                          <p>04-April-2023</p>
                        </div>
                      </div>
                      <span className="blog-cat">Orthoptics</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        Lorem Ipsum is simply dummy text of the printing?
                      </Link>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content
                    </p>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      View Blog
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={eye_blog_02}
                        alt=""
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <div className="blog-name">
                        <img
                          src={doctor_thumb_03}
                          alt=""
                          className="img-fluid"
                        />
                        <div>
                          <Link to="#">Jessica</Link>
                          <p>03-April-2023</p>
                        </div>
                      </div>
                      <span className="blog-cat">Glaucoma</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        It is a long established fact that a reader will be
                        distracted
                      </Link>
                    </h4>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      View Blog
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={eye_blog_03}
                        alt=""
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <div className="blog-name">
                        <img
                          src={doctor_thumb_02}
                          alt=""
                          className="img-fluid"
                        />
                        <div>
                          <Link to="#">Christopher</Link>
                          <p>06-April-2023</p>
                        </div>
                      </div>
                      <span className="blog-cat">Corneal Ulcer </span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text
                      </Link>
                    </h4>
                    <p>It has roots in a piece of classical Latin literature</p>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      View Blog
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={eye_blog_04}
                        alt=""
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <div className="blog-name">
                        <img
                          src={doctor_thumb_04}
                          alt=""
                          className="img-fluid"
                        />
                        <div>
                          <Link to="#">Lily Olivia</Link>
                          <p>04-April-2023</p>
                        </div>
                      </div>
                      <span className="blog-cat">Keratoconus</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <Link to="/blog/blog-details">
                      <h4>There are many variations of passages</h4>
                    </Link>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything
                    </p>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      View Blog
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <img
                        src={eye_blog_04}
                        alt=""
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <div className="blog-name">
                        <img
                          src={doctor_thumb_05}
                          alt=""
                          className="img-fluid"
                        />
                        <div>
                          <Link to="#">John Doe</Link>
                          <p>01-April-2023</p>
                        </div>
                      </div>
                      <span className="blog-cat">Orthoptics</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <Link to="/blog/blog-details">
                      <h4>There are many variations of passages</h4>
                    </Link>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything
                    </p>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      View Blog
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSectionHome6;
