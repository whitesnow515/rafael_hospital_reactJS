import React from 'react';
import { Link } from "react-router-dom";
import { Product, Product1, Product2 } from '../../Pharmacy/image';

function Chart() {
    return (
        <>
            <>
                {/* Cart */}
                <li className="nav-item dropdown noti-nav view-cart-header me-3">
                    <Link
                        to="#"
                        className="dropdown-toggle nav-link p-0 position-relative"
                        data-bs-toggle="dropdown"
                    >
                        <i className="fa-solid fa-cart-shopping" />{" "}
                        <small className="unread-msg1">7</small>
                    </Link>
                    <div className="dropdown-menu notifications dropdown-menu-end">
                        <div className="shopping-cart">
                            <ul className="shopping-cart-items list-unstyled">
                                <li className="clearfix">
                                    <div className="close-icon">
                                        <i className="fa-solid fa-circle-xmark" />
                                    </div>
                                    <Link to="/Pharmacy/product-description">
                                        <img
                                            className="avatar-img rounded"
                                            src={Product}
                                            alt="User Image"
                                        />
                                    </Link>
                                    <Link to="/Pharmacy/product-description" className="item-name">
                                        Benzaxapine Croplex
                                    </Link>
                                    <span className="item-price">$849.99</span>
                                    <span className="item-quantity">Quantity: 01</span>
                                </li>
                                <li className="clearfix">
                                    <div className="close-icon">
                                        <i className="fa-solid fa-circle-xmark" />
                                    </div>
                                    <Link to="/Pharmacy/product-description">
                                        <img
                                            className="avatar-img rounded"
                                            src={Product1}
                                            alt="User Image"
                                        />
                                    </Link>
                                    <Link to="/Pharmacy/product-description" className="item-name">
                                        Ombinazol Bonibamol
                                    </Link>
                                    <span className="item-price">$1,249.99</span>
                                    <span className="item-quantity">Quantity: 01</span>
                                </li>
                                <li className="clearfix">
                                    <div className="close-icon">
                                        <i className="fa-solid fa-circle-xmark" />
                                    </div>
                                    <Link to="/Pharmacy/product-description">
                                        <img
                                            className="avatar-img rounded"
                                            src={Product2}
                                            alt="User Image"
                                        />
                                    </Link>
                                    <Link to="/Pharmacy/product-description" className="item-name">
                                        Dantotate Dantodazole
                                    </Link>
                                    <span className="item-price">$129.99</span>
                                    <span className="item-quantity">Quantity: 01</span>
                                </li>
                            </ul>
                            <div className="booking-summary pt-3">
                                <div className="booking-item-wrap">
                                    <ul className="booking-date">
                                        <li>
                                            Subtotal <span>$5,877.00</span>
                                        </li>
                                        <li>
                                            Shipping <span>$25.00</span>
                                        </li>
                                        <li>
                                            Tax <span>$0.00</span>
                                        </li>
                                        <li>
                                            Total <span>$5.2555</span>
                                        </li>
                                    </ul>
                                    <div className="booking-total">
                                        <ul className="booking-total-list text-align">
                                            <li>
                                                <div className="clinic-booking pt-3">
                                                    <Link className="apt-btn" to="/Pharmacy/cart">
                                                        View Card
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="clinic-booking pt-3">
                                                    <Link className="apt-btn" to="/Pharmacy/product-checkout">
                                                        Checkout
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                {/* /Cart */}
            </>

        </>
    );
}

export default Chart;
