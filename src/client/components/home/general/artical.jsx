import React from 'react'
import { blog_11, blog_12, blog_13 } from '../image'
import { blog_14 } from '../../imagepath'
import {Link} from "react-router-dom";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

function Artical() {
    return (
        <>
            <section className="articles-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 aos" data-aos="fade-up">
                            <div className="section-header-one text-center">
                                <h2 className="section-title">Latest Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div className="articles-grid w-100">
                                <div className="articles-info">
                                    <div className="articles-left">
                                        <Link to="/blog/blog-details">
                                            <div className="articles-img">
                                                <img
                                                    src={blog_11}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="articles-right">
                                        <div className="articles-content">
                                            <ul className="articles-list nav">
                                                <li>
                                                    <i><FeatherIcon icon="user" /></i> John Doe
                                                </li>
                                                <li>
                                                    <i><FeatherIcon icon="calendar" /></i> 13 Aug, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <Link to="/blog/blog-details">
                                                    Doccure – Making your clinic painless visit?
                                                </Link>
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium{" "}
                                            </p>
                                            <Link to="/blog/blog-details" className="btn">
                                                View Blog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div className="articles-grid w-100">
                                <div className="articles-info">
                                    <div className="articles-left">
                                        <Link to="/blog/blog-details">
                                            <div className="articles-img">
                                                <img
                                                    src={blog_12}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="articles-right">
                                        <div className="articles-content">
                                            <ul className="articles-list nav">
                                                <li>
                                                    <i><FeatherIcon icon="user" /></i> Darren Elder
                                                </li>
                                                <li>
                                                    <i ><FeatherIcon icon="calendar" /></i> 10 Sep, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <Link to="/blog/blog-details">
                                                    What are the benefits of Online Doctor Booking?
                                                </Link>
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium{" "}
                                            </p>
                                            <Link to="/blog/blog-details" className="btn">
                                                View Blog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div className="articles-grid w-100">
                                <div className="articles-info">
                                    <div className="articles-left">
                                        <Link to="/blog/blog-details">
                                            <div className="articles-img">
                                                <img
                                                    src={blog_13}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="articles-right">
                                        <div className="articles-content">
                                            <ul className="articles-list nav">
                                                <li>
                                                    <i ><FeatherIcon icon="user" /></i> Ruby Perrin
                                                </li>
                                                <li>
                                                    <i ><FeatherIcon icon="calendar" /></i> 30 Oct, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <Link to="/blog/blog-details">
                                                    Benefits of consulting with an Online Doctor
                                                </Link>
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium{" "}
                                            </p>
                                            <Link to="/blog/blog-details" className="btn">
                                                View Blog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                            <div className="articles-grid w-100">
                                <div className="articles-info">
                                    <div className="articles-left">
                                        <Link to="/blog/blog-details">
                                            <div className="articles-img">
                                                <img
                                                    src={blog_14}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="articles-right">
                                        <div className="articles-content">
                                            <ul className="articles-list nav">
                                                <li>
                                                    <i  ><FeatherIcon icon="user" /></i> Sofia Brient
                                                </li>
                                                <li>
                                                    <i ><FeatherIcon icon="calendar" /></i> 08 Nov, 2023
                                                </li>
                                            </ul>
                                            <h4>
                                                <Link to="/blog/blog-details">
                                                    5 Great reasons to use an Online Doctor
                                                </Link>
                                            </h4>
                                            <p>
                                                Sed perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium{" "}
                                            </p>
                                            <Link to="/blog/blog-details" className="btn">
                                                View Blog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Artical