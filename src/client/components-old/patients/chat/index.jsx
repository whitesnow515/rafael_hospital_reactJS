/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IMG01,
  IMG02,
  IMG09,
  IMG010,
  IMG011,
  doctor1,
  doctor_thumb3,
  doctor_thumb4,
  doctor_thumb5,
  doctor_thumb6,
  doctor_thumb7,
  doctor_thumb8,
  doctor_thumb9,
  doctor_thumb10,
} from "./img";
import Header from "../../header";
import {
  ChevronLeft,
  MoreVertical,
  Phone,
  PhoneOff,
  PlusCircle,
  Video,
} from "feather-icons-react/build/IconComponents";

const PatientChat = (props) => {
  useEffect(() => {
    document.body.classList.add("chat-page");

    return () => document.body.classList.remove("chat-page");
  }, []);

  return (
    <div>
      <Header {...props} />
      <div className="content top-space">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="chat-window">
                <div className="chat-cont-left">
                  <div className="chat-header">
                    <span>Chats</span>
                    <Link to="#" className="chat-compose">
                      <PlusCircle />
                    </Link>
                  </div>
                  <form className="chat-search">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fas fa-search"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      <Link to="#" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img
                              src={doctor1}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Ruby Perrin</div>
                            <div className="user-last-chat">
                              Hey, How are you?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">2 min</div>
                            <div className="badge badge-success rounded-pill ">
                              15
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat active">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <img
                              src={IMG01}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Fred Ortego</div>
                            <div className="user-last-chat">
                              I'll call you later{" "}
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">8:01 PM</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img
                              src={doctor_thumb3}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Deborah Angel</div>
                            <div className="user-last-chat">
                              Give me a full explanation about our project
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">7:30 PM</div>
                            <div className="badge badge-success rounded-pill ">
                              3
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <img
                              src={doctor_thumb4}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Sofia Brient</div>
                            <div className="user-last-chat">
                              That's very good UI design
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">6:59 PM</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-offline">
                            <img
                              src={doctor_thumb5}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Marvin Campbell</div>
                            <div className="user-last-chat">
                              Yesterday i completed the task
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">11:21 AM</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <img
                              src={doctor_thumb6}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">
                              Dr. Katharine Berthold
                            </div>
                            <div className="user-last-chat">
                              What is the major functionality?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">10:05 AM</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img
                              src={doctor_thumb7}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Linda Tobin</div>
                            <div className="user-last-chat">
                              This has allowed me to showcase not only my
                              technical skills
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">
                              Yesterday
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-offline">
                            <img
                              src={doctor_thumb8}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Paul Richard</div>
                            <div className="user-last-chat">
                              Let's talk briefly in the evening.{" "}
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Sunday</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <img
                              src={doctor_thumb9}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. John Gibbs </div>
                            <div className="user-last-chat">
                              Do you have any collections? If so, what of?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Saturday</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img
                              src={doctor_thumb10}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Dr. Olga Barlow</div>
                            <div className="user-last-chat">
                              Connect the two modules with in 1 day.
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Friday</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="chat-cont-right">
                  <div className="chat-header">
                    <Link id="back_user_list" to="#" className="back-user-list">
                      <ChevronLeft />
                    </Link>
                    <div className="media d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online">
                          <img
                            src={IMG01}
                            alt="User "
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">Dr. Fred Ortego</div>
                        <div className="user-status">online</div>
                      </div>
                    </div>
                    <div className="chat-options">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <Phone size={24} />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <Video />
                      </Link>
                      <Link to="#">
                        <MoreVertical />
                      </Link>
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="media sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Hello. What can I do for you?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:30 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received d-flex">
                          <div className="avatar">
                            <img
                              src={IMG01}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>I'm just looking around.</p>
                                <p>
                                  Will you tell me something about yourself?
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:35 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>Are you there? That time!</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:40 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <img src={IMG010} alt="Attachment" />
                                    <div className="chat-attach-caption">
                                      placeholder.jpg
                                    </div>
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download"></i>
                                    </Link>
                                  </div>
                                  <div className="chat-attachment">
                                    <img src={IMG09} alt="Attachment" />
                                    <div className="chat-attach-caption">
                                      placeholder.jpg
                                    </div>
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download"></i>
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:41 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Where?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>
                                  OK, my name is Limingqiang. I like singing,
                                  playing basketballand so on.
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <img src={IMG011} alt="Attachment" />
                                    <div className="chat-attach-caption">
                                      placeholder.jpg
                                    </div>
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download"></i>
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:50 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received d-flex">
                          <div className="avatar">
                            <img
                              src={IMG01}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>You wait for notice.</p>
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <p>Ok?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:55 PM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="chat-date">Today</li>
                        <li className="media received d-flex">
                          <div className="avatar">
                            <img
                              src={IMG02}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:17 AM</span>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">Edit</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Lorem ipsum dollar sit</p>
                                <div className="chat-msg-actions dropdown">
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fe fe-elipsis-v"></i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="#">
                                      Delete
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:19 AM</span>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">Edit</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received d-flex">
                          <div className="avatar">
                            <img
                              src={IMG01}
                              alt="User "
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <div className="msg-typing">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip"></i>
                        <input type="file" />
                      </div>
                      <input
                        type="text"
                        className="input-msg-send form-control rounded-pill"
                        placeholder="Type something"
                      />
                      <button
                        type="button"
                        className="btn msg-send-btn rounded-pill ms-2"
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal for video*/}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="User " src={IMG01} className="call-avatar" />
                      <h4>Dr. Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <PhoneOff />
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <Phone size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal for call*/}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img alt="User " src={IMG01} className="call-avatar" />
                      <h4>Dr. Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <PhoneOff />
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <Phone />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientChat;
