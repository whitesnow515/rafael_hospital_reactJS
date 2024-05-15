import React from "react";
import {
  admin_icon,
  app_icon_store,
  blog_21,
  blog_22,
  blog_23,
  comment_icon,
  google_icon_play,
  logo,
  mobile_img,
  partners_10,
  partners_11,
  partners_12,
  partners_7,
  partners_8,
  partners_9,
  payment_icon_01,
  payment_icon_02,
  payment_icon_03,
  payment_icon_04,
  product_19,
  product_20,
  product_21,
  product_22,
  product_23,
  product_24,
  product_25,
  product_26,
  product_27,
  product_28,
  product_29,
  product_30,
  product_31,
  product_32,
  product_33,
  product_34,
  product_icon_01,
  product_icon_02,
  product_icon_03,
  product_icon_04,
  review_img,
  review_img_01,
  review_img_02,
  review_img_03,
  review_img_04,
  scan_img,
  tag_icon,
} from "../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const PharmacyFeatured = () => {
  const options = {
    items: 6,
    margin: 30,
    dots: false,
    smartSpeed: 2000,

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 6,
      },
    },
  };
  return (
    <>
      <section className="section products-sec">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Featured Products</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/product-all">
                    See All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_19} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">Echinacea</Link>
                  </h4>
                  <span className="badge">100 ml</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $150<span>$199</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_20} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Women’s Care</h6>
                  <h4>
                    <Link to="/product-all">Diclofenac</Link>
                  </h4>
                  <span className="badge">50 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $200<span>$300</span>
                      </h5>
                    </div>
                    <div className="cart-count">
                      <div className="custom-increment cart">
                        <div className="input-group1">
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-left-minus btn btn-danger btn-number"
                              data-type="minus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-minus" />
                              </span>
                            </button>
                          </span>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="input-number"
                            defaultValue={10}
                          />
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-right-plus btn btn-success btn-number"
                              data-type="plus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-plus" />
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <Link to className="cart-icon check-icon">
                        <i className="feather-check" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_21} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Weight</h6>
                  <h4>
                    <Link to="/product-all">Colchicine</Link>
                  </h4>
                  <span className="badge">100 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $370<span>$450</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_22} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Oral Care</h6>
                  <h4>
                    <Link to="/product-all">Clindamycin Gel</Link>
                  </h4>
                  <span className="badge">10 g</span>
                  <span className="sticker">5% OFF</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $430<span>$120</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_23} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Women’s Care</h6>
                  <h4>
                    <Link to="/product-all">Aspinin-C</Link>
                  </h4>
                  <span className="badge">70 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $200<span>$300</span>
                      </h5>
                    </div>
                    <div className="cart-count">
                      <div className="custom-increment cart">
                        <div className="input-group1">
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-left-minus2 btn btn-danger btn-number"
                              data-type="minus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-minus" />
                              </span>
                            </button>
                          </span>
                          <input
                            type="text"
                            id="quantity2"
                            name="quantity2"
                            className="input-number"
                            defaultValue={10}
                          />
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-right-plus2 btn btn-success btn-number"
                              data-type="plus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-plus" />
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <Link to className="cart-icon check-icon">
                        <i className="feather-check" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_24} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">L-Carnitine</Link>
                  </h4>
                  <span className="badge">100 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $130<span>$150</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_25} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">DyN.O Pre Workout</Link>
                  </h4>
                  <span className="badge">250 kg</span>
                  <span className="sticker">5% OFF</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $230<span>$250</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_26} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Baby Care</h6>
                  <h4>
                    <Link to="/product-all">Tabcin</Link>
                  </h4>
                  <span className="badge">60 pillsl</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $180<span>$400</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-sec recent-product-sec">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Recent Products</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/product-all">
                    See All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_27} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">Gemgex</Link>
                  </h4>
                  <span className="badge">07 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $100<span>$150</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_28} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Weight</h6>
                  <h4>
                    <Link to="/product-all">Tri-Amino</Link>
                  </h4>
                  <span className="badge">120 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $120<span>$150</span>
                      </h5>
                    </div>
                    <div className="cart-count">
                      <div className="custom-increment cart">
                        <div className="input-group1">
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-left-minus3 btn btn-danger btn-number"
                              data-type="minus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-minus" />
                              </span>
                            </button>
                          </span>
                          <input
                            type="text"
                            id="quantity3"
                            name="quantity3"
                            className="input-number"
                            defaultValue={10}
                          />
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-right-plus3 btn btn-success btn-number"
                              data-type="plus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-plus" />
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <Link to="/product-all" className="cart-icon check-icon">
                        <i className="feather-check" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_29} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">Vitamin C+</Link>
                  </h4>
                  <span className="badge">40 pills</span>
                  <span className="sticker">5% OFF</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $250<span>$350</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_30} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Weight</h6>
                  <h4>
                    <Link to="/product-all">Gravol Ginger</Link>
                  </h4>
                  <span className="badge">20 pills</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $279<span>$300</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 d-flex aos"
              data-aos="fade-up"
            >
              <div className="products-card w-100">
                <div className="product-icon">
                  <span>
                    <img src={product_icon_01} alt="" />
                  </span>
                </div>
                <div className="product-content">
                  <h4>Free Shipping</h4>
                  <p>Free shipping with discount</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 d-flex aos"
              data-aos="fade-up"
            >
              <div className="products-card w-100">
                <div className="product-icon">
                  <span>
                    <img src={product_icon_02} alt="" />
                  </span>
                </div>
                <div className="product-content">
                  <h4>Great Support 24/7</h4>
                  <p>Instant access to Contact</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 d-flex aos"
              data-aos="fade-up"
            >
              <div className="products-card w-100">
                <div className="product-icon">
                  <span>
                    <img src={product_icon_03} alt="" />
                  </span>
                </div>
                <div className="product-content">
                  <h4>100% Sucure Payment</h4>
                  <p>We ensure your money is save</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 d-flex aos"
              data-aos="fade-up"
            >
              <div className="products-card w-100">
                <div className="product-icon">
                  <span>
                    <img src={product_icon_04} alt="" />
                  </span>
                </div>
                <div className="product-content">
                  <h4>Money-Back Guarantee</h4>
                  <p>30 days money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-coupon-sec">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Save more with coupons</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/product-all">
                    See All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 aos" data-aos="fade-up">
              <div className="coupon-card">
                <div className="coupon-info">
                  <h4>Flat $200 Off</h4>
                  <p>On above $2000</p>
                </div>
                <div className="coupon-code">
                  <span>Code200</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 aos" data-aos="fade-up">
              <div className="coupon-card">
                <div className="coupon-info">
                  <h4>Flat $250 Off</h4>
                  <p>On above $2500</p>
                </div>
                <div className="coupon-code">
                  <span>Code250</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 aos" data-aos="fade-up">
              <div className="coupon-card">
                <div className="coupon-info">
                  <h4>Flat $300 Off</h4>
                  <p>On above $3000</p>
                </div>
                <div className="coupon-code">
                  <span>Code300</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 aos" data-aos="fade-up">
              <div className="coupon-card">
                <div className="coupon-info">
                  <h4>Flat $350 Off</h4>
                  <p>On above $3500</p>
                </div>
                <div className="coupon-code">
                  <span>Code350</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-sec recent-product-sec">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Best Weekly Selling Products</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/product-all">
                    See All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_31} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Women’s Care</h6>
                  <h4>
                    <Link to="/product-all">Embryolisse</Link>
                  </h4>
                  <h5 className="delivery">
                    Delivery : <span>Tomorrow</span>
                  </h5>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $200<span>$300</span>
                      </h5>
                    </div>
                    <div className="cart-count">
                      <div className="custom-increment cart">
                        <div className="input-group1">
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-left-minus4 btn btn-danger btn-number"
                              data-type="minus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-minus" />
                              </span>
                            </button>
                          </span>
                          <input
                            type="text"
                            id="quantity4"
                            name="quantity4"
                            className="input-number"
                            defaultValue={10}
                          />
                          <span className="input-group-btn">
                            <button
                              type="button"
                              className="quantity-right-plus4 btn btn-success btn-number"
                              data-type="plus"
                              data-field
                            >
                              <span>
                                <i className="fas fa-plus" />
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <Link to="/product-all" className="cart-icon check-icon">
                        <i className="feather-check" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_32} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Oral Care</h6>
                  <h4>
                    <Link to="/product-all">Berocca</Link>
                  </h4>
                  <h5 className="delivery">
                    Delivery : <span>2 day</span>
                  </h5>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $150<span>$199</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_33} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">Acteane</Link>
                  </h4>
                  <h5 className="delivery">
                    Delivery : <span>1 day</span>
                  </h5>
                  <span className="sticker">5% OFF</span>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $250<span>$350</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
              <div className="products-card">
                <div className="product-card-img">
                  <Link to="/product-all">
                    <img src={product_34} alt="" />
                  </Link>
                </div>
                <div className="product-content">
                  <h6>Home &amp; Health</h6>
                  <h4>
                    <Link to="/product-all">Lactoferrin Plus SB</Link>
                  </h4>
                  <h5 className="delivery">
                    Delivery : <span>4 days</span>
                  </h5>
                  <div className="product-cart">
                    <div className="cart-price">
                      <h5>
                        $279<span>$300</span>
                      </h5>
                    </div>
                    <Link to="/product-all" className="cart-icon">
                      <i className="feather-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex aos" data-aos="fade-up">
              <div className="best-sell-box w-100">
                <h5>Get Flat 5% Simpl Cashback of up to Rs. 500*!..</h5>
                <p>
                  Get Flat 5% Simpl Cashback of up to Rs. 500 on your FIRST-EVER
                  payment via Simpl for ANY purchases* ..
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex aos" data-aos="fade-up">
              <div className="best-sell-box box-two w-100">
                <h5>
                  Get assured Cashback of up to Rs. 500* + Earn up to 8X
                  rewards*..
                </h5>
                <p>
                  ALL users get assured Cashback of max. Rs. 500 on ONLY one
                  transaction of min. Rs 999 Up to 8X Rewar..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trusted-section">
        <div className="container">
          <div className="trusted-info">
            <div className="row align-items-center">
              <div
                className="col-lg-7 col-md-12 trusted-img aos"
                data-aos="fade-up"
              >
                <img
                  src={mobile_img}
                  className="img-fluid"
                  alt="Trusted Img"
                />
              </div>
              <div className="col-lg-5 col-md-12 aos" data-aos="fade-up">
                <div className="trusted-content">
                  <h4>100% Trusted Medical Store</h4>
                  <div className="trusted-text">
                    <h6>
                      <i className="fa-solid fa-circle-check" /> Healthy life.
                    </h6>
                    <p>
                      At Doccure, we believe that true well-being extends beyond
                      the prescription counter. Our commitment to your health
                      goes beyond medications, a dedicated space designed to
                      empower you on your journey to a healthier and happier
                      life.
                    </p>
                  </div>
                  <div className="trusted-text">
                    <h6>
                      <i className="fa-solid fa-circle-check" /> Every day
                      quality products for you.
                    </h6>
                    <p>
                      At Doccure, we believe that true well-being extends beyond
                      the prescription counter. Our commitment to your health
                      goes beyond medications, a dedicated space designed to
                      empower you on your journey to a healthier and happier
                      life.
                    </p>
                  </div>
                  <div className="trusted-btn">
                    <Link to="/product-all" className="btn">
                      Shop Now <i className="feather-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partners-info aos" data-aos="fade-up">
            <ul className=" partners-slider d-flex">
              <OwlCarousel {...options}>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_7}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_8}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_9}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_10}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_11}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_12}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_7}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_8}
                      alt="Partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="img-fluid"
                      src={partners_9}
                      alt="Partners"
                    />
                  </Link>
                </li>
              </OwlCarousel>
            </ul>
          </div>
        </div>
      </section>

      <section className="section review-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 review-big-img aos"
              data-aos="fade-up"
            >
              <img src={review_img} className="img-fluid" alt="Review Img" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="review-info">
                <div className="review-grid aos" data-aos="fade-up">
                  <div className="review-img">
                    <img src={review_img_01} alt="Review Img" />
                  </div>
                  <div className="review-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      The Doccure has been a game-changer for me. Ordering my
                      medications is a breeze, and the detailed information
                      provided helps me make informed decisions about my health.
                    </p>
                    <h5>Claudia Cram</h5>
                  </div>
                </div>
                <div className="review-grid aos" data-aos="fade-up">
                  <div className="review-img">
                    <img src={review_img_02} alt="Review Img" />
                  </div>
                  <div className="review-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      The convenience of having my medications delivered to my
                      doorstep is unparalleled. The Doccure security measures
                      instill confidence in every transaction.
                    </p>
                    <h5>Andrew Morgan</h5>
                  </div>
                </div>
                <div className="review-grid aos" data-aos="fade-up">
                  <div className="review-img">
                    <img src={review_img_03} alt="Review Img" />
                  </div>
                  <div className="review-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      As a busy professional, the Doccure efficient service has
                      saved me countless hours. The ability to chat with a
                      pharmacist online for quick advice is fantastic, making it
                      so much easier to manage my health.
                    </p>
                    <h5>Margaret Sara</h5>
                  </div>
                </div>
                <div className="review-grid aos" data-aos="fade-up">
                  <div className="review-img">
                    <img src={review_img_04} alt="Review Img" />
                  </div>
                  <div className="review-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      I can't thank the Doccure enough for its user-friendly
                      interface and quick prescription refills. The automatic
                      reminders for medication schedules have been a lifesaver,
                      ensuring I never miss a dose.
                    </p>
                    <h5>Kevin Stoll</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Latest News</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/blog-details">
                    View All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="news-grid flex-fill">
                <div className="news-image">
                  <Link to="/blog-details">
                    <img src={blog_21} className="img-fluid" alt="Post Image" />
                  </Link>
                  <div className="news-date">
                    <h5>18</h5>
                    <p>Nov</p>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="nav">
                    <li>
                      <p>
                        <img src={tag_icon} alt="Icon" />
                        Food
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={admin_icon}
                          alt="Icon"
                        />
                        By Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={comment_icon}
                          alt="Icon"
                        />
                        65 Comments
                      </p>
                    </li>
                  </ul>
                  <h3 className="news-title">
                    <Link to="/blog-details">
                      Revolutionizing Patient Care: The Future of Online
                      Pharmacies
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="news-grid flex-fill">
                <div className="news-image">
                  <Link to="/blog-details">
                    <img src={blog_22} className="img-fluid" alt="Post Image" />
                  </Link>
                  <div className="news-date">
                    <h5>19</h5>
                    <p>Nov</p>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="nav">
                    <li>
                      <p>
                        <img src={tag_icon} alt="Icon" />
                        Food
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={admin_icon}
                          alt="Icon"
                        />
                        By Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={comment_icon}
                          alt="Icon"
                        />
                        48 Comments
                      </p>
                    </li>
                  </ul>
                  <h3 className="news-title">
                    <Link to="/blog-details">
                      Navigating the World of Supplements: A Pharmacist's
                      Perspective
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="news-grid flex-fill">
                <div className="news-image">
                  <Link to="/blog-details">
                    <img src={blog_23} className="img-fluid" alt="Post Image" />
                  </Link>
                  <div className="news-date">
                    <h5>20</h5>
                    <p>Nov</p>
                  </div>
                </div>
                <div className="news-content">
                  <ul className="nav">
                    <li>
                      <p>
                        <img src={tag_icon} alt="Icon" />
                        Food
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={admin_icon}
                          alt="Icon"
                        />
                        By Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          className="img-fluid"
                          src={comment_icon}
                          alt="Icon"
                        />
                        26 Comments
                      </p>
                    </li>
                  </ul>
                  <h3 className="news-title">
                    <Link to="/blog-details">
                      Behind the Counter: A Glimpse into the Day-to-Day Life of
                      a Pharmacist
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section app-sec-twelve pharmacy-app-sec">
        <div className="container">
          <div className="app-twelve border-0">
            <div className="app-bg">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                  <div className="mobile-img">
                    <img src={mobile_img} className="img-fluid" alt="img" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="app-content">
                    <div className="app-header aos" data-aos="fade-up">
                      <h5>Working for Your Better Health.</h5>
                      <h2>Download the Doccure App today!</h2>
                    </div>
                    <div className="app-scan aos" data-aos="fade-up">
                      <p>Scan the QR code to get the app now</p>
                      <img src={scan_img} alt="scan-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer pharmacy-footer">
        <div className="container">
          <div className="top-footer">
            <div className="footer-logo">
              <Link to="/index">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="doccure-info">
              <p>
                Doccure is one of India’s most trusted pharmacies, dispensing
                quality medicines at reasonable prices to over 9 million happy
                customers
              </p>
            </div>
          </div>
          <div className="mid-footer">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="footer-links">
                  <h4>Company</h4>
                  <ul className="pages-links">
                    <li>
                      <Link to="/about-us">About Doccure</Link>
                    </li>
                    <li>
                      <Link to="#">Customers Speak</Link>
                    </li>
                    <li>
                      <Link to="#">In the News</Link>
                    </li>
                    <li>
                      <Link to="#">Career</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="footer-links">
                  <h4>Shopping</h4>
                  <ul className="pages-links">
                    <li>
                      <Link to="#">Browse by A-Z</Link>
                    </li>
                    <li>
                      <Link to="#">Browse by Manufacturers</Link>
                    </li>
                    <li>
                      <Link to="#">Health Articles</Link>
                    </li>
                    <li>
                      <Link to="#">Offers / Coupons</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="footer-links">
                  <h4>Our Policies</h4>
                  <ul className="pages-links">
                    <li>
                      <Link to="/terms-condition">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Fees and Payments</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping and Delivery</Link>
                    </li>
                    <li>
                      <Link to="#">Return, Refund </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="footer-links">
                  <h4>Our Services</h4>
                  <ul className="pages-links">
                    <li>
                      <Link to="#">Order Medicines</Link>
                    </li>
                    <li>
                      <Link to="#">Book Lab Tests</Link>
                    </li>
                    <li>
                      <Link to="#">Consult a Doctor</Link>
                    </li>
                    <li>
                      <Link to="#">Ayurveda Articles</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-8">
                <div className="footer-links">
                  <h4>Subscribe to Newsletter</h4>
                  <form action="#">
                    <div className="input-block">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="app-store-links">
                    <Link to="#">
                      <img src={app_icon_store} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={google_icon_play} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-foot-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="payment-methods d-flex align-items-center">
                  <li>
                    <Link to="#">
                      <img src={payment_icon_01} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={payment_icon_02} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={payment_icon_03} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={payment_icon_04} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="social-icons d-flex align-items-center">
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fa-brands fa-dribbble" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy-right text-center">
            <p>Copyright © 2024 Doccure. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmacyFeatured;
