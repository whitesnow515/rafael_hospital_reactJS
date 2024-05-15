/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Priceingplan from "./general/priceingplan.jsx";
import CosmeticFooter from "./cosmetics/cosmeticfooter.jsx";
import HomeBanner from "./cosmetics/homebanner.jsx";
import TreatmentSection from "./cosmetics/treatementsection.jsx";
import ServiceSection2 from "./cosmetics/servicesection2.jsx";
import FactService from "./cosmetics/factservice.jsx";
import ExpertsTeam from "./cosmetics/expertsteam.jsx";
import TestimonialSection from "./cosmetics/testimonialsection.jsx";
import Feedback from "./cosmetics/feedback.jsx";
import ServiceSection from "./cosmetics/servicesection1.jsx";
import Header from "../header.jsx";
import ProgressCircle from "./paediatric/scrolltotop.jsx";

const CosmeticsHome = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const pageForslide = {
    customPaging: function (i) {
      return <button>{i + 1}</button>;
    },
    afterChange: function (newIndex) {
      setCurrentSlide(newIndex + 1);
    },
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header {...props} />

        {/* Home Banner */}
        <HomeBanner />

        {/* services Section */}
        <ServiceSection />

        {/* Treatment Section */}
        <TreatmentSection />

        {/* Services Section */}
        <ServiceSection2 />

        {/* Facts Services */}
        <FactService />

        {/* Experts Team */}
        <ExpertsTeam />

        {/* Pricing Plan */}
        <Priceingplan />

        {/* Testimonal Section */}
        <TestimonialSection />

        {/* Feedback */}
        <Feedback />

        <CosmeticFooter />

        <ProgressCircle />

        {/* Cursor */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /Cursor */}
      </div>
      <></>
    </>
  );
};

export default CosmeticsHome;
