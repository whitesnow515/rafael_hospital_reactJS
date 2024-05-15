import React from "react";
import {
  cart_favourite,
  category_01,
  category_02,
  category_03,
  category_04,
  category_05,
  category_06,
  category_07,
  category_08,
  category_09,
  category_10,
  category_11,
  category_12,
  deals_01,
  deals_02,
  deals_03,
  deals_04,
  deals_05,
  deals_06,
  deals_07,
  deals_08,
  logo,
  medicine_icon,
  order_icon,
  pharmacy_img,
  product_16,
  product_17,
  product_18,
  seller_01,
  seller_02,
  seller_03,
  seller_04,
  seller_05,
  seller_06,
  seller_07,
  seller_08,
  seller_09,
  seller_10,
  seller_11,
  seller_12,
  seller_13,
  seller_14,
  seller_15,
  seller_img,
  shape_05,
  shape_06,
  shape_07,
  shape_08,
  shape_09,
  shape_11,
  shape_12,
  shopping_bag,
  welcome_icon,
} from "../imagepath.jsx";
import { Link } from "react-router-dom";
import "../../assets/css/feather.css";
import Header from "../header.jsx";
import { shapes_10 } from "../home/image.jsx";
import PharmacyFeatured from "./pharmacyfeatured.jsx";

