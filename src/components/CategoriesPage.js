import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import axios from 'axios';
const { getCategories } = require("../data");

var count = 0;
let Category = React.createClass({
    render: function () {
        count++;
        var pic = '/public/images/cover-' + count + '.jpg';
        return (
            <div className="category-preview col-xs-6 col-sm-4 ">
                <h2>{this.props.title} ({this.props.data.posts.length})</h2>
                <Link to="category" params={{id: this.props.title}}>
                    <img src={pic} alt="category-image"/>
                </Link>
            </div>
        );
    }
});

let CategoriesPage = React.createClass({
    statics: {
        fetchData: function (routerName) {
            console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
            if(__SERVER__){
                return new Promise( function(resolve, reject) {
                    // FIXME: reject ???
                    getCategories(function (data) {
                        resolve({
                            data: data,
                            routerName: routerName
                        }); 
                    });
                });
            }
            return axios.get('/api/categories')
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
    render: function () {
        count = 0;
        var tags = this.props.data['categories'];
        var rows = [];
        for (var prop in tags.data) {
            if( tags.data.hasOwnProperty( prop ) ) {
                rows.push(<Category title={prop} data={tags.data[prop]} />);
            } 
        }
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
            <div className="home-page-categories animated fadeIn">
                
                <div className="category row">
                <section>

                {rows}

                </section>
            </div>
        </div>
    </div>
    );
  }
});

module.exports = CategoriesPage;