import React from 'react'
import { app_store, google_play, mobile_img, scan_img } from '../../imagepath'
import {Link} from "react-router-dom";

function Appsection() {
  return (
   <>
     <section className="app-section">
          <div className="container">
            <div className="app-bg">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="app-content">
                    <div className="app-header aos" data-aos="fade-up">
                      <h5>Working for Your Better Health.</h5>
                      <h2>Download the Doccure App today!</h2>
                    </div>
                    <div className="app-scan aos" data-aos="fade-up">
                      <p>Scan the QR code to get the app now</p>
                      <img src={scan_img} alt="" />
                    </div>
                    <div className="google-imgs aos" data-aos="fade-up">
                      <Link to="#">
                        <img src={google_play} alt="img" />
                      </Link>
                      <Link to="#">
                        <img src={app_store} alt="img" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                  <div className="mobile-img">
                    <img
                      src={mobile_img}
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default Appsection