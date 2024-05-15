import React from "react";
import { choose_icon1, choose_icon2, choose_icon3, choose_icon4, choose_us_six, serv_img_icon_1 } from "../../imagepath";

function ChooseUsHome9() {
    return (
        <>
            <section className="choose-us-fourteen">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header-fourteen text-center">
                                <div className="service-inner-fourteen justify-content-center">
                                    <div className="service-inner-fourteen-one"></div>
                                    <div className="service-inner-fourteen-two">
                                        <h3>Why Us</h3>
                                    </div>
                                    <div className="service-inner-fourteen-three"></div>
                                </div>
                                <h2>Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="you-get-list">
                                <ul>
                                    <li>
                                        <div className="get-list-content">
                                            <div className="get-icon">
                                                <img
                                                    src={choose_icon1}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="get-icon-right">
                                                <h3>Award Winning Service</h3>
                                                <p>
                                                    Duas molestias excepturi sint occaecati cupiditate non
                                                    provident, similique sunt in culpa qui offici
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="get-list-content second-bg">
                                            <div className="get-icon">
                                                <img
                                                    src={choose_icon2}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="get-icon-right">
                                                <h3>Best Quality Pregnancy Care</h3>
                                                <p>
                                                    Duas molestias excepturi sint occaecati cupiditate non
                                                    provident, similique sunt in culpa qui offici
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="get-list-content">
                                            <div className="get-icon">
                                                <img
                                                    src={choose_icon3}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="get-icon-right">
                                                <h3>Complete Medical Equipment</h3>
                                                <p>
                                                    Duas molestias excepturi sint occaecati cupiditate non
                                                    provident, similique sunt in culpa qui offici
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="get-list-content second-bg">
                                            <div className="get-icon">
                                                <img
                                                    src={choose_icon4}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="get-icon-right">
                                                <h3>Dedicated Emergency Care</h3>
                                                <p>
                                                    Duas molestias excepturi sint occaecati cupiditate non
                                                    provident, similique sunt in culpa qui offici
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-us-right-main">
                                <img
                                    src={choose_us_six}
                                    alt="image"
                                    className="img-fluid"
                                />
                                <div className="banner-imgfourteenten">
                                    <img
                                        src={serv_img_icon_1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ChooseUsHome9;