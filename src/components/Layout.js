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
        <main className="container-fluid">
            <div className="row">
                <div id="menu-target"></div>
                <Sidebar className="sidebar col-md-4 col-sm-12">
                    <h1>
                        <Link to="home">
                            {title}
                        </Link>
                    </h1>
                    <p>{description}</p>
                </Sidebar>
                <section className="col-md-8 col-sm-12 col-md-offset-4 main-content">
                    <RouteHandler {...this.props} style={{overflow: 'auto'}}/>

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
    );
    }
});

module.exports = Layout;