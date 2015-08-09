import React from 'react';

let Footer = React.createClass({
    render: function () {
        return (
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
        );
    }
});

module.exports = Footer;
