import React, { useEffect, useState, useRef } from "react";
import {
  video_slider_img_01,
  video_slider_img_02,
  video_slider_img_03,
  video_slider_img_04,
  video_slider_thumb_01,
  video_slider_thumb_03,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const OurBest = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <section className="our-best-work-sec">
      <div className="container">
        <div className="section-head-fourteen" data-aos="fade-down">
          <h2>See Our Best Work</h2>
          <p>More the quantity, higher the discount. Hurry, Buy Now!</p>
        </div>
        <div className="treatment-video-main">
          <div className="row">
            <div className="col-lg-12">
              <div class="best-work-video" data-aos="fade-up">
                <Slider
                  className="slider work-video-img"
                  asNavFor={nav2}
                  ref={slider1}
                >
                  <div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <img src={video_slider_img_01} alt="Slider" />
                        <div className="video-player">
                          <video className="doctor-treatment-video" loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#">
                        <span className="play-btn-video">
                          <i className="feather-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather-pause" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <img src={video_slider_img_02} alt="Slider" />
                        <div className="video-player">
                          <video className="doctor-treatment-video" loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#">
                        <span className="play-btn-video">
                          <i className="feather-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather-pause" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <img src={video_slider_img_03} alt="Slider" />
                        <div className="video-player">
                          <video className="doctor-treatment-video" loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#">
                        <span className="play-btn-video">
                          <i className="feather-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather-pause" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <img src={video_slider_img_04} alt="Slider" />
                        <div className="video-player">
                          <video className="doctor-treatment-video" loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#">
                        <span className="play-btn-video">
                          <i className="feather-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather-pause" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Slider>

                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  slidesToScroll={1}
                  arrows={false}
                  swipeToSlide={false}
                  focusOnSelect={true}
                  className=" slider slider-thumbnails-img "
                  data-aos="fade-up"
                >
                  <div className="slider-small-thumb">
                    <div className="small-slide-img">
                      <img src={video_slider_thumb_01} alt="product image" />
                    </div>
                    <Link to="#" className="play-btn-small">
                      <i className="feather-play" />
                    </Link>
                  </div>
                  <div className="slider-small-thumb">
                    <div className="small-slide-img">
                      <img src={video_slider_img_02} alt="product image" />
                    </div>
                    <Link to="#" className="play-btn-small">
                      <i className="feather-play" />
                    </Link>
                  </div>
                  <div className="slider-small-thumb">
                    <div className="small-slide-img">
                      <img src={video_slider_thumb_03} alt="product image" />
                    </div>
                    <Link to="#" className="play-btn-small">
                      <i className="feather-play" />
                    </Link>
                  </div>
                  <div className="slider-small-thumb">
                    <div className="small-slide-img">
                      <img src={video_slider_img_03} alt="product image" />
                    </div>
                    <Link to="#" className="play-btn-small">
                      <i className="feather-play" />
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;
