import React from "react";

const BlogListSearch = () => {
  return (
    <div className="card search-widget">
      <div className="card-body">
        <form className="search-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogListSearch;
