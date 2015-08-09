import React from 'react';
import Router from 'react-router';

import NotFound from "./NotFound";
import Home from "./HomePage";
import About from "./AboutPage";
import Categories from "./CategoriesPage";
import Category from "./CategoryPage";
import Post from "./PostPage";
import Layout from "./Layout";

const Route           = Router.Route;
const DefaultRoute    = Router.DefaultRoute;
const NotFoundRoute   = Router.NotFoundRoute;
const Navigation      = Router.Navigation;

/* eslint-disable no-undef */
let routes = (
  <Route name="appBody" path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="about" path="/about" handler={About}/>
    <Route name="categories" path="/categories" handler={Categories}/>
    <Route name="post" path="/post/:id" handler={Post}/>
    <Route name="category" path="/category/:id" handler={Category}/>

    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);
/* eslint-enable no-undef */

module.exports = routes;