import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// boostrap

import "./pharmacyadmin/assets/css/bootstrap.min.css";
import "./pharmacyadmin/assets/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/feathericon.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

//style

import { $, jQuery } from "jquery";
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App />
  </>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
