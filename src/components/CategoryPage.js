import React from 'react';
import {Link} from 'react-router';

let CategoryPage = React.createClass({
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
        <div className="home-page-posts animated fadeIn ">
          <article className="post">
            <div className="post-preview col-xs-10  no-gutter">
            <h2>
              <Link to="post" params={{id: "123"}}>
                A great story never told
              </Link>
            </h2>
            <p>It was a cold December morning, as I sat out on my porch I decided today was the day. </p>
            <p className="meta">
              <a href="author.html">James Reddy</a> in <a href="category.html">Storytime</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 23 minute read
            </p>
            </div>
            <div className=" col-xs-2  no-gutter">
              <img src="img/profile-1.jpg" className="user-icon" alt="user-image"/>
            </div>
          </article>
          <article className="post">
            <div className="post-preview col-xs-10 no-gutter">
              <h2><a href="post.html">Builing, Hacking, Creating</a></h2>
              <p>Is it better to start from scratch or build on someone elses work. My thoughts.</p>
              <p className="meta">
                <a href="author.html">Mad Hacker</a> in <a href="category.html">Easy Living</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 9 minute read
              </p>
            </div>
            <div className=" col-xs-2 no-gutter">
              <img src="img/profile-2.jpg" className="user-icon"  alt="user-image"/>
            </div>
          </article>

          <article className="post">
            <div className="post-preview col-xs-10 no-gutter">
              <h2><a href="post.html">Builing, Hacking, Creating</a></h2>
              <p>Is it better to start from scratch or build on someone elses work. My thoughts.</p>
              <p className="meta">
                <a href="author.html">Mad Hacker</a> in <a href="category.html">Easy Living</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 9 minute read
              </p>
            </div>

            <div className=" col-xs-2 no-gutter">
              <img src="img/profile-2.jpg" className="user-icon"  alt="user-image"/>
            </div>
          </article> 
        </div>
      </div>
    );
  }
});

module.exports = CategoryPage;