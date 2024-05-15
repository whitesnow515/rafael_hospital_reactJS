import React from "react";
import StickyBox from "react-sticky-box";
import {
  Product,
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product10,
  Product11,
  Product12,
  Product13,
  Product14,
  Product15,
} from "./image";
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";

const ProductIndex = (props) => {
  return (
    <div className="main-wrapper">
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Pain Relif </h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pain Relif
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Filter</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <h4>Categories</h4>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="gender_type"
                            defaultChecked
                          />
                          <span className="checkmark" /> Family Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Skin Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Hair Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Lip Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Mens Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Womens Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Baby care
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
              </StickyBox>
              {/* /Search Filter */}
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div className="row align-items-center pb-3">
                <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
                  <h3 className="title pharmacy-title">Medlife Medical</h3>
                  <p className="doc-location mb-2 text-ellipse pharmacy-location">
                    <i className="fas fa-map-marker-alt me-1" /> 96 Red Hawk
                    Road Cyrus, MN 56323{" "}
                  </p>
                  <span className="sort-title">Showing 6 of 98 products</span>
                </div>
                <div className="col-md-8 col-12 d-md-block d-none custom-short-by">
                  <div className="sort-by pb-3">
                    <span className="sort-title">Sort by</span>
                    <span className="sortby-fliter">
                      <select className="form-select">
                        <option>Select</option>
                        <option className="sorting">Rating</option>
                        <option className="sorting">Popular</option>
                        <option className="sorting">Latest</option>
                        <option className="sorting">Free</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Benzaxapine Croplex
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$19.00</span>
                          <span className="price-strike">$45.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product13}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Rapalac Neuronium
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$16.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product1}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Ombinazol Bonibamol
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$22.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product2}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Dantotate Dantodazole
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$10.00</span>
                          <span className="price-strike">$12.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product12}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Acetrace Amionel
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$7.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product11}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Ergorinex Caffeigestin
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$15.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product3}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Alispirox Aerorenone
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$26.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product10}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Lysofranil Dorzostin
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$10.00</span>
                          <span className="price-strike">$12.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product4}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Nitrolozin Zithrotropin
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$12.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product14}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Cordacriptine Mardipine
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$9.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product5}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Iconevist Ampyplex
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$16.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product6}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Alcafsteride Omebide
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$7.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product15}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Neubide Aborase
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$30.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product7}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          ITONE eye drops 10ml
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$50.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={Product8}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-4">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Antatriene Drospiletra
                        </Link>
                      </h3>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <span className="price">$10.00</span>
                          <span className="price-strike">$20.00</span>
                        </div>
                        <div className="col-lg-6 text-end">
                          <Link to="/Pharmacy/cart" className="cart-icon">
                            <i className="fas fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <Link to="#" className="btn book-btn1 mb-4">
                  Load More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default ProductIndex;
