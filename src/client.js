/*global document, window*/
"use strict";

import React from 'react';
import Router from 'react-router';
import routes from './components/Routes';

require('./sass/main.scss');

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('root'));
});
