import React from 'react';
import { Link } from "react-router-dom";
import { spec, spec1, spec2, spec3, spec4, spec5, spec6, spec7 } from '../image';

function Clinicsection() {
  return (
    <section className="clinic-specialities">
    <div className="container">
        <div className="section-header-three text-center aos" data-aos="fade-up">
        <h2>Clinic &amp; Specialities</h2>
        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec} alt="" />
                <h4>Orthopedic</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec1}  />
                <h4>Laboratry</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec2} />
                <h4>Neurology</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec3} />
                <h4>Cardiology</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4">
            <div className="special-box text-center aos" data-aos="fade-up">
            <div className="special-body">
                <img src={spec4}  />
                <h4>MRI Scans</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec5}  />
                <h4>Primary Checkup</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec6} />
                <h4>Testing</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 aos" data-aos="fade-up">
            <div className="special-box text-center">
            <div className="special-body">
                <img src={spec7}/>
                <h4>Dentist</h4>
                <Link to="/patient/booking1" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
            </div>
            <div className="row row-sm special-footer">
                <div className="col-6 text-left">
                <Link to="#" className="doc-count">124 <span>Doctors</span></Link>
                </div>
                <div className="col-6 text-right">
                <Link to="#" className="clin-count">24 <span>Clinics</span></Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="view-all-more text-center aos" data-aos="fade-up">	
        <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
        </div>
    </div>
    </section>
  );
}

export default Clinicsection;
