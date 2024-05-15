import React, { useEffect } from 'react'
import { work_01, work_02, work_03, work_04, work_img } from '../../imagepath'
import AOS from "aos";
import "aos/dist/aos.css";

function Worksection() {
    //Aos
    useEffect(() => {
      AOS.init({duration: 1200,
        once: true});  
      
    }, []);
  return (
   <>
      <section className="work-section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-12 work-img-info aos"
                data-aos="fade-up"
              >
                <div className="work-img">
                  <img src={work_img} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 work-details">
                <div className="section-header-one aos" data-aos="fade-up">
                  <h5>How it Works</h5>
                  <h2 className="section-title">4 easy steps to get your solution</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                    <div className="work-info">
                      <div className="work-icon">
                        <span>
                          <img src={work_01} alt="" />
                        </span>
                      </div>
                      <div className="work-content">
                        <h5>Search Doctor</h5>
                        <p>
                          Lorem ipsum dolor consectetur adipiscing elit, tempor
                          incididunt labore dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                    <div className="work-info">
                      <div className="work-icon">
                        <span>
                          <img src={work_02} alt="" />
                        </span>
                      </div>
                      <div className="work-content">
                        <h5>Check Doctor Profile</h5>
                        <p>
                          Lorem ipsum dolor consectetur adipiscing elit, tempor
                          incididunt labore dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                    <div className="work-info">
                      <div className="work-icon">
                        <span>
                          <img src={work_03} alt="" />
                        </span>
                      </div>
                      <div className="work-content">
                        <h5>Schedule Appointment</h5>
                        <p>
                          Lorem ipsum dolor consectetur adipiscing elit, tempor
                          incididunt labore dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                    <div className="work-info">
                      <div className="work-icon">
                        <span>
                          <img src={work_04} alt="" />
                        </span>
                      </div>
                      <div className="work-content">
                        <h5>Get Your Solution</h5>
                        <p>
                          Lorem ipsum dolor consectetur adipiscing elit, tempor
                          incididunt labore dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default Worksection