import React from "react";
import {
  eye_icon,
  store_01,
  store_02,
  store_03,
  store_04,
  store_05,
  store_06,
  store_07,
  store_08,
  store_09,
  store_10,
  store_11,
  store_13,
  store_14,
  store_15,
  store_16,
  store_bg_01,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
function StoreSectionHome6() {
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
      <section className="store-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <img src={eye_icon} alt="" className="img-fluid" />
                <h2>
                  <span>Our</span> Store
                </h2>
                <p>Great Reasons For People Choose Doccure Store</p>
              </div>
              <ul className="store-tab nav">
                <li>
                  <Link
                    to="#"
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#eyeglass"
                  >
                    Eye Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#computer">
                    Computer Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#kids">
                    Kids Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#lense">
                    Contact Lenses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#sunglass">
                    Sunglasses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#readingglass"
                  >
                    Reading Glasses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {/* Eye Glass */}
            <div className="tab-pane active" id="eyeglass">
              <div className="eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_01} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Nerdlane
                          </Link>
                        </h4>
                        <p>Black Full Frame Wayfarer Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_02} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Mirar Aviator Eyeglasses
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$480</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_03} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Izibuko
                          </Link>
                        </h4>
                        <p>
                          Glossy Blue Full Frame Cateye Eyeglasses for Women
                        </p>
                        <div className="price-tag">
                          <h5>$450</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_04} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Vistazo
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_05} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">Tintin</Link>
                        </h4>
                        <p>Full Frame tintin Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$400</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Eye Glass */}
            {/* Computer Glass */}
            <div className="tab-pane fade" id="computer">
              <div className="eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_06} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Danzier
                          </Link>
                        </h4>
                        <p>Black Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_02} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">Fasil</Link>
                        </h4>
                        <p>Black Frame Computer Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$230</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_05} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Coolers
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$370</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_04} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Eye Protect
                          </Link>
                        </h4>
                        <p>Frame Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$410</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_03} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Viratio
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$420</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Computer Glass */}
            {/* Kids Glass */}
            <div className="tab-pane fade" id="kids">
              <div className="eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_07} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Readers
                          </Link>
                        </h4>
                        <p>Black Full Frame kids Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_08} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sight Care
                          </Link>
                        </h4>
                        <p>Black Full Frame Kids Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$690</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_09} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Aviator
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$240</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_10} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">Zibuko</Link>
                        </h4>
                        <p>Glossy Full Frame Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$430</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_03} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">Seeier</Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$480</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Kids Glass */}
            {/* Lense Glass */}
            <div className="tab-pane fade" id="lense">
              <div className=" eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_14} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Lenzomania
                          </Link>
                        </h4>
                        <p>Wayfarer Contact Lense</p>
                        <div className="price-tag">
                          <h5>$120</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_15} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Contacto
                          </Link>
                        </h4>
                        <p>Contact Lense</p>
                        <div className="price-tag">
                          <h5>$290</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_16} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Viator Lense
                          </Link>
                        </h4>
                        <p>Contact Lense</p>
                        <div className="price-tag">
                          <h5>$190</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_14} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Eizio Cart
                          </Link>
                        </h4>
                        <p>Glossy Blue Lenses</p>
                        <div className="price-tag">
                          <h5>$430</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_15} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            ContactLense Cart
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$280</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Lense Glass */}
            {/* Sunglass Glass */}
            <div className="tab-pane fade" id="sunglass">
              <div className=" eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_02} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sunglass
                          </Link>
                        </h4>
                        <p>Black Sunglasses</p>
                        <div className="price-tag">
                          <h5>$350</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_10} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Carezio
                          </Link>
                        </h4>
                        <p>Black Frame sun Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$550</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_11} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Aviator Sunglasses
                          </Link>
                        </h4>
                        <p>Gold Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_04} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Buzanio Glass
                          </Link>
                        </h4>
                        <p>Glossy Blue sun Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$430</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_13} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sunrace Buy
                          </Link>
                        </h4>
                        <p>Full Frame Cateye Eyeglasses for Men and Women</p>
                        <div className="price-tag">
                          <h5>$480</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Sun Glass */}
            {/* Reading Glass */}
            <div className="tab-pane fade" id="readingglass">
              <div className="eye-blogslider owl-them aos" data-aos="fade-up">
                <OwlCarousel {...doctersettings}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_01} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Nerdlane
                          </Link>
                        </h4>
                        <p>Black Full Frame Wayfarer Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_02} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Mirar Aviator Eyeglasses
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$580</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_03} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Izibuko
                          </Link>
                        </h4>
                        <p>Blue Full Frame Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$450</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_04} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Vistazo
                          </Link>
                        </h4>
                        <p>Gold Full Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$370</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="green-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <img src={store_07} alt="" className="img-fluid" />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                      </div>
                      <div className="store-content">
                        <span className="store-cat">New</span>
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Dlanerz
                          </Link>
                        </h4>
                        <p>Full Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$320</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* /Reading Glass */}
          </div>
        </div>
        <div className="ban-bg">
          <img src={store_bg_01} alt="" className="img-fluid bg-10" />
        </div>
      </section>
    </>
  );
}

export default StoreSectionHome6;
