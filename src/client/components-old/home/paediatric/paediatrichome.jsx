import React from "react";
import Header from "../../header";
import Homebanner from "./homebanner";
import Services from "./services";
import Ourdoctors from "./ourdoctors";
import Chooseus from "./chooseus";
import Clientsays from "./clientsays";
import Article from "./article";
import Feedback from "./feedback";
import Footer from "./footer";
import ProgressCircle from "./scrolltotop";

const Paediatrichome = (props) => {
  return (
    <div className="main-wrapper home-twelve home-thirteen ">
      <Header {...props} />
      <Homebanner />
      <Services />
      <Ourdoctors />
      <Chooseus />
      <Clientsays />
      <Article />
      <Feedback />
      <Footer />
      <ProgressCircle />
    </div>
  );
};

export default Paediatrichome;
