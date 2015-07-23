import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import Sidebar from './Sidebar';

const RouteHandler = Router.RouteHandler;

let Layout = React.createClass({
  render: function () {
    return (
      <div>
        <main className="container left-container">
          <div className="row">
            <div id="menu-target"></div>
            <Sidebar>
              <h1>Writer</h1>
              <p>A minimal blogging theme to put your content on show. <a href="/">Look at the features.</a> </p>
              <p>Content is king</p>
            </Sidebar>
            <section className="col-md-7 col-sm-12 col-md-offset-5 main-content">
              <RouteHandler {...this.props} />

              {/* Home page posts */}
              <footer className="split-footer">
                <Link to="about">
                  About
                </Link>
                <i className="link-spacer"></i>
                <a href="post.html">Writer 2015</a>
              </footer>
            </section>
            {/* main content */}
          </div>
        </main>
      </div>
    )
  }
});

module.exports = Layout;