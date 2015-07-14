import React from 'react';
import Router from 'react-router';
const Navigation = Router.Navigation;

let Inbox = React.createClass({
  mixins: [ Navigation ],
  handleClick: function(event) {
    this.goBack();
  },
  render: function () {
    return (
      <div>
        <h2>Inbox23</h2>
        <div onClick={this.handleClick}>Go Back</div>
      </div>
    );
  }
});

module.exports = Inbox;