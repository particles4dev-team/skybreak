import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Article from './Article';
const { getPosts } = require("../data");

let Home = React.createClass({
    statics: {
        fetchData: function (routerName) {
        console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
        if(__SERVER__){
            return new Promise( function(resolve, reject) {
                // FIXME: reject ???
                getPosts(function (data) {
                    resolve({
                        data: data,
                        routerName: routerName
                    }); 
                });
            });
        }
        return axios.get('/api/posts')
        .then(function (response) {
            return {
                data: response.data,
                routerName: routerName
            };
        })
        .catch(function (error) {
            console.log(error);
        });
        },
    },

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