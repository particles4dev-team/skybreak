import React from 'react';
import Router from 'react-router';
const Navigation = Router.Navigation;

let About = React.createClass({
  mixins: [ Navigation ],
  statics: {
    fetchData: function () {
      return {
        message: 'message'
      };
    },
  },
  handleClick: function(event) {
    this.goBack();
  },
  render: function () {
    var data = this.props.data['about'];
    var message;
    if(data)
      message = data.message;
    else
      message = 'not found';
    return (
      <div>
        <h2>About</h2>
        { message }
        <div onClick={this.handleClick}>Go Back { message }</div>
      </div>
    );
  }
});

module.exports = About;