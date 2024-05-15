/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Modalbox from "./modalbox";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../../header";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

const CalendarPage = (props) => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [startDate, setDate] = useState(new Date()),
    [showCategory, setshowCategory] = useState(false),
    [showmodel, setshowmodel] = useState(false),
    [showEvents, setshowEvents] = useState(false),
    [show, setshow] = useState(false),
    [iseditdelete, setiseditdelete] = useState(false),
    [addneweventobj, setaddneweventobj] = useState(null),
    [isnewevent, setisnewevent] = useState(false),
    [event_title, setevent_title] = useState(""),
    [category_color, setcategory_color] = useState(""),
    [calenderevent, setcalenderevent] = useState(""),
    [weekendsVisible, setweekendsVisible] = useState(true),
    [currentEvents, setscurrentEvents] = useState([]),
    defaultEvents = [
      {
        title: "Event Name 4",
        start: Date.now() + 148000000,
        className: "bg-purple",
      },
      {
        title: "Test Event 1",
        start: Date.now(),
        end: Date.now(),
        className: "bg-success",
      },
      {
        title: "Test Event 2",
        start: Date.now() + 168000000,
        className: "bg-info",
      },
      {
        title: "Test Event 3",
        start: Date.now() + 338000000,
        className: "bg-primary",
      },
    ];
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };
  const addEvent = () => {
    setshowEvents(true);
  };
  const categoryHandler = () => {
    setshowCategory(true);
  };

  const handleClose = () => {
    setisnewevent(false);
    setiseditdelete(false);
    setshow(false);
    setshowCategory(false);
    setshowEvents(false);
    setshowmodel(false);
  };

  const handleEventClick = (clickInfo) => {
    setiseditdelete(false);
    setevent_title(clickInfo.event.title);
    setcalenderevent(clickInfo.event);
  };

  const handleDateSelect = (selectInfo) => {
    setisnewevent(true);
    setaddneweventobj(selectInfo);
  };
  const addnewevent = () => {
    let calendarApi = addneweventobj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (event_title) {
      calendarApi.addEvent({
        id: 10,
        title: event_title,
        className: category_color,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay,
      });
    }
    setisnewevent(false);
  };

  const onupdateModalClose = () => {
    setiseditdelete(false);
    setevent_title("");
  };
  const oncreateeventModalClose = () => {
    setevent_title("");
    setisnewevent(false);
  };
  const removeevent = () => {
    calenderevent.remove();
    setiseditdelete(false);
  };
  const clickupdateevent = () => {
    const newArray = defaultEvents;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = event_title;
      }
    }
    defaultEvents = newArray;
    setiseditdelete(false);
  };

  const handleClick = () => {
    setshow(true);
  };

  return (
    <>
      <Header {...props} />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Calendar
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Calendar</h2>
              </div>
              <div className="col-auto text-end float-end ms-auto">
                <Link
                  to="#"
                  onClick={() => setshowmodel("showEvents")}
                  className="btn btn-primary btn-sm"
                >
                  Create Event
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Drag & Drop Event</h4>
                    </div>
                    <div className="card-body">
                      <div id="calendar-events" className="mb-3">
                        <div className="calendar-events">
                          <i className="fas fa-circle text-info"></i> My Event
                          One
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-success"></i> My
                          Event Two
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-danger"></i> My Event
                          Three
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-warning"></i> My
                          Event Four
                        </div>
                      </div>
                      <div className="checkbox  mb-3">
                        <input id="drop-remove" type="checkbox" />
                        <label className="ms-1">Remove after drop</label>
                      </div>
                      <Link
                        to="#0"
                        onClick={() => setshowmodel("showCategory")}
                        className="btn btn-primary w-100"
                      >
                        <i className="fas fa-plus"></i> Add Category
                      </Link>
                    </div>
                  </div>
                </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <FullCalendar
                          plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                          ]}
                          headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                          }}
                          initialView="dayGridMonth"
                          editable={true}
                          selectable={true}
                          selectMirror={true}
                          dayMaxEvents={true}
                          weekends={weekendsVisible}
                          initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                          select={handleDateSelect}
                          eventClick={(clickInfo) =>
                            handleEventClick(clickInfo)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Add Event modal */}
            <div
              id="add_event"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Event</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>
                          Event Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>
                          Event Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*  /Add Event modal */}
            {/*  Create Event modal */}
            <div className="modal custom-modal fade none-border" id="my_event">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Add Event</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body"></div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success save-event submit-btn"
                    >
                      Create event
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger delete-event submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  /Create Event modal */}
            <Modalbox show={showmodel} handleClose={handleClose} />
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default CalendarPage;
