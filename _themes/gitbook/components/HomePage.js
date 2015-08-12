import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import moment from 'moment';
const DocMeta = require("react-doc-meta");
const PostsMixin = require("mixin/Posts");

const COLORS = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f"
];
// TEST META-DATA SEO
var tags = [
    {name: "description", content: "lorem ipsum dolor"},
    {itemProp: "name", content: "The Name or Title Here"},
    {itemProp: "description", content: "This is the page description"},
    {itemProp: "image", content: "http://www.example.com/image.jpg"},
    {name: "twitter:card", content: "product"},
    {name: "twitter:site", content: "@publisher_handle"},
    {name: "twitter:title", content: "Page Title"},
    {name: "twitter:description", content: "Page description less than 200 characters"},
    {name: "twitter:creator", content: "@author_handle"},
    {name: "twitter:image", content: "http://www.example.com/image.html"},
    {name: "twitter:data1", content: "$3"},
    {name: "twitter:label1", content: "Price"},
    {name: "twitter:data2", content: "Black"},
    {name: "twitter:label2", content: "Color"},
    {property: "og:title", content: "Title Here"},
    {property: "og:type", content: "article"},
    {property: "og:url", content: "http://www.example.com/"},
    {property: "og:image", content: "http://example.com/image.jpg"},
    {property: "og:description", content: "Description Here"},
    {property: "og:site_name", content: "Site Name, i.e. Moz"},
    {property: "og:price:amount", content: "15.00"},
    {property: "og:price:currency", content: "USD"},
    {weirdfield: "something", content: "really really cool", hello:"world", meh: "hahaha"}
];

let CirclePost = React.createClass({
    componentWillMount: function(){},

    render: function () {
        let background = _.sample(COLORS);
        return (
             <li className="thumb zigzag">
                {/* 
                <div className="bubble-tag text-uppercase vertical-align text-center round tag-answer">
                    <div className="bubble-text h5">answer</div>
                </div>
           
                <div className="bubble-tag text-uppercase vertical-align text-center round tag-new">
                    <div className="bubble-text h5">new</div>
                </div>
                */}
                <Link to="post" params={{id: this.props._id}}>
                    <div className="thumb-wrapper vertical-align text-center round">
                        <div className="thumb-caption island vertical-align text-center round" style={{background}}>
                            <div className="thumb-quote">
                                <p className="t5 block trimtext" style={{"wordWrap": "break-word"}}>
                                {this.props.title}
                                </p>
                     
                                <h6 className="block text-uppercase text-muted">
                                {moment(this.props.createdAt).format("MMM D, YYYY")}
                                </h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
});

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
                <CirclePost {...post} key={post._id}/>
            );
        });
        return (
            <div className="container-flex" style={this.props.style}>
                <DocMeta tags={tags} />
                <div className="row">
                    <div className="col-xs-12 text-center pad-top-double">
                        <ul className="thumbs list-unstyled list-thumbs thumbs-fade">
                            {rows}
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
        );
    }
});

module.exports = Home;