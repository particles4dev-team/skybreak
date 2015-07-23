import React from 'react';

let Sidebar = React.createClass({
  render: function () {
    return (
      <div>
        <section className="sidebar col-md-5 col-sm-12" style={{"backgroundImage": "url(http://adventurethemes.com/demo/writer/html/v2/img/default-sidebar.jpg"}}>
              <span className="menu-trigger animated fadeInDown">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>

              {/* if the user has javascript disabled they can still use the menu */}
              <noscript>
                <div className="no-js-menu">
                  <ul>
                    <li><i className="fa fa-home"></i><a href="index.html">Home</a></li>
                    <li><i className="fa fa-user"></i><a href="author.html">John Smith</a></li>
                    <li><i className="fa fa-anchor"></i><a href="page.html">About</a></li>
                    <li><i className="fa fa-star"></i><a href="favorites.html">Favorites</a></li>
                    <li><i className="fa fa-paper-plane"></i><a href="contact.html">Contact</a></li>
                    <li><i className="fa fa-file"></i><a href="post.html">Post Page</a></li>
                    <li><i className="fa fa-file"></i><a href="post-sidebar.html">Post with Sidebar</a></li>
                    <li><i className="fa fa-home"></i><a href="alt-home.html">Alternate Home</a></li>
                    <li><i className="fa fa-image"></i><a href="category.html">Category Page</a></li>
                  </ul>
                </div>
              </noscript>
              {/* end no script */}

              <div className="site-info">
                <div className="primary-info">
                  {this.props.children}
                </div>
                <div className="secondary-info">
                  <p>
                    <a className="btn btn-primary" href="#"><i className="fa fa-user-plus"></i>Join Our Newsletter</a>
                  </p>
                </div>
              </div>
        </section>
        {/* end sidebar */}
      </div>
    );
  }
});

module.exports = Sidebar;