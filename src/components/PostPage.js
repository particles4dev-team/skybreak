import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const Disqus = require("_includes/disqus");
const ShareSocialMedia = require("_includes/shareSocialMedia");
const { getPost } = require("impl");

function decodeTextContent(str) {
    return str.replace(/(&lt;|&gt;|&amp;)/g, function(str) {
        return {
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&'
        }[str];
    })
}

let Post = React.createClass({
    statics: {
        fetchData: function (routerName, params, query) {
        console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
        return getPost(params.id, routerName);
        },
    },
    render: function () {
        var post = this.props.data['post'];
        post.content = decodeTextContent(post.__content);
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
            <div className="col-xs-12 single-content">
                <div dangerouslySetInnerHTML={{__html: post.content}}></div>
            </div>
            <ShareSocialMedia post={post} />
            <Disqus
                shortname="iojs-vi"
                title={post.title} />
        </div>
        );
    }
});

module.exports = Post;
