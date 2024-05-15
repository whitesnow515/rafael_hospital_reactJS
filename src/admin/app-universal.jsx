/* eslint-disable react/prop-types */
import React, { useState, useContext, useMemo } from "react";
import config from "config";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Specialities from "./components/specialities";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";
import ProductList from "./components/productlist";
import PharmacyList from "./components/pharmacylist";
import Categories from "./components/pharmacylist/Categories";
import Blog from "./components/Blog/blog";
import BlogDetails from "./components/Blog/blogdetails";
import AddBlog from "./components/Blog/addblog";
import EditBlog from "./components/Blog/editblog";
import PendingBlog from "./components/Blog/pendingblog";
import Profile from "./components/profile/Profile";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import Lockscreen from "./components/lockscreen";
import Error from "./components/error404";
import ErrorPage from "./components/error500";
import BasicInput from "./components/forms/baiscinput";
import FormInput from "./components/forminput";
import FormHorizontal from "./components/formhorizontal";
import FormVertical from "./components/formvertical";
import FormMask from "./components/formask";
import FormValidation from "./components/formvalidation";
import BlankPage from "./components/blankpage";
import Components from "./components/component";
import DataTables from "./components/datatables";
import BasicTables from "./components/basictables";
import ProductCategories from "./components/productlist/ProductCategories";

import { Appcontext } from "../approuter";
import InvoiceReportList from "./components/Reports/InvoiceReport/InvoiceReportList";

const AppUniversal = function (props) {
  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = props?.location;

  useMemo(() => {
    if (
      location?.pathname == "/admin/login" ||
      location?.pathname == "/admin/register" ||
      location?.pathname == "/admin/forgotPassword" ||
      location?.pathname == "/admin/lockscreen" ||
      location?.pathname == "/admin/conform-email" ||
      location?.pathname == "/admin/404" ||
      location?.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location]);

  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        {isAuth !== "admin" && (
          <Route
            render={(props) => (
              <Header {...props} onMenuClick={() => toggleMobileMenu()} />
            )}
          />
        )}
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin/register" exact component={Register} />
          <Route
            path="/admin/forgotPassword"
            exact
            component={ForgotPassword}
          />
          <Route path="/admin/lockscreen" exact component={Lockscreen} />
          <Route path="/admin" exact component={Dashboard} />
          <Route
            path="/admin/appointment-list"
            exact
            component={Appointments}
          />
          <Route path="/admin/specialities" exact component={Specialities} />
          <Route path="/admin/doctor-list" exact component={Doctors} />
          <Route path="/admin/patient-list" exact component={Patients} />
          <Route path="/admin/reviews" exact component={Reviews} />
          <Route
            path="/admin/transactions-list"
            exact
            component={Transaction}
          />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/invoicerepot" exact component={InvoiceReport} />
          <Route path="/admin/invoice" exact component={InvoiceReportList} />
          <Route path="/admin/blog" exact component={Blog} />
          <Route path="/admin/blog-details" exact component={BlogDetails} />
          <Route path="/admin/add-blog" exact component={AddBlog} />
          <Route path="/admin/edit-blog" exact component={EditBlog} />
          <Route path="/admin/pending-blog" exact component={PendingBlog} />
          <Route path="/admin/profile" exact component={Profile} />
          <Route path="/admin/product-list" exact component={ProductList} />
          <Route path="/admin/pharmacy-list" exact component={PharmacyList} />
          <Route path="/admin/pharmacy-category" exact component={Categories} />
          {/* <Route path="/admin/invoice" exact component={Invoice} /> */}

          <Route path="/admin/404" exact component={Error} />
          <Route path="/admin/500" exact component={ErrorPage} />
          <Route path="/admin/blank-page" exact component={BlankPage} />
          <Route path="/admin/components" exact component={Components} />
          <Route path="/admin/basic-input" exact component={BasicInput} />
          <Route path="/admin/form-input-group" exact component={FormInput} />
          <Route
            path="/admin/form-horizontal"
            exact
            component={FormHorizontal}
          />
          <Route path="/admin/form-vertical" exact component={FormVertical} />
          <Route path="/admin/form-mask" exact component={FormMask} />
          <Route
            path="/admin/form-validation"
            exact
            component={FormValidation}
          />
          <Route path="/admin/tables-basic" exact component={BasicTables} />
          <Route path="/admin/data-tables" exact component={DataTables} />
          <Route
            path="/admin/product-category"
            exact
            component={ProductCategories}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppUniversal;
