import React from 'react';
import { Link } from "react-router-dom";
function Homebanner() {
  return (
    <section className="section-search-3">
    <div className="container">
        <div className="banner-info">
        <div className="row align-items-center">
            <div className="col-lg-4">
            <div className="header-banner aos" data-aos="fade-up">
                <h2>Search Doctor, <br /> <span className="header-highlight">Make an Appointment</span></h2>
                <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
            </div>
            </div>
            <div className="col-lg-8">
            <div className="doctor-search aos" data-aos="fade-up">
                <div className="doctor-form">
                <form action="#" className="doctor-search-form trans">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="form-custom">
                            <input type="text" className="form-control"  placeholder="Search Location" />
                            <i className="far fa-compass" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="form-custom">
                            <input type="text" className="form-control"  placeholder="Gender" />
                            <i className="far fa-smile" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                        <div className="form-custom">
                            <input type="text" className="form-control"  placeholder="Department" />
                            <i className="fas fa-user-check" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Link to="/patient/search-doctor" className="btn banner-btn">MAKE APPOINTMENT</Link>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
}

export default Homebanner;
