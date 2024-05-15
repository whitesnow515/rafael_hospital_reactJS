import React, { useState } from "react";
import { Product, Product1, Product2, Product3, Product4 } from "./image";
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const [add, setAdd] = useState(10);
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(10);
  const [count3, setCount3] = useState(10);
  const [count4, setCount4] = useState(10);

  const increment = () => {
    setAdd(add + 1);
  };

  const decrement = () => {
    setAdd(add - 1);
  };
  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    setCount1(count1 - 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    setCount2(count2 - 1);
  };
  const increment3 = () => {
    setCount3(count3 + 1);
  };

  const decrement3 = () => {
    setCount3(count3 - 1);
  };
  const increment4 = () => {
    setCount4(count4 + 1);
  };

  const decrement4 = () => {
    setCount4(count4 - 1);
  };

  const handleInputChange = (event) => {
    setAdd(Number(event.target.value));
  };
  const handleInputChange1 = (event) => {
    setCount1(Number(event.target.value));
  };
  const handleInputChange2 = (event) => {
    setCount2(Number(event.target.value));
  };
  const handleInputChange3 = (event) => {
    setCount3(Number(event.target.value));
  };
  const handleInputChange4 = (event) => {
    setCount4(Number(event.target.value));
  };
  return (
    <div className="main-wrapper">
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Cart</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/Pharmacy/product-description"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src={Product}
                              alt="User Image"
                            />
                          </Link>
                        </h2>
                        <Link to="/Pharmacy/product-description">
                          Benzaxapine Croplex
                        </Link>
                      </td>
                      <td>26565</td>
                      <td>$19</td>
                      <td className="text-center">
                        <div className="custom-increment cart">
                          <div className="input-group1">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-danger btn-number"
                                onClick={decrement}
                              >
                                <span>
                                  <i className="fas fa-minus" />
                                </span>
                              </button>
                            </span>
                            <input
                              type="text"
                              id="quantity1"
                              name="quantity1"
                              className=" input-number"
                              onChange={handleInputChange}
                              value={add}
                            />

                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-success btn-number"
                                onClick={increment}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">$19</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/Pharmacy/product-description"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src={Product1}
                              alt="User Image"
                            />
                          </Link>
                        </h2>
                        <Link to="/Pharmacy/product-description">
                          Ombinazol Bonibamol
                        </Link>
                      </td>
                      <td>865727</td>
                      <td>$22</td>
                      <td className="text-center">
                        <div className="custom-increment cart">
                          <div className="input-group1">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-danger btn-number"
                                onClick={decrement1}
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
                              className=" input-number"
                              onChange={handleInputChange1}
                              value={count1}
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-success btn-number"
                                onClick={increment1}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">$22</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/Pharmacy/product-description"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src={Product2}
                              alt="User Image"
                            />
                          </Link>
                        </h2>
                        <Link to="/Pharmacy/product-description">
                          Dantotate Dantodazole
                        </Link>
                      </td>
                      <td>978656</td>
                      <td>$10</td>
                      <td className="text-center">
                        <div className="custom-increment cart">
                          <div className="input-group1">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-danger btn-number"
                                onClick={decrement2}
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
                              className=" input-number"
                              onChange={handleInputChange2}
                              value={count2}
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-success btn-number"
                                onClick={increment2}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">$10</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/Pharmacy/product-description"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src={Product3}
                              alt="User Image"
                            />
                          </Link>
                        </h2>
                        <Link to="/Pharmacy/product-description">
                          Alispirox Aerorenone
                        </Link>
                      </td>
                      <td>543252</td>
                      <td>$26</td>
                      <td className="text-center">
                        <div className="custom-increment cart">
                          <div className="input-group1">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-danger btn-number"
                                onClick={decrement3}
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
                              className=" input-number"
                              onChange={handleInputChange3}
                              value={count3}
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-success btn-number"
                                onClick={increment3}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">$26</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/Pharmacy/product-description"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src={Product4}
                              alt="User Image"
                            />
                          </Link>
                        </h2>
                        <Link to="/Pharmacy/product-description">
                          Nitrolozin Zithrotropin
                        </Link>
                      </td>
                      <td>634534</td>
                      <td>$12</td>
                      <td className="text-center">
                        <div className="custom-increment cart">
                          <div className="input-group1">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-danger btn-number"
                                onClick={decrement4}
                              >
                                <span>
                                  <i className="fas fa-minus" />
                                </span>
                              </button>
                            </span>
                            <input
                              type="text"
                              id="quantity5"
                              name="quantity5"
                              className=" input-number"
                              onChange={handleInputChange4}
                              value={count4}
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-success btn-number"
                                onClick={increment4}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">$12</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-danger-light">
                            <i className="fas fa-times" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-lg-8"></div>
            <div className="col-md-5 col-lg-4">
              {/* Booking Summary */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Cart Totals</h4>
                </div>
                <div className="card-body">
                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date d-block pb-0">
                        <li>
                          Subtotal <span>$5,877.00</span>
                        </li>
                        <li>
                          Shipping{" "}
                          <span>
                            $25.00<a href="#">Calculate shipping</a>
                          </span>
                        </li>
                      </ul>
                      <ul className="booking-fee pt-4">
                        <li>
                          Tax <span>$0.00</span>
                        </li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">$160</span>
                          </li>
                          <li>
                            <div className="clinic-booking pt-4">
                              <Link
                                className="apt-btn"
                                to="/Pharmacy/product-checkout"
                              >
                                Proceed to checkout
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Booking Summary */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
};

export default Cart;