const Pharmacyindex = (props) => {
  // if (props.location.pathname == "/Pharmacy-index") {
  //   require("../../../client/assets/css/feather.css");
  // }

  // if (props.location.pathname === "/index-13") {
  //   require("../../../assets/css/feather.css");
  // }
  const settings = {
    dots: false,
    infinite: "true",
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="special-offer-content">
                <p>
                  Special offer! Get -20% off for first order with minimum{" "}
                  <span>$200.00</span> in cart.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-header-right">
                <ul className="nav">
                  <li>
                    <div className="dropdown lang-dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        English
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          French
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Spanish
                        </Link>
                        <Link className="dropdown-item" to="#">
                          German
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown lang-dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        USD
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Euro
                        </Link>
                        <Link className="dropdown-item" to="#">
                          INR
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Dinar
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="btn log-register">
                      <Link to="/login" className="me-1">
                        <span>
                          <i className="feather-user" />
                        </span>{" "}
                        Sign In
                      </Link>{" "}
                      /
                      <Link to="/register" className="ms-1">
                        Sign Up
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="cart-logo">
                <Link to="/index">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart-search">
                <form action="/pharmacy-search">
                  <div className="enter-pincode">
                    <i className="feather-map-pin" />
                    <div className="enter-pincode-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Pincode"
                      />
                    </div>
                  </div>
                  <div className="cart-search-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for medicines, health products and more"
                    />
                  </div>
                  <div className="cart-search-btn">
                    <button type="submit" className="btn">
                      <i className="feather-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shopping-cart-list">
                <ul className="nav">
                  <li>
                    <Link to="#">
                      <img src={cart_favourite} alt />
                    </Link>
                  </li>
                  <li>
                    <div className="shopping-cart-amount">
                      <div className="shopping-cart-icon">
                        <img src={shopping_bag} alt />
                        <span>2</span>
                      </div>
                      <div className="shopping-cart-content">
                        <p>Shopping cart</p>
                        <h6>$57.00</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />

      {/* Pharmacy Banner */}
      <section className="section pharmacy-banner">
        <div className="pharmacy-shapes">
          <div className="pharmacy-shape-left">
            <img src={shape_05} className="aos" data-aos="zoom-in" alt />
            <img
              src={shape_06}
              className="shape-six aos"
              data-aos="zoom-in"
              alt
            />
          </div>
          <div className="pharmacy-shape-right">
            <img
              src={shape_08}
              className="shape-eight aos"
              data-aos="fade-down"
              alt
            />
            <img
              src={shape_07}
              className="shape-seven aos"
              data-aos="fade-down"
              alt
            />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="pharmacy-content aos" data-aos="fade-up">
                <h1>From the Leading Online Pharmacy </h1>
                <h4>&amp; Healthcare Platform Company</h4>
                <p>
                  Essentials Nutrition &amp; Supplements from all over the
                  suppliers around the World
                </p>
              </div>
              <div className="pharmacy-btn aos" data-aos="fade-up">
                <Link to="/pharmacy-search" className="btn">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="pharmacy-banner-img">
                <img
                  src={pharmacy_img}
                  className="img-fluid"
                  alt="Pharmacy Img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Pharmacy Banner */}

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="welcome-info">
                  <div className="welcome-icon">
                    <img src={welcome_icon} alt="Welcome Icon" />
                  </div>
                  <div className="welcome-content">
                    <h5>Welcome to Doccure</h5>
                    <p>
                      Download the app get free medicine &amp; 50% off on your
                      first order
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="welcome-btn">
                  <Link to="#" className="btn">
                    Download App
                  </Link>
                </div>
                <div className="welcome-shapes">
                  <div className="welcome-shape-top">
                    <img src={shape_09} alt="Shape Img" />
                  </div>
                  <div className="welcome-shape-bottom">
                    <img src={shapes_10} alt="Shape Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="shop-card suppliment-card">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="shop-content">
                      <h5>
                        10% Cashback on Dietary <span>Suppliments</span>
                      </h5>
                      <p>Code: CARE12</p>
                      <Link to="/product-all" className="btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="shop-img">
                      <img src={product_16} alt="Product Img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="shop-card freshner-card">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="shop-content">
                      <h5>
                        <span>Say yes</span> to New Throat Freshner
                      </h5>
                      <h6>Refresh your day the fruity way</h6>
                      <Link to="/product-all" className="btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="shop-img">
                      <img src={product_17} alt="Product Img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="shop-card product-worth-card">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="shop-content">
                      <h5>
                        Get a Product Worth <span>1000</span> in a Pack
                      </h5>
                      <p>Code: CARE12</p>
                      <Link to="/product-all" className="btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="shop-img">
                      <img src={product_18} alt="Product Img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Welcome Section */}

      {/* Deals Section */}
      <section className="section deals-section">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="pharmacy-title">
                  <h4>Great deals on top picks</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharmacy-title-link">
                  <Link to="/product-all">
                    View All <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-list">
            <ul className="nav">
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_01} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Diabetes</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_02} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Cardiac Care</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_03} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Stomach Care</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_04} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Ayurvedic</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_05} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Homeopathy</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_06} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Fitness</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_07} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Mom &amp; Baby</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="deals-grid aos" data-aos="fade-up">
                  <div className="deals-box">
                    <img src={deals_08} alt="Deals Img" />
                  </div>
                  <div className="deals-content">
                    <Link to="/product-all">Devices</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* /Deals Section */}

      {/* Categories Section */}
      <section className="section categorie-section">
        <div className="container">
          <div className="pharmacy-section-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="pharmacy-title mb-0">
                  <h4>Shop Popular Categories</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="categorie-info">
            <div className="row">
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_01} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Ayush</Link>
                    </h5>
                    <p>400 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_02} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Covid Essentials</Link>
                    </h5>
                    <p>924 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_03} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Devices</Link>
                    </h5>
                    <p>450 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_04} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Glucometers</Link>
                    </h5>
                    <p>580 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_05} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Eye Glasses</Link>
                    </h5>
                    <p>620 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_06} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Weight</Link>
                    </h5>
                    <p>740 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_07} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Women's Care</Link>
                    </h5>
                    <p>810 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_08} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Baby Care</Link>
                    </h5>
                    <p>680 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_09} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Home &amp; Health</Link>
                    </h5>
                    <p>440 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_10} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Sexual Wellness</Link>
                    </h5>
                    <p>270 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_11} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Hands &amp; Feet</Link>
                    </h5>
                    <p>360 Products</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 d-flex aos"
                data-aos="fade-up"
              >
                <div className="categorie-grid flex-fill">
                  <div className="categorie-img">
                    <Link to="/product-all">
                      <img src={category_12} alt="Categorie Img" />
                    </Link>
                  </div>
                  <div className="categorie-content">
                    <h5>
                      <Link to="/product-all">Oral Care</Link>
                    </h5>
                    <p>520 Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex aos" data-aos="fade-up">
              <div className="categorie-card cash-card">
                <div className="categorie-details">
                  <h4>Cash On delivery Available</h4>
                  <p>Order Now, Pay Later</p>
                </div>
                <div className="categorie-btn">
                  <Link to="/product-all" className="btn">
                    <img src={order_icon} alt="Order Icon" /> Order Now
                  </Link>
                </div>
                <div className="categorie-shapes">
                  <div className="categorie-shape-top">
                    <img src={shape_11} alt="Shape Img" />
                  </div>
                  <div className="categorie-shape-bottom">
                    <img src={shape_12} alt="Shape Img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex aos" data-aos="fade-up">
              <div className="categorie-card sale-card">
                <div className="categorie-details">
                  <h4>Sale of the Month</h4>
                  <p>Offer Prices in all medecines</p>
                </div>
                <div className="categorie-btn">
                  <Link to="/product-all" className="btn">
                    View Medicines
                    <img src={medicine_icon} alt="Medicine Icon" />
                  </Link>
                </div>
                <div className="categorie-shapes">
                  <div className="categorie-shape-top">
                    <img src={shape_11} alt="Shape Img" />
                  </div>
                  <div className="categorie-shape-bottom">
                    <img src={shape_12} alt="Shape Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Categories Section */}

      {/* Seller Section */}
      <section className="section seller-section">
        <div className="container">
          <div className="seller-info">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 d-flex aos"
                data-aos="fade-up"
              >
                <div className="seller-card flex-fill">
                  <div className="seller-content">
                    <h6>Medical Pack</h6>
                    <h4>Get offers upto 25%</h4>
                    <Link to="/product-all" className="btn">
                      Grab Offer Now
                    </Link>
                  </div>
                  <div className="seller-time">
                    <ul className="nav">
                      <li>
                        <h5>06</h5>
                        <p>Days</p>
                      </li>
                      <li>
                        <h5>16</h5>
                        <p>Hours</p>
                      </li>
                      <li>
                        <h5>54</h5>
                        <p>Minutes</p>
                      </li>
                      <li>
                        <h5>16</h5>
                        <p>Seconds</p>
                      </li>
                    </ul>
                  </div>
                  <div className="seller-img">
                    <img src={seller_img} alt="Seller Img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="seller-title aos" data-aos="fade-up">
                  <h4>Hot Deals</h4>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_01} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Home &amp; Health</h6>
                    <h5>
                      <Link to="/product-all">Biotin Tablets</Link>
                    </h5>
                    <p>
                      $200 <span>$300</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_02} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Ayush</h6>
                    <h5>
                      <Link to="/product-all">Natural Tooth Paste</Link>
                    </h5>
                    <p>$50</p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_03} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Baby Care</h6>
                    <h5>
                      <Link to="/product-all">Baby Shampoo</Link>
                    </h5>
                    <p>$270</p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_04} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Eye Glasses</h6>
                    <h5>
                      <Link to="/product-all">Oval Frame Glass</Link>
                    </h5>
                    <p>
                      $450 <span>$500</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_05} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Devices</h6>
                    <h5>
                      <Link to="/product-all">Infrared Thermometer</Link>
                    </h5>
                    <p>
                      $300 <span>$400</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="seller-title aos" data-aos="fade-up">
                  <h4>Best Sellers</h4>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_06} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Hands &amp; Feet</h6>
                    <h5>
                      <Link to="/product-all">Eucerin Lotion</Link>
                    </h5>
                    <p>
                      $150 <span>$200</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_07} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Covid Essentials</h6>
                    <h5>
                      <Link to="/product-all">Hand Sanitizer</Link>
                    </h5>
                    <p>$100</p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_08} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Glucometer</h6>
                    <h5>
                      <Link to="/product-all">Glucometer</Link>
                    </h5>
                    <p>
                      $200 <span>$300</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_09} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Weight</h6>
                    <h5>
                      <Link to="/product-all">Weight Machine</Link>
                    </h5>
                    <p>$800</p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_10} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Home &amp; Health</h6>
                    <h5>
                      <Link to="/product-all">Papulex Gel</Link>
                    </h5>
                    <p>$70</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="seller-title aos" data-aos="fade-up">
                  <h4>Top Rated</h4>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_11} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Oral Care</h6>
                    <h5>
                      <Link to="/product-all">Electric Tooth Brush</Link>
                    </h5>
                    <p>
                      $60 <span>$100</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_12} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Devices</h6>
                    <h5>
                      <Link to="/product-all">Sphygmomanomet</Link>
                    </h5>
                    <p>
                      $450 <span>$500</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_13} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Covid Essentials</h6>
                    <h5>
                      <Link to="/product-all">Hand Gloves</Link>
                    </h5>
                    <p>$20</p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_14} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Hands &amp; Feet</h6>
                    <h5>
                      <Link to="/product-all">Cattier Cream</Link>
                    </h5>
                    <p>
                      $120 <span>$150</span>
                    </p>
                  </div>
                </div>
                <div className="seller-grid aos" data-aos="fade-up">
                  <div className="seller-icon">
                    <Link to="/product-all">
                      <img src={seller_15} alt="Seller Icon" />
                    </Link>
                  </div>
                  <div className="seller-text">
                    <h6>Women’s Care</h6>
                    <h5>
                      <Link to="/product-all">Calcium Tablets</Link>
                    </h5>
                    <p>
                      $170 <span>$200</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Seller Section */}
      <PharmacyFeatured />
    </>
  );
};

export default Pharmacyindex;
