import React from "react";
import { count_01, count_02, count_03, count_04, counter_bg, counter_bg_01 } from "../../imagepath";
import CountUp from 'react-countup';
function CounterSectionHome6() {
    return (
        <>
            <section className="counter-section">
                <div className="ban-bg">
                    <img
                        src={counter_bg}
                        alt=""
                        className="img-fluid bg-06"
                    />
                    <img
                        src={counter_bg_01}
                        alt=""
                        className="img-fluid bg-07"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 ">
                            <div className="count-box">
                                <span className="count-icon">
                                    <img
                                        src={count_01}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                                <div className="count-info">
                                    <h3>
                                        <span className="count-digit"><CountUp start={1} end={180}/></span>+
                                    </h3>
                                    <p>Expert Doctors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="count-box">
                                <span className="count-icon">
                                    <img
                                        src={count_02}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                                <div className="count-info">
                                    <h3>
                                        <span className="count-digit"><CountUp start={1} end={26}/></span>+
                                    </h3>
                                    <p>Expert Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="count-box">
                                <span className="count-icon">
                                    <img
                                        src={count_03}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                                <div className="count-info">
                                    <h3>
                                        <span className="count-digit"><CountUp start={1} end={10}/></span>K+
                                    </h3>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="count-box">
                                <span className="count-icon">
                                    <img
                                        src={count_04}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                                <div className="count-info">
                                    <h3>
                                        <span className="count-digit"><CountUp start={1} end={150}/></span>+
                                    </h3>
                                    <p>Best Awards Winner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CounterSectionHome6;