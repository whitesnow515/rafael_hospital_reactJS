/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Header from "../../header";
import Homebanner from "./homebanner";
import Specialities from "./specialities";
import Service from "./service";
import Needtoknow from "./needtoknow";
import Ourdoctor from "./ourdoctor";
import Stepstofollow from "./stepstofollow";
import Testimonals from "./testimonals";
import Bookappointment from "./bookappointment";
import Pricing from "./pricing";
import Faq from "./faq";
import Footer from "./footer";
import ProgressCircle from "../paediatric/scrolltotop";
import AOS from "aos";
import "aos/dist/aos.css";

const Cardiohome = (props) => {
  if (props.location.pathname === "/index-5") {
    require("../../../assets/css/feather.css");
  }

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="main-wrapper home-ten">
      <Header {...props} />
      <Homebanner />
      <Specialities />
      <Service />
      <Needtoknow />
      <Ourdoctor />
      <Stepstofollow />
      <Testimonals />
      <Bookappointment />
      <Pricing />
      <Faq />
      <Footer />
      <ProgressCircle />
    </div>
  );
};

export default Cardiohome;
