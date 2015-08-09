import React from 'react';
import {Link} from 'react-router';
import Article from './Article';
const PostsMixin         = require("mixin/Posts");

let Home = React.createClass({
    mixins: [PostsMixin], // Use the mixin

    /**
    * propTypes
    * @property {string} path URL path
    */
    propTypes: {
        path: React.PropTypes.string
    },

    componentWillMount: function(){},

    render: function () {
        var posts = this.props.data['home'];
        var rows = [];
        if(posts)
        posts.data.forEach(function(post) {
            rows.push(
                <Article {...post} key={post._id}/>
            );
        });
        return (
        <div style={this.props.style}>
            <div className="sub-nav">
                <Link to="home" className="select-posts active">
                    Posts
                </Link>
                <Link to="categories" className="select-categories">
                    Categories
                </Link>
            </div>
            <div className="home-page-posts animated fadeIn ">
                {rows}
            </div>
            {/* 
            <div className="col-sm-9 col-sm-offset-3">
                <h1>{ posts.message }</h1>
                <Link to="about">
                    about
                </Link>
                <br/>
                <Link to="inbox">
                    inbox
                </Link>
            </div>
            */}
        </div>
        );
    }
});

module.exports = Home;