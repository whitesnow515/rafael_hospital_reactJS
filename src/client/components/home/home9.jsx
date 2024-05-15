import React, { useState } from "react";
import {
  ban_six_icon1,
  ban_six_icon2,
  ban_six_icon3,
  ban_six_icon4,
  ban_six_icon5,
  ban_six_icon6,
  banner_six_2,
  // serv_img_1,
  // serv_img_2,
  // serv_img_3,
  // serv_img_icon_1,
  // serv_img_icon_2,
  // serv_img_icon_3,
  // service_six_1,
  // service_six_2,
  // service_six_3,
  // service_six_4,
  // services_six_1,
} from "../imagepath";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TeamSectionHome9 from "./FertilityHome/TeamSectionHome9";
import BlogSectionHome9 from "./FertilityHome/BlogSectionHome9";
import ChooseUsHome9 from "./FertilityHome/ChooseUsHome9";
import FeedBackHome9 from "./FertilityHome/FeedBackHome9";
import ContactHome9 from "./FertilityHome/ContactHome9";
import FooterHome9 from "./FertilityHome/FooterHome9";
import ServiceSectionHome9 from "./FertilityHome/ServiceSectionHome9";
import Header from "../header";
import ProgressCircle from "./paediatric/scrolltotop";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home9(props) {
  const config = "/react/template";
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Header {...props} />
      <section className="banner-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="banner-content banner-content-fourteen aos"
                data-aos="fade-up"
              >
                <h1 className="text-white">
                  The Best Solutions, Experts and Care For Your Pregnancy
                </h1>
                <div className="banner-btns-fourteen">
                  <Link to="/patient/booking1" className="btn btn-primary me-2">
                    Meet Our Specialist
                  </Link>
                  <Link to="/patient/booking2" className="btn btn-primarytwo">
                    Schedule a Call
                  </Link>
                </div>
              </div>
              <div className="search-box-fourteen aos" data-aos="fade-up">
                <form
                  action={`${config}/patient/search-doctor`}
                  className="form-block d-flex"
                >
                  <div className="search-input">
                    <div className="form-group">
                      <label>Date</label>
                      {/* <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Thu, Mar 24, 2022"
                      /> */}
                      <DatePicker
                        className="form-control datetimepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Thu, Mar 24, 2022"
                      />
                    </div>
                  </div>
                  <div className="search-input">
                    <div className="form-group mb-0">
                      <label>Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="San Diego Branch"
                      />
                    </div>
                  </div>
                  <div className="search-btn">
                    <button className="btn btn-primary" type="submit">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-img banner-img-fourteen aos"
                data-aos="fade-up"
              >
                <img src={banner_six_2} className="img-fluid" alt="" />
                <div className="banner-img1 banner-imgfourteen">
                  <img src={ban_six_icon1} className="img-fluid" alt="" />
                </div>
                <div className="banner-img2">
                  <img src={ban_six_icon3} className="img-fluid" alt="" />
                </div>
                <div className="banner-img3 banner-imgfourteen3">
                  <img src={ban_six_icon2} className="img-fluid" alt="" />
                </div>
                <div className="banner-imgfourteen4">
                  <img src={ban_six_icon4} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-imgfourteen5">
          <img src={ban_six_icon5} className="img-fluid" alt="" />
        </div>
        <div className="banner-imgfourteen6">
          <img src={ban_six_icon6} className="img-fluid" alt="" />
        </div>
      </section>
      <ServiceSectionHome9 />
      <TeamSectionHome9 />
      <BlogSectionHome9 />
      <ChooseUsHome9 />
      <FeedBackHome9 />
      <ContactHome9 />
      <FooterHome9 />
      <ProgressCircle />
    </>
  );
}

export default Home9;
