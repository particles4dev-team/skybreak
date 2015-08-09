import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import nconf from 'nconf';

import Sidebar from './Sidebar';

const RouteHandler = Router.RouteHandler;

let Layout = React.createClass({

    getInitialState: function() {
        return {
            isSidebarOpen: false
        };
    },
    clickSideBar: function (event) {
        event.preventDefault();
        if (!this.state.isSidebarOpen) {
            this.setState({
                isSidebarOpen: true
            });
        }
        else {
            this.setState({
                isSidebarOpen: false
            });
        }
    },
    render: function () {
        var title = nconf.get("general:title");
        var description = nconf.get("general:description");
        return (
        <div className=" body-sidebar-right is-page is-post is-photo is-media is-notreblog ">
            <div className="wrapper">
                        


            <header className={this.state.isSidebarOpen ? 'site-header col-xs-12 island-triple text-center sidebar-visible' : 'site-header col-xs-12 island-triple text-center'}>
                <div className="row">
                    <a href="/" className="logo">
                        <img src="http://static.tumblr.com/5f811e0716ad721c09424523c0c046d1/6az34or/0f7nqx16u/tumblr_static_7pmh8kqd5iosg4gsokg804g44.png" alt="Mood" className="logo-img" />
                        <h1 className="logo-text text-uppercase ">Mood</h1>
                    </a>
                    <h2 className="tagline text-uppercase">Tumblr Theme</h2>
                </div>
            </header>


            <Sidebar sideClickEvent={this.clickSideBar} className={this.state.isSidebarOpen ? 'sidebar sidebar-right sidebar-visible' : 'sidebar sidebar-right'}/>

            <div className="site-content col-xs-12">
                <div className="container-flex">

                <div className="row">
                    <div className="col-xs-12 text-center pad-top-double">
                        <ul className="thumbs list-unstyled list-thumbs thumbs-fade">
                            <li className="thumb  zigzag ">
                                <div className="bubble-tag text-uppercase vertical-align text-center round tag-answer">
                                    <div className="bubble-text h5">answer</div>
                                </div>
           
                                <div className="bubble-tag text-uppercase vertical-align text-center round tag-new">
                                    <div className="bubble-text h5">new</div>
                                </div>

                                <a href="http://mood.themelantic.com/post/123021831074/what-are-the-features-of-the-mood-tumblr-theme">
                                    <div className="thumb-wrapper vertical-align text-center round">
                                        <div className="thumb-caption island vertical-align text-center round">
                                            <h5 className="block trimtext" style={{"wordWrap": "break-word"}}>What are the features of the Mood Tumblr Theme?</h5>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="site-pagination col-xs-12 island-double text-center">
                        <a href="/page/2" title="Previous" className="pagination-previous">
                            <i className="fa fa-arrow-left">
                                <div className="sr-only">Previous</div>
                            </i>
                         </a>
                        <span className="pagination-sep island">|</span>
                        <a href="/page/1" title="Next" className="pagination-next">
                            <i className="fa fa-arrow-right">
                                <div className="sr-only">Next</div>
                            </i>
                        </a>
                    </div>
                </div>

                </div>
            </div>

            <footer className="site-footer text-center col-xs-12">
                <div className="container pad-top pad-bottom">
                    <div className="col-xs-12 pad-bottom-double pad-top-double">
                        <ul className="social-icons list-inline t-center">
                            <li>
                                <a href="#">
                                <i className="fa fa-behance icon"></i>
                                <span className="sr-only">Behance</span>
                                </a>
                            </li>

                            <li>
                                <a href="http://dribbble.com/davidappleyard">
                                <i className="fa fa-dribbble icon"></i>
                                <span className="sr-only">Dribbble</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-deviantart icon"></i>
                                <span className="sr-only">Deviantart</span>
                                </a>
                            </li>

                            <li>
                                <a href="http://facebook.com/themelantic">
                                <i className="fa fa-facebook icon"></i>
                                <span className="sr-only">Facebook</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-flickr icon"></i>
                                <span className="sr-only">Flickr</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-google-plus icon"></i>
                                <span className="sr-only">Google+</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-instagram icon"></i>
                                <span className="sr-only">Instagram</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-pinterest-p icon"></i>
                                <span className="sr-only">Pinterest</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-tumblr icon"></i>
                                <span className="sr-only">Tumblr</span>
                                </a>
                            </li>

                            <li>
                                <a href="http://twitter.com/themelantic">
                                <i className="fa fa-twitter icon"></i>
                                <span className="sr-only">Twitter</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-vimeo-square icon"></i>
                                <span className="sr-only">Vimeo</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                <i className="fa fa-youtube-play icon"></i>
                                <span className="sr-only">YouTube</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="col-xs-12 copyright pad-bottom">
                        Copyright © 2015 Themelantic. All rights reserved. Powered by
                        <a href="http://www.tumblr.com/">Tumblr</a>.
                    </p>

                    <p className="credits text-uppercase col-xs-12 pad-bottom-double">
                        <a href="http://themelantic.com">Mood Theme by Themelantic</a>
                    </p>
                </div>
            </footer>




            </div>
            </div>
        );
    }
});

module.exports = Layout;