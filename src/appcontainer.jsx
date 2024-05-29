/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Header from "./client/components/header.jsx";
// import Footer from "./client/components/footer.jsx";
// import TopHeader from "./client/components/topheader.jsx";
import Home from "./client/components/home/index";
import Home7 from "./client/components/home/home7";
import ForgotPassword2 from "./client/components/pages/authentication/forgot-password2.jsx";

import DoctorProfile from "./client/components/patients/doctorprofile";
import Booking from "./client/components/patients/booking/booking1";
import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import InvoiceView from "./client/components/pages/invoices/view";

import DoctorRegister from "./client/components/doctors/register/DoctorRegister.jsx";
import Patientregisterstepone from "./client/components/register/patientregisterstepone";
import Patientregistersteptwo from "./client/components/register/patientregistersteptwo";
import Patientregisterstepthree from "./client/components/register/patientregisterstepthree";
import Patientregisterstepfour from "./client/components/register/patientregisterstepfour";
import Patientregisterstepfive from "./client/components/register/patientregisterstepfive";

import AppUniversal from "./admin/app-universal";
import PharmacyadminApp from "./pharmacyadmin/app-universal";

import DoctorLogin from "./client/components/login/doctor.jsx";
import PatientLogin from "./client/components/login/patient.jsx";
// import Register from "./client/components/register/register.jsx";
// import ForgotPassword from "./client/components/forgot-password";
// import Home9 from "./client/components/home/home9";
// import Home2 from "./client/components/home/home2";
// import Home3 from "./client/components/home/home3";
// import Home11 from "./client/components/home/home11";
// import Home12 from "./client/components/home/home12";
// import Home13 from "./client/components/home/home13";
// import Home14 from "./client/components/home/home14";
// import HomeSlider1 from "./client/components/home/homeslider1";
// import HomeSlider2 from "./client/components/home/homeslider2";
// import Home10 from "./client/components/home/home10";

// //blog
// import BlogList from "./client/components/blog/bloglist";
// import BlogGrid from "./client/components/blog/bloggrid";
// import BlogDetails from "./client/components/blog/blogdetails";
// //pages
// import VideoCall from "./client/components/pages/videocall";
// import VoiceCall from "./client/components/pages/voicecall";
import SearchDoctor from "./client/components/pages/searchdoctor/search-doctor1";
// import Components from "./client/components/pages/component";
// import Calendar from "./client/components/pages/calender";
import Invoice from "./client/components/pages/invoices/invoices";
// import DoctorGrid from "./client/components/patients/doctorgrid";
// import DoctorList from "./client/components/patients/doctorlist";
import DoctorChat from "./client/components/doctors/chat";
import PatientChat from "./client/components/patients/chat";
import MyPatient from "./client/components/doctors/mypatient";
// import Booking2 from "./client/components/patients/booking/booking2";

