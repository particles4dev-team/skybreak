import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';

const Navigation = Router.Navigation;

let About = React.createClass({
    mixins: [ Navigation ],
    statics: {},
    handleClick: function(event) {
        this.goBack();
    },
    render: function () {
        return (
        <div style={this.props.style}>
            <div className="sub-nav">
                <Link to="home" className="select-posts">
                    Posts
                </Link>
                <Link to="categories" className="select-categories">
                    Categories
                </Link>
            </div>
            <div className="col-xs-12 single-content">
                <div className="header-content">
                    <h2>About</h2>
                    <h4>Cập nhật</h4>
                </div>
            </div>
        </div>
    );
    }
});

module.exports = About;
