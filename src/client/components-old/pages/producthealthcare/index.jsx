/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import {
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
} from "./img";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

const Producthealthcare = (props) => {
  return (
    <>
      <Header {...props} />
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Health Product
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">
                Health Products{" "}
                <span className="text-small text-white ms-2">
                  {" "}
                  <b>70 Products</b>
                </span>
              </h2>
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
                            defaultChecked=""
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
                          <span className="checkmark" /> Men's Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Women's Care
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
                  <div className="sort-by pb-3">
                    <span className="sort-title">Show</span>
                    <span className="sortby-fliter">
                      <select className="form-select">
                        <option>Select</option>
                        <option className="sorting">1</option>
                        <option className="sorting">2</option>
                        <option className="sorting">3</option>
                        <option className="sorting">4</option>
                        <option className="sorting">5</option>
                        <option className="sorting">6</option>
                        <option className="sorting">7</option>
                        <option className="sorting">8</option>
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
                          src={product8}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Antatriene Drospiletra
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (35)
                        </span>
                      </div>
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
                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/Pharmacy/product-description" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="Product image"
                          src={product9}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Zolpimid Tramatrigine
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (35)
                        </span>
                      </div>
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
                          src={product10}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Lysofranil Dorzostin
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
                          src={product11}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Ergorinex Caffeigestin
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
                          src={product12}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Acetrace Amionel
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
                          src={product13}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Rapalac Neuronium
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
                          src={product14}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Cordacriptine Mardipine
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
                          src={product15}
                        />
                      </Link>
                      <Link to="#" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title pb-1">
                        <Link to="/Pharmacy/product-description" tabIndex={-1}>
                          Neubide Aborase
                        </Link>
                      </h3>
                      <div className="rating pb-3">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating ms-1">
                          (15)
                        </span>
                      </div>
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
    </>
  );
};

export default Producthealthcare;
