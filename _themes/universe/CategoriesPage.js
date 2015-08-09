import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import axios from 'axios';
import Mixin from './components/Mixin';
const { getCategories } = require("impl");

console.log(Mixin, 'Mixin');

let count = 0;
let Category = React.createClass({
    render: function () {
        count++;
        let pic = '/public/images/cover-' + count + '.jpg';
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
            return getCategories(routerName);
        },
    },
    render: function () {
        count = 0;
        let tags = this.props.data['categories'];
        let rows = [];
        for (let prop in tags.data) {
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
