import React from 'react';
import Router from 'react-router';

import NotFound from "./NotFound";
import Home from "./HomePage";
import About from "./AboutPage";
import Inbox from "./InboxPage";
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
    <Route name="inbox" path="/inbox" handler={Inbox}/>

    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);
/* eslint-enable no-undef */

module.exports = routes;