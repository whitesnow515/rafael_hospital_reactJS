import React from "react";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import {
  avatar02,
  avatar06,
  avatar07,
  avatar08,
  // avatar09,
  avatar10,
  blog01,
  replyIcon,
} from "../imagepath";
import FeatherIcon from "feather-icons-react";

const BlogDetails = () => {
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Blog Details*/}
              <div className="blog-view">
                <div className="blog-single-post">
                  <Link to="/admin/blog" className="back-btn">
                    <i>
                      <FeatherIcon icon="chevron-left" />
                    </i>
                    Back
                  </Link>
                  <div className="blog-image">
                    <Link to="#">
                      <img alt="" src={blog01} className="img-fluid" />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    What are the benefits of Online Doctor Booking?
                  </h3>
                  <div className="blog-info">
                    <div className="post-list">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/admin/profile">
                              <img src={avatar02} alt="Post Author" />{" "}
                              <span>by Dr. Lester </span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i>
                            <FeatherIcon icon="clock" />
                          </i>{" "}
                          40 Comments
                        </li>
                        <li>
                          <i>
                            <FeatherIcon icon="message-square" />
                          </i>{" "}
                          40 Comments
                        </li>
                        <li>
                          <i>
                            <FeatherIcon icon="grid" />{" "}
                          </i>
                          Topical chemotherapy, Gynacologist
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>
                {/* About Author */}
                <div className="card author-widget clearfix">
                  <div className="card-header">
                    <h4 className="card-title">About Author</h4>
                  </div>
                  <div className="card-body">
                    <div className="about-author">
                      <div className="about-author-img">
                        <div className="author-img-wrap">
                          <Link to="/admin/profile">
                            <img className="img-fluid" alt="" src={avatar02} />
                          </Link>
                        </div>
                      </div>
                      <div className="author-details">
                        <Link to="/admin/profile" className="blog-author-name">
                          Dr. Darren Elder{" "}
                          <span>Orthopaedics, Male, 40 Years Old</span>
                        </Link>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /About Author */}
                {/* Comments */}
                <div className="card blog-comments">
                  <div className="card-header">
                    <h4 className="card-title">Comments (5)</h4>
                  </div>
                  <div className="card-body pb-0">
                    <ul className="comments-list">
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt="" src={avatar06} />
                          </div>
                          <div className="comment-block">
                            <div className="comment-by">
                              <h5 className="blog-author-name">
                                Michelle Fairfax{" "}
                                <span className="blog-date">
                                  {" "}
                                  <i className="me-2">
                                    <FeatherIcon icon="clock" />
                                  </i>
                                  Dec 6, 2017
                                </span>
                              </h5>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam viverra euismod odio, gravida
                              pellentesque urna varius vitae, gravida
                              pellentesque urna varius vitae. Lorem ipsum dolor
                              sit amet, consectetur adipiscing elit.
                            </p>
                            <Link className="comment-btn" to="#">
                              <img
                                className="me-1"
                                alt="icon"
                                src={replyIcon}
                              />{" "}
                              Reply
                            </Link>
                          </div>
                        </div>
                        <ul className="comments-list reply">
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img className="avatar" alt="" src={avatar07} />
                              </div>
                              <div className="comment-block">
                                <div className="comment-by">
                                  <h5 className="blog-author-name">
                                    Gina Moore{" "}
                                    <span className="blog-date">
                                      {" "}
                                      <i className="me-2">
                                        <FeatherIcon icon="clock" />
                                      </i>{" "}
                                      6 Dec 2022
                                    </span>
                                  </h5>
                                </div>
                                <p>
                                  gravida pellentesque urna varius vitae. Lorem
                                  ipsum dolor sit amet, consectetur
                                </p>
                                <Link className="comment-btn" to="#">
                                  <img
                                    className="me-1"
                                    alt="icon"
                                    src={replyIcon}
                                  />{" "}
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img className="avatar" alt="" src={avatar08} />
                              </div>
                              <div className="comment-block">
                                <div className="comment-by">
                                  <h5 className="blog-author-name">
                                    Carl Kelly{" "}
                                    <span className="blog-date">
                                      {" "}
                                      <i className="me-2">
                                        <FeatherIcon icon="clock" />
                                      </i>{" "}
                                      7 Dec 2022
                                    </span>
                                  </h5>
                                </div>
                                <p>
                                  {" "}
                                  pellentesque urna varius vitae, gravida
                                  pellentesque urna consectetur adipiscing elit.
                                  Nam viverra euismod.
                                </p>
                                <Link className="comment-btn" to="#">
                                  <img
                                    className="me-1"
                                    alt="icon"
                                    src={replyIcon}
                                  />{" "}
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt="" src={avatar09} />
                          </div>
                          <div className="comment-block">
                            <div className="comment-by">
                              <h5 className="blog-author-name">
                                Elsie Gilley{" "}
                                <span className="blog-date">
                                  {" "}
                                  <i className="me-2">
                                    <FeatherIcon icon="clock" />
                                  </i>{" "}
                                  7 Dec 2022
                                </span>
                              </h5>
                            </div>
                            <p>
                              sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img className="avatar" alt="" src={avatar10} />
                          </div>
                          <div className="comment-block">
                            <div className="comment-by">
                              <h5 className="blog-author-name">
                                Joan Gardner{" "}
                                <span className="blog-date">
                                  {" "}
                                  <i className="me-2">
                                    <FeatherIcon icon="clock" />
                                  </i>{" "}
                                  12 Dec 2022
                                </span>
                              </h5>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <Link className="comment-btn" to="#">
                              <img
                                className="me-1"
                                alt="icon"
                                src={replyIcon}
                              />{" "}
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Comments */}
                {/* Leave Comment */}
                <div className="card new-comment clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Leave Comment</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">
                          Name <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">
                          Your Email Address{" "}
                          <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="form-group">
                        <textarea
                          rows={4}
                          className="form-control bg-grey"
                          placeholder="Comments"
                          defaultValue={""}
                        />
                      </div>
                      <div className="submit-section">
                        <button
                          className="btn btn-primary submit-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Leave Comment */}
                <div className="card blog-share clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Share the post</h4>
                  </div>
                  <div className="card-body">
                    <ul className="social-share">
                      <li>
                        <Link to="#">
                          <i>
                            <FeatherIcon icon="twitter" />
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i>
                            <FeatherIcon icon="facebook" />
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i>
                            <FeatherIcon icon="linkedin" />
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i>
                            <FeatherIcon icon="instagram" />
                          </i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i>
                            <FeatherIcon icon="youtube" />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Blog Details*/}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default BlogDetails;
