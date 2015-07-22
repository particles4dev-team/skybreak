import React from 'react';
import Router from 'react-router';
import routes from './components/Routes';

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('root'));
});