import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import moment from 'moment';

const Disqus            = require("_includes/disqus");
const ShareSocialMedia  = require("_includes/shareSocialMedia");
const PostMixin         = require("mixin/Post");

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
    mixins: [PostMixin], // Use the mixin
    render: function () {
        var post = this.props.data['post'];
        post.content = decodeTextContent(post.__content);
        return (
        <div className="container-flex">

            <div className="container">
            <div className="row">
                <article className="col-xs-12 article">

                <header className="article-header col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <h2 className="post-title text-uppercase">{post.title}</h2>
                    <h5 className="text-uppercase pill inline">iojs vi team</h5>
                </header>

                <div className="post-content col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <h6 className="post-date text-uppercase">Posted on {moment(post.createdAt).format("MMM D, YYYY")}</h6>
                    <div className="post-text pad-top-triple pad-bottom-triple">
                        <div className="post-answer" dangerouslySetInnerHTML={{__html: post.content}}></div>
                    </div>

                    <div className="row">
                        <div className="site-pagination col-xs-12 island-double text-center">
                            <a href="http://mood.themelantic.com/post/123025845964" title="Previous" className="pagination-previous">
                                <i className="fa fa-arrow-left">
                                    <div className="sr-only">Previous</div>
                                </i>
                            </a>
                            <span className="pagination-sep island">|</span>
                        </div>
                    </div>
                    <hr />
                    <ul className="post-tags list-unstyled list-inline t6 text-uppercase text-center pad-bottom-double">
                        <li className="post-tags-title"><i className="fa fa-tags"></i></li>
                       {post.tags.map(function(tag, i){
                            return <li>
                                <Link to="home">{tag}</Link>
                            </li>;
                        })}
                    </ul>
                </div>

                <section className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="disqus-comments pad-top-double pad-bottom-double">
                        <h4 className="text-uppercase text-muted">Comment</h4>
                        <hr/>
                        <Disqus
                        shortname="iojs-vi"
                        title={post.title} />
                    </div>
                </section>

              </article>
            </div>
            </div>

        </div>
        );
    }
});

module.exports = Post;
