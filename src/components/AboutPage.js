import React from 'react';
import Router from 'react-router';
const Navigation = Router.Navigation;

let About = React.createClass({
  mixins: [ Navigation ],
  getInitialState: function() {
    return {};
  },
  handleClick: function(event) {
    this.goBack();
  },
  render: function () {
    var data = this.props.data;
    if(data)
      var message = data.message;
    else
      var message = 'not found';
    return (
      <div>
        <h2>About</h2>
        <div onClick={this.handleClick}>Go Back { message }</div>
      </div>
    );
  }
});

module.exports = About;