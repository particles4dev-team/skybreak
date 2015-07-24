import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';

let CategoriesPage = React.createClass({
  statics: {
    fetchData: function () {
      return {
        message: 'message'
      };
    },
  },
  render: function () {
    return (
      <div>
        <div className="sub-nav">
          <a href="/" className="select-posts">Posts</a>
          <a href="/categories" className="select-categories active">Categories</a>
        </div>
        <div className="home-page-categories animated fadeIn ">
          <div className="category row">
            <section>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Weekly Update</h2>
                <Link to="category" params={{id: "123"}}>
                  <img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-2.jpg" alt="category-image"/>
                </Link>
              </div>
              
              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>ES2015</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-4.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Tutorials</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-6.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Open Roads</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-9.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Gaming</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-1.jpg" alt="category-image" /></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>City Life</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-3.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Rave Culture</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-5.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Photography</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-7.jpg" alt="category-image"/></a>
              </div>
              
              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Animal Kingdom</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-8.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Beach</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-10.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Climbing</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-11.jpg" alt="category-image"/></a>
              </div>

              <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>Mystery</h2>
                <a href="category.html"><img src="http://adventurethemes.com/demo/writer/html/v2/img/cover-12.jpg" alt="category-image"/></a>
              </div>

            </section>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CategoriesPage;