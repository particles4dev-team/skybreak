import React from 'react';
import Router from 'react-router';

const RouteHandler = Router.RouteHandler;

let Layout = React.createClass({
  render: function () {
  	return (
      <div>
        <RouteHandler {...this.props} />
      </div>
    )
  }
});

module.exports = Layout;