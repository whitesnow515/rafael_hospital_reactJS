import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { packagecardbg01, packagecardbg02, packagecardbg03, packagecardimg01, packagecardimg02, packagecardimg03 } from '../../imagepath';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const FeaturePackageSection = () => {
  const owlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots:false,
    smartSpeed: 2000,
    
    navText: [
      '<i class="fa-solid fa-caret-left "></i>',
      '<i class="fa-solid fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  // const owlOptions = {
  //   loop: true,
  //   margin: 24,
  //   dots:true,
  //   nav: true,
  //   navText: [
  //     '<i class="fa-solid fa-caret-left"></i>', // Left arrow icon
  //     '<i class="fa-solid fa-caret-right"></i>', // Right arrow icon
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  const featurePackages = [
    {
      id: 1,
      imgBgSrc: packagecardbg01,
      type: "Women's Health Check-up",
      testsIncluded: '15 Test Included',
      cost: '$150.25',
      discountedCost: '$199.00',
      link: '/patient/booking2',
      imgSrc: packagecardimg03
    },
    {
      id: 2,
      className: "feature-package-card family-pack",
      imgBgSrc: packagecardbg03,
      type: "Family Package For 3 Members",
      testsIncluded: '15 Test Included',
      cost: '$870.25',
      discountedCost: '$199.00',
      link: '/patient/booking2',
      imgSrc: packagecardimg02
    },
    {
      id: 3,
      className: "feature-package-card mens-health",
      imgBgSrc: packagecardbg02,
      type: "Men's Health Check-up",
      testsIncluded: '15 Test Included',
      cost: '$130.25',
      discountedCost: '$199.00',
      link: '/patient/booking2',
      imgSrc: packagecardimg01

    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <div>
      <section className="features-section-sixteen">
        <div className="container">
          <div className="section-head-twelve">
            <h2>Featured Packages</h2>
            <p>Explore Our Top-Tier Packages for Your Personalized Wellness Experience</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel className="feature-package-slider owl-theme aos" {...owlOptions}>
                {featurePackages.map((packageData, index) => (
                  <div
                    key={index}
                    className={
                      packageData.id === 1
                        ? "feature-package-card"
                        : packageData.id === 2
                          ? "feature-package-card family-pack"
                          : packageData.id === 3
                            ? "feature-package-card mens-health"
                            : "default-class"
                    }
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 100}
                  >                <div className="feature-package-type">
                      <h3>{packageData.type}</h3>
                      <div className="package-cost">
                        <h6>{packageData.testsIncluded}</h6>
                        <h5>{packageData.cost} <span>{packageData.discountedCost}</span></h5>
                      </div>
                      <Link to={packageData.link} className="package-book-btn">Book Now</Link>
                    </div>
                    <div className="package-img">
                      <img src={packageData.imgSrc} className="package-img-user" alt="Img" />
                      <img src={packageData.imgBgSrc} className="package-img-bg" alt="Img" />
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FeaturePackageSection