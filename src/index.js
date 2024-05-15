import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./approuter";
// import * as serviceWorker from './client/serviceWorker';

import "./client/assets/css/bootstrap.min.css";

// boostrap
import "bootstrap/dist/css/bootstrap.min.css";
//fontawesome

import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./client/assets/css/owl.carousel.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

// import './client/assets/css/aos.css'

// if (
//   !window.location.pathname?.includes("admin") &&
//   !window.location.pathname.includes("pharmacyadmin")
// ) {
//   require("./client/assets/css/all.css");
//   require("./client/assets/css/all.min.css");
//   require("./client/assets/css/fontawesome.min.css");
//   require("./client/assets/css/custom.css");
// } 
// console.log('window.location.pathname :>> ', window.location.pathname);
if (window.location.pathname.includes("pharmacyadmin")) {
  require("./pharmacyadmin/assets/plugins/fontawesome/css/fontawesome.min.css");
  require("./pharmacyadmin/assets/plugins/fontawesome/css/all.min.css");
  require("./pharmacyadmin/assets/css/font-awesome.min.css");
  require("./pharmacyadmin/assets/css/custom.css");
  require("./pharmacyadmin/assets/css/feathericon.min.css");
  require("./pharmacyadmin/assets/js/feather.min.js");
  require("./pharmacyadmin/assets/css/bootstrap.min.css");
}else if (window.location.pathname.includes("admin")) {
  require("./admin/assets/css/feathericon.min.css");
  require("./admin/assets/js/feather.min.js");
  // require("./admin/assets/plugins/fontawesome/css/fontawesome.min.css");
  require("./admin/assets/plugins/fontawesome/css/all.min.css");
  // require("./admin/assets/plugins/fontawesome/js/fontawesome.min.js");
  require("./admin/assets/css/font-awesome.min.css");
  require("./admin/assets/css/custom.css");
} else {
  require("./client/assets/css/all.css");
  require("./client/assets/css/all.min.css");
  require("./client/assets/css/fontawesome.min.css");
  require("./client/assets/css/custom.css")
  require("../src/client/components/customstyleclient.css");
}

// ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// if (module.hot) { // enables hot module replacement if plugin is installed
//  module.hot.accept();
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppRouter />
  </>
);
