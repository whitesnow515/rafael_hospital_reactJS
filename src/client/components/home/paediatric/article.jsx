import React from "react";
import {
  articles_1,
  articles_2,
  articles_3,
  articles_4,
  atom_bond2,
} from "../../imagepath";
import { Link } from "react-router-dom";
const Article = () => {
  return (
    <div>
      <section className="latest-articles-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <div className="section-inner-thirteen">
                  <img src={atom_bond2} alt="#" />
                </div>
                <h2>Our Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="articles-thirteen">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <img src={articles_1} alt="#" className="img-fluid" />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <Link to="/blog/blog-details">
                    Our experts will take care of your child...
                  </Link>
                  <p>
                    In the first of this series focused on the prevention and
                    treatment of running injuries, Physiotherapist looks at how
                    runners can prevent injuries by identifying vulnerable
                    muscles through an easy Movement Control Assessment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="articles-thirteen">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <img src={articles_2} alt="#" className="img-fluid" />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <Link to="/blog/blog-details">
                    We Care for your Children Most Effective Treatment
                  </Link>
                  <p>
                    In the first of this series focused on the prevention and
                    treatment of running injuries, Physiotherapist looks at how
                    runners can prevent injuries by identifying vulnerable
                    muscles through an easy Movement Control Assessment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="articles-thirteen">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <img src={articles_3} alt="#" className="img-fluid" />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <Link to="/blog/blog-details">
                    The first step of the toddler Beyond{" "}
                  </Link>
                  <p>
                    In the first of this series focused on the prevention and
                    treatment of running injuries, Physiotherapist looks at how
                    runners can prevent injuries by identifying vulnerable
                    muscles through an easy Movement Control Assessment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="articles-thirteen">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <img src={articles_4} alt="#" className="img-fluid" />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <Link to="/blog/blog-details">
                    Balanced Diet Chart for Children
                  </Link>
                  <p>
                    In the first of this series focused on the prevention and
                    treatment of running injuries, Physiotherapist looks at how
                    runners can prevent injuries by identifying vulnerable
                    muscles through an easy Movement Control Assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