import Dashboard from "./client/components/patients/dashboard";
// import PatientDependent from "./client/components/patients/dependent";
// import PatientAccounts from "./client/components/patients/accounts";
import Orders from "./client/components/patients/orders";
import MedicalRecords from "./client/components/patients/medicalrecords";
import MedicalDetails from "./client/components/patients/medicaldetails";
import Favourties from "./client/components/patients/dashboard/favourties";
import Profile from "./client/components/patients/dashboard/profile";
import Password from "./client/components/patients/dashboard/password";
import DoctorDashboard from "./client/components/doctors/dashboard";
import SocialMedia from "./client/components/doctors/socialmedia";
import ScheduleTiming from "./client/components/doctors/scheduletimings";
import DoctorPassword from "./client/components/doctors/password";
import Appointments from "./client/components/doctors/appointments";
import PatientProfile from "./client/components/doctors/patientprofile";
import AddPescription from "./client/components/doctors/addpescription";
import AddBilling from "./client/components/doctors/addbilling";
import ProfileSetting from "./client/components/doctors/profilesetting";
import Review from "./client/components/doctors/reviews";
import PatientRegister from "./client/components/register/PatientRegister.jsx";
import Registerstepone from "./client/components/doctors/register/registerstepone";
import Registersteptwo from "./client/components/doctors/register/registersteptwo";
import Registerstepthree from "./client/components/doctors/register/registerstepthree";
// import Terms from "./client/components/pages/terms";
// import Policy from "./client/components/pages/policy";
// import Aboutus from "./client/components/pages/aboutus/aboutus";
// import Contactus from "./client/components/pages/contactus/contactus";
// //pharmacy
// import Pharmacy from "./client/components/Pharmacy/pharmacy";
// import pharmacydetail from "./client/components/Pharmacy/pharmactdetail";
// import PharmacySearch from "./client/components/Pharmacy/pharmacysearch";
// import Cart from "./client/components/Pharmacy/cart";
// import Product from "./client/components/Pharmacy/product";
// import ProductDescription from "./client/components/Pharmacy/productdescription";
// import ProductCheckout from "./client/components/Pharmacy/productcheckout";
// import PayoutSuccess from "./client/components/Pharmacy/payoutsuccess";
// import BlankPage from "./client/components/pages/starter page/index.jsx";
// import Pharmacyregister from "./client/components/Pharmacy/pharmacyregister";
// import Pharmacyregisterstepone from "./client/components/Pharmacy/pharmacyregisterstepone";
// import Pharmacyregistersteptwo from "./client/components/Pharmacy/pharmacyregistersteptwo";
// import Pharmacyregisterstepthree from "./client/components/Pharmacy/pharmacyregisterstepthree";
// import Doctorblog from "./client/components/blog/doctorblog/doctorblog";
// import Doctoraddblog from "./client/components/blog/doctorblog/doctoraddblog";
// import Doctorpendingblog from "./client/components/blog/doctorblog/doctorpendingblog";
// import Doctoreditblog from "./client/components/blog/doctorblog/doctoreditblog";
// import EditPrescription from "./client/components/doctors/patientprofile/edit-prescription";
// import EditBilling from "./client/components/doctors/editbilling/index";
// import MapList from "./client/components/patients/map-list/index";
// import OnboardingEmail from "./client/components/pages/doctoronboarding/onboardingemail";
// import OnboardingPersonalize from "./client/components/pages/doctoronboarding/onboardingpersonalize";
// import OnboardingIdentity from "./client/components/pages/doctoronboarding/onboardingidentity";
// import OnboardingPayments from "./client/components/pages/doctoronboarding/onboardingpayments";
// // import onboardingpersonalize from "./client/components/pages/doctoronboarding/onboardingpayments";
// import OnboardingPreferences from "./client/components/pages/doctoronboarding/onboardingpreferences";
// import Onboardingverification from "./client/components/pages/doctoronboarding/onboardingverification";
// import PatientOnboardingEmail from "./client/components/pages/patientonboarding/Email";
// import PatientOnboardingPersonalize from "./client/components/pages/patientonboarding/Personalize";
// import PatientOnboardingDetails from "./client/components/pages/patientonboarding/Details";
// import PatientFamilyDetails from "./client/components/pages/patientonboarding/FamilyDetails";
// import DependantDetails from "./client/components/pages/patientonboarding/DependantDetails";
// import OtherDetails from "./client/components/pages/patientonboarding/OtherDetails";
// import OnboardingEmailOtp from "./client/components/pages/doctoronboarding/onboardingemail-otp";
// import Onboardingphone from "./client/components/pages/doctoronboarding/onboardingphone";
// import Onboardingphoneotp from "./client/components/pages/doctoronboarding/onboardingphoneotp";
// import Onboardingpassword from "./client/components/pages/doctoronboarding/onboardingpassword";
// import PatientEmailOtp from "./client/components/pages/patientonboarding/PatientEmailOtp";
// import PatientPhone from "./client/components/pages/patientonboarding/Patientphone";
// import patientphoneotp from "./client/components/pages/patientonboarding/patientphoneotp";
// import patientpassword from "./client/components/pages/patientonboarding/patientpassword";
// import PhoneOtp from "./client/components/pages/patientonboarding/phoneotp";
// import Producthealthcare from "./client/components/pages/producthealthcare/index";
// import Generalhome from "./client/components/home/general/generalhome.jsx";
// import Comingsoon from "./client/components/pages/coming soon/index.jsx";
// import Maintenance from "./client/components/pages/maintanence/index.jsx";
// import PricingPlan from "./client/components/pages/pricing plan/index.jsx";
// import Error404 from "./client/components/pages/error/Error404.jsx";
// import Error500 from "./client/components/pages/error/Error500.jsx";
import LoginEmail from "./client/components/pages/authentication/login-email.jsx";
import LoginPhone from "./client/components/pages/authentication/login-phone.jsx";
// import LoginEmailOtp from "./client/components/pages/authentication/login-email-otp.jsx";
// import LoginPhoneOtp from "./client/components/pages/authentication/login-phone-otp.jsx";
// import PatientSignup from "./client/components/pages/authentication/patient-signup.jsx";
import AuthRouter from "./client/components/pages/authentication/signup.jsx";
// import SuccessSignup from "./client/components/pages/authentication/success-signup.jsx";
// import DoctorSignup from "./client/components/pages/authentication/doctor-signup.jsx";
// import Home4 from "./client/components/home/home4.jsx";
// import Faq from "./client/components/pages/faq/index.jsx";
// import EmailOtp from "./client/components/pages/authentication/email-otp.jsx";
// import MobileOtp from "./client/components/pages/authentication/phone-otp.jsx";
import AvailableTiming from "./client/components/doctors/availabletiming/index.jsx";
import Accounts from "./client/components/doctors/account/index.jsx";
// import Cardiohome from "./client/components/home/cardiology/cardiohome.jsx";
// import Paediatrichome from "./client/components/home/paediatric/paediatrichome.jsx";
// import Home6 from "./client/components/home/home6.jsx";
// import CosmeticsHome from "./client/components/home/home11";
// import SearchDoctor2 from "./client/components/pages/searchdoctor/search-doctor2.jsx";
// import Consultation from "./client/components/home/consultation.jsx";
// import Payment from "./client/components/home/payment.jsx";
// import Bookingsuccess from "./client/components/home/bookingsuccess.jsx";
// import Patientdetails from "./client/components/home/patientdetails.jsx";
// import Loginemail from "./client/components/home/loginemail.jsx";
// import HomecareHome from "./client/components/home/HomecareHome/index.jsx";
// import HomeTwelve from "./client/components/home/home12/hometwelve.jsx";
const AppContainer = function (props) {
  // const config = "/react/template/";
  if (props) {
    const url = props.location.pathname.split("/")[1];

    useEffect(() => {
      const handleMouseMove = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorOuter) {
          cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }

        if (cursorInner) {
          cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
      };

      const handleMouseEnter = () => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorInner) {
          cursorInner.classList.add("s");
        }

        if (cursorOuter) {
          cursorOuter.classList.add("s");
        }
      };

      const handleMouseLeave = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (
          event.target.tagName !== "A" ||
          !event.target.closest(".cursor-pointer")
        ) {
          if (cursorInner) {
            cursorInner.classList.remove("cursor-hover");
          }

          if (cursorOuter) {
            cursorOuter.classList.remove("cursor-hover");
          }
        }
      };

      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.style.visibility = "visible";
      }

      if (cursorOuter) {
        cursorOuter.style.visibility = "visible";
      }

      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <Router basename={`${config.publicPath}`}>
        {" "}
        {url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) : url === "pharmacyadmin" ? (
          <div>
            <Switch>
              <Route path="/pharmacyadmin" component={PharmacyadminApp} />
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              {/* Home */}
              <Route path="/index" exact component={Home} />
              {/* Status: need to merge navbar with index 7 - responsiveness is good */}
              <Route path="/index-7" exact component={Home7} />

              {/* booking process */}
              <Route
                path="/patient/doctor-profile"
                exact
                component={DoctorProfile}
              />
              <Route path="/patient/booking1" exact component={Booking} />
              <Route path="/patient/checkout" exact component={Checkout} />
              <Route
                path="/patient/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />

              {/* Login  */}
              <Route path="/pages/login-email" exact component={LoginEmail} />
              <Route path="/pages/login-phone" exact component={LoginPhone} />
              <Route
                path="/signup"
                exact
                render={() => <AuthRouter type={"signup"} />}
              />
              <Route
                path="/signin"
                exact
                render={() => <AuthRouter type={"signin"} />}
              />
              <Route
                path="/pages/forgot-password2"
                exact
                component={ForgotPassword2}
              />

              {/* Patient registration */}
              <Route
                path="/patient/register"
                exact
                component={PatientRegister}
              />
              {/* <Route
                path="/patient/patientregisterstep-1"
                exact
                component={Patientregisterstepone}
              />
              <Route
                path="/patient/patientregisterstep-2"
                exact
                component={Patientregistersteptwo}
              />
              <Route
                path="/patient/patientregisterstep-3"
                exact
                component={Patientregisterstepthree}
              />
              <Route
                path="/patient/patientregisterstep-4"
                exact
                component={Patientregisterstepfour}
              />
              <Route
                path="/patient/patientregisterstep-5"
                exact
                component={Patientregisterstepfive}
              /> */}
              {/* Patient dashboard  */}
              <Route path="/patient/dashboard" exact component={Dashboard} />
              <Route path="/patient/orders" exact component={Orders} />
              <Route
                path="/patient/medicaldetails"
                exact
                component={MedicalDetails}
              />
              <Route
                path="/patient/medicalrecords"
                exact
                component={MedicalRecords}
              />
              <Route path="/patient/profile" exact component={Profile} />
              <Route
                path="/patient/change-password"
                exact
                component={Password}
              />
              <Route path="/patient/favourites" exact component={Favourties} />

              {/* Doctor registration  */}
              <Route
                path="/doctor/register"
                exact
                component={DoctorRegister}
              />
              {/* <Route
                path="/registerstepone"
                exact
                component={Registerstepone}
              />
              <Route
                path="/register-step-2"
                exact
                component={Registersteptwo}
              />
              <Route
                path="/register-step-3"
                exact
                component={Registerstepthree}
              /> */}

              {/* Doctor dashboard  */}
              <Route
                path="/doctor/doctor-dashboard"
                exact
                component={DoctorDashboard}
              />

              <Route
                path="/doctor/appointments"
                exact
                component={Appointments}
              />
              <Route
                path="/doctor/patient-profile"
                exact
                component={PatientProfile}
              />

              <Route 
                path="/doctor/my-patients" 
                exact 
                component={MyPatient} 
              />

              <Route
                path="/doctor/schedule-timing"
                exact
                component={ScheduleTiming}
              />

              <Route
                path="/doctor/available-timing"
                exact
                component={AvailableTiming}
              />

              <Route
                path="/doctor/social-media"
                exact
                component={SocialMedia}
              />

              <Route
                path="/doctor/doctor-change-password"
                exact
                component={DoctorPassword}
              />
              <Route path="/doctor/chat-doctor" exact component={DoctorChat} />
              <Route path="/doctor/login" exact component={DoctorLogin} />
              <Route path="/patient/login" exact component={PatientLogin} />


              {/* <Route path="/patient/doctor-grid" exact component={DoctorGrid} />
              <Route path="/patient/doctor-list" exact component={DoctorList} />
              <Route path="/pages/video-call" exact component={VideoCall} />
              <Route path="/pages/voice-call" exact component={VoiceCall} />

              <Route path="/register" exact component={Register} />
              <Route
                path="/pages/forgot-password"
                exact
                component={ForgotPassword}
              />

              <Route path="/pages/email-otp" exact component={LoginEmailOtp} />
              <Route path="/pages/phone-otp" exact component={LoginPhoneOtp} />
              <Route path="/pages/eotp" exact component={EmailOtp} />
              <Route path="/pages/motp" exact component={MobileOtp} />

              <Route
                path="/pages/patient-signup"
                exact
                component={PatientSignup}
              />
              <Route
                path="/pages/doctor-signup"
                exact
                component={DoctorSignup}
              />
              <Route path="/success-signup" exact component={SuccessSignup} />
               */}

              {/* home */}
              {/* <Route path="/index" exact component={Home} />
              <Route path="/index" exact component={Generalhome} />
              <Route path="/homeslider1" exact component={HomeSlider1} />
              <Route path="/index-3" exact component={Home3} />
              <Route path="/homeslider2" exact component={HomeSlider2} />
              <Route path="/index-5" exact component={Cardiohome} />
              <Route path="/index-8" exact component={Paediatrichome} />

              <Route path="/index-6" exact component={Home6} />
              <Route path="/index-4" exact component={Home4} />
              <Route path="/index-9" exact component={Home9} />
              <Route path="/index-10" exact component={Home10} />
              <Route path="/home11" exact component={Home11} />
              <Route path="/index-11" exact component={CosmeticsHome} />
              <Route path="/index-12" exact component={HomeTwelve} />
              <Route path="/home12" exact component={Home12} />
              <Route path="/home13" exact component={Home13} />
              <Route path="/home14" exact component={Home14} /> */}

              {/* blog */}
              {/* <Route path="/blog/blog-list" exact component={BlogList} />
              <Route path="/blog/blog-grid" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />
              <Route path="/doctor-blog" exact component={Doctorblog} />
              <Route
                path="/blog/doctor-add-blog"
                exact
                component={Doctoraddblog}
              />
              <Route
                path="/blog/doctor-pending-blog"
                exact
                component={Doctorpendingblog}
              />
              <Route
                path="/blog/doctor-edit-blog"
                exact
                component={Doctoreditblog}
              /> */}
              {/* pages */}

              <Route
                path="/patient/search-doctor"
                exact
                component={SearchDoctor}
              />
              <Route path="/pages/invoice" exact component={Invoice} />
              <Route path="/doctor/account" exact component={Accounts} />
              <Route
                path="/doctor/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/doctor/review" exact component={Review} />
              <Route
                path="/patient/patient-chat"
                exact
                component={PatientChat}
              />
              <Route path="/doctor/invoice" exact component={Invoice} />
              {/* <Route
                path="/patient/search-doctor2"
                exact
                component={SearchDoctor2}
              />
              <Route path="/pages/component" exact component={Components} />
              <Route path="/pages/blank-page" exact component={BlankPage} />
              <Route path="/pages/calendar" exact component={Calendar} />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />
              <Route path="/pages/aboutus" exact component={Aboutus} />
              <Route path="/pages/contactus" exact component={Contactus} />
              <Route path="/pages/comingsoon" exact component={Comingsoon} />
              <Route path="/pages/maintenance" exact component={Maintenance} />
              <Route path="/pages/pricing-plan" exact component={PricingPlan} />
              <Route path="/pages/error-404" exact component={Error404} />
              <Route path="/pages/error-500" exact component={Error500} />
              <Route path="/pages/faq" exact component={Faq} />

            
              <Route path="/patient/booking2" exact component={Booking2} />
              <Route
                path="/patient/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route
                path="/patient/dependent"
                exact
                component={PatientDependent}
              />
              <Route
                path="/patient/accounts"
                exact
                component={PatientAccounts}
              />
            
            
              
            
             
             
            
            
           
              <Route
                path="/add-prescription"
                exact
                component={AddPescription}
              />
              <Route path="/add-billing" exact component={AddBilling} />
              <Route
                path="/doctor/doctor-register"
                exact
                component={DoctorRegister}
              />
            
      
              <Route path="/pages/terms" exact component={Terms} />
              <Route path="/pages/privacy-policy" exact component={Policy} /> */}

              {/* Pharmacy */}
              {/* <Route
                path="/Pharmacy/Pharmacy-index"
                exact
                component={Pharmacy}
              />
              <Route
                path="/Pharmacy/Pharmacy-details"
                exact
                component={pharmacydetail}
              />
              <Route
                path="/Pharmacy/pharmacy-search"
                exact
                component={PharmacySearch}
              />
              <Route path="/Pharmacy/product-all" exact component={Product} />
              <Route
                path="/Pharmacy/product-description"
                exact
                component={ProductDescription}
              />
              <Route path="/Pharmacy/cart" exact component={Cart} />
              <Route
                path="/Pharmacy/product-checkout"
                exact
                component={ProductCheckout}
              />
              <Route
                path="/Pharmacy/payment-success"
                exact
                component={PayoutSuccess}
              />
              <Route
                path="/Pharmacy/pharmacy-register"
                exact
                component={Pharmacyregister}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-1"
                exact
                component={Pharmacyregisterstepone}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-2"
                exact
                component={Pharmacyregistersteptwo}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-3"
                exact
                component={Pharmacyregisterstepthree}
              />
              <Route
                path="/editprescription"
                exact
                component={EditPrescription}
              />
              <Route path="/editbilling" exact component={EditBilling} />
              <Route path="/patient/map-list" exact component={MapList} />
              <Route
                path="/pages/onboarding-email"
                exact
                component={OnboardingEmail}
              />
              <Route
                path="/pages/onboarding-identity"
                exact
                component={OnboardingIdentity}
              />
              <Route
                path="/pages/onboarding-payments"
                exact
                component={OnboardingPayments}
              />
              <Route
                path="/pages/onboarding-personalize"
                exact
                component={OnboardingPersonalize}
              />
              <Route
                path="/pages/onboarding-preferences"
                exact
                component={OnboardingPreferences}
              />
              <Route
                path="/pages/onboarding-verification"
                exact
                component={Onboardingverification}
              />
              <Route
                path="/pages/patient-email"
                exact
                component={PatientOnboardingEmail}
              />
              <Route
                path="/pages/patient-personalize"
                exact
                component={PatientOnboardingPersonalize}
              />
              <Route
                path="/pages/patient-details"
                exact
                component={PatientOnboardingDetails}
              />
              <Route
                path="/pages/patient-family-details"
                exact
                component={PatientFamilyDetails}
              />
              <Route
                path="/pages/patient-dependant-details"
                exact
                component={DependantDetails}
              />
              <Route
                path="/pages/patient-other-details"
                exact
                component={OtherDetails}
              />
              <Route
                path="/pages/onboarding-email-otp"
                exact
                component={OnboardingEmailOtp}
              />
              <Route
                path="/pages/onboarding-phone"
                exact
                component={Onboardingphone}
              />
              <Route
                path="/pages/onboarding-phone-otp"
                exact
                component={Onboardingphoneotp}
              />
              <Route
                path="/pages/onboarding-password"
                exact
                component={Onboardingpassword}
              />
              <Route
                path="/pages/patient-email-otp"
                exact
                component={PatientEmailOtp}
              />
              <Route
                path="/pages/patient-phone"
                exact
                component={PatientPhone}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={patientphoneotp}
              />
              <Route
                path="/pages/patient-password"
                exact
                component={patientpassword}
              />
              <Route
                path="/pages/product-healthcare"
                exact
                component={Producthealthcare}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={PhoneOtp}
              />

              <Route path="/consultation" exact component={Consultation} />
              <Route path="/payment" exact component={Payment} />
              <Route path="/bookingsuccess" exact component={Bookingsuccess} />
              <Route path="/patientdetails" exact component={Patientdetails} />
              <Route path="/loginemail" exact component={Loginemail} />
              <Route path="/index-13" exact component={HomecareHome} /> */}
            </Switch>
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
