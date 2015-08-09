import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
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
                            <h5 className="block trimtext" style={{"wordWrap": "break-word"}}>{this.props.title}</h5>
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