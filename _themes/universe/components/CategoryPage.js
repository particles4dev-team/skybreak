import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import Article from './Article';
const CategoryMixin = require("mixin/Category");

let CategoryPage = React.createClass({
    mixins: [CategoryMixin], // Use the mixin
    render: function () {
        var posts = this.props.data['category'].data.posts;
        var rows = [];
        if(posts)
            posts.forEach(function(post) {
                rows.push(
                <Article {...post} key={post._id}/>
                );
            });
        return (
        <div style={this.props.style}>
            <div className="sub-nav">
                <Link to="home" className="select-posts">
                    Posts
                </Link>
                <Link to="categories" className="select-categories active">
                    Categories
                </Link>
            </div>
            <div className="home-page-posts animated fadeIn ">
                {rows}
            </div>
        </div>
        );
    }
});

module.exports = CategoryPage;
