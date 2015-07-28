import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import Sidebar from './Sidebar';
import nconf from 'nconf';

const RouteHandler = Router.RouteHandler;

let Layout = React.createClass({
  render: function () {
    var title = nconf.get("general:title");
    var description = nconf.get("general:description");
    return (
      <div>
        <main className="container left-container">
          <div className="row">
            <div id="menu-target"></div>
            <Sidebar>
              <h1>
                <Link to="home">
                  {title}
                </Link>
              </h1>
              <p>{description}</p>
              <p>News, weeekly update, tutorials ...</p>
            </Sidebar>
            <section className="col-md-7 col-sm-12 col-md-offset-5 main-content">
              <RouteHandler {...this.props} />

              {/* Home page posts */}
              <footer className="split-footer">
                <Link to="about">
                  About
                </Link>
                <i className="link-spacer"></i>
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