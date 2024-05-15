import React, { useState } from "react";
import { appoint_bg, eye_white_icon } from "../../imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

function AppointmentHome6() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = useState();

  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };
  return (
    <>
      <section className="appointment-section">
        <div className="appointment-form">
          <div className="container">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="section-heading text-center sec-heading-eye">
                  <img src={eye_white_icon} alt="" className="img-fluid" />
                  <h2 className="text-white">Book an appointment</h2>
                </div>
              </div>
            </div>
            <form action="#" className="doctor-search-form">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      <i>
                        <FeatherIcon icon={"user"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <i>
                        <FeatherIcon icon={"mail"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                      <i>
                        <FeatherIcon icon={"phone"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <select className="select form-control">
                        <option>Hospital</option>
                        <option>Online</option>
                        <option>Offline</option>
                      </select>
                      <i>
                        <FeatherIcon icon={"chevron-down"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <select className="select form-control">
                        <option>Doctor Name</option>
                        <option>George</option>
                        <option>Matthew</option>
                      </select>
                      <i>
                        <FeatherIcon icon={"chevron-down"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <select className="select form-control">
                        <option>Online Consultation</option>
                        <option>Online</option>
                        <option>Offline</option>
                      </select>
                      <i>
                        <FeatherIcon icon={"chevron-down"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      {/* <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Date"
                      /> */}
                      <DatePicker
                        className="form-control datetimepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Date"
                      />
                      <i>
                        <FeatherIcon icon={"calendar"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      {/* <input
                        type="time"
                        className="form-control timepicker1"
                        placeholder="Time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                      /> */}
                      <TimePicker
                        value={selectedTime}
                        onChange={handleTimeChange}
                        className="form-control timepicker1"
                        placeholder="Time"
                      />

                      <i>
                        <FeatherIcon icon={"clock"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="form-custom">
                      <select className="select form-control">
                        <option>Appointment Type</option>
                        <option>Online</option>
                        <option>Offline</option>
                      </select>
                      <i>
                        <FeatherIcon icon={"chevron-down"} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <Link
                    to="/patient/search-doctor"
                    className="btn btn-light-blue app-btn">
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="ban-bg">
            <img src={appoint_bg} alt="" className="img-fluid bg-09" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentHome6;
