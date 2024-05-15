import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { discover1, discover2, discover3, discover4, discover5, servicesixteenicon } from "../image";

const ServiceSection = () => {
    const settings = {
        items: 5,
      loop: true,
			margin: 10,
			dots: true,
			nav: false,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1
				},
				500: {
					items: 1
				},
				575: {
					items: 2
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				},
				1300: {
					items: 5
				}
			}
      };
      
  return (
    <section className="services-section-sixteen">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-sixteen text-center">
              <p>Recapture the beauty of self-confidence</p>
              <h2>Discover a New you</h2>
            </div>
          </div>
        </div>
        <div className="discover-slider owl-theme">
        <OwlCarousel {...settings}>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover5} alt="" />
            </div>
            <Link to="#">Body</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover4} alt="" />
            </div>
            <Link to="#">Face</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover3} alt="" />
            </div>
            <Link to="#">Breast</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover2} alt="" />
            </div>
            <Link to="#">Nose</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover1} alt="" />
            </div>
            <Link to="#">Fillers</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover3} alt="" />
            </div>
            <Link to="#">Face</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover4} alt="" />
            </div>
            <Link to="#">Body</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover3} alt="" />
            </div>
            <Link to="#">Nose</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover2} alt="" />
            </div>
            <Link to="#">Fillers</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover4} alt="" />
            </div>
            <Link to="#">Breast</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
          <div className="discover-you-main">
            <div className="discover-you-image">
              <img src={discover2} alt="" />
            </div>
            <Link to="#">Body</Link>
            <p>Lorem Ipsum is simply dummy typesetting industry.</p>
            <Link to="#" className="discov-innner">
              Read More
              <i className="fa-solid fa-chevron-right ms-2" />
            </Link>
          </div>
        </OwlCarousel>
        </div>
      </div>
      <div className="service-sixteen-icon">
        <img src={servicesixteenicon} alt="" />
      </div>
    </section>
  );
};

export default ServiceSection;
