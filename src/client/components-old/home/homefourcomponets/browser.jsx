import React from 'react';
import { Link } from "react-router-dom";
import { bro1, bro2, bro3, bro4, bro5 } from '../image';

function Browser() {
  return (
    <section className="browse-section">
    <div className="container">
      <div className="section-header-three text-center aos" data-aos="fade-up">
        <h2>Browse by Specialities</h2>
        <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro1} alt="" />
              </div>
              <h4>Urology</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro2} alt=""/>
              </div>
              <h4>Neurology</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro3} alt="" />
              </div>
              <h4>Orthopedic</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro4} alt="" />
              </div>
              <h4>Cardiologist</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro1} alt="" />
              </div>
              <h4>Dentist</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro5} alt="" />
              </div>
              <h4>Heart surgery</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro1} alt="" />
              </div>
              <h4>Urology</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro2}alt="" />
              </div>
              <h4>Neurology</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro3} alt="" />
              </div>
              <h4>Orthopedic</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro4} alt="" />
              </div>
              <h4>Cardiologist</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro1} alt="" />
              </div>
              <h4>Dentist</h4>
              <p>124 <span>Doctors</span></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 aos" data-aos="fade-up">
          <div className="brower-box">
            <div>
              <div className="brower-img">
                <img src={bro5} alt="" />
              </div>
              <h4>Heart surgery</h4>
              <p>124 <span>Doctors</span></p>
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

export default Browser;
