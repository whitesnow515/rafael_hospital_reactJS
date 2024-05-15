import React from "react";
import Header from "../../header";
import HomeCareBanner from "./homecarebanner";
import { Howitwork } from "./howitwork";
import OurServices from "./ourservices";
import Nearbynurses from "./nearbynurses";
import { Topnurse } from "./topnurse";
import OurBest from "./ourbest";
import OurBlog from "./ourblog";
import PricingPlan from "./pricingplan";
import Questions from "./questions";
import FooterHomeCare from "./footerhomecare";
import ProgressCircle from "../paediatric/scrolltotop";

const HomecareHome = (props) => {
  if (props.location.pathname === "/index-13") {
    require("../../../assets/css/feather.css");
  }

  return (
    <div>
      <Header />
      <HomeCareBanner />
      <Howitwork />
      <OurServices />
      <Nearbynurses />
      <Topnurse />
      <OurBest />
      <OurBlog />
      <PricingPlan />
      <Questions />
      <FooterHomeCare />
      <ProgressCircle />
    </div>
  );
};

export default HomecareHome;
