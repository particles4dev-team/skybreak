import React from 'react';
import {Link} from 'react-router';

let Home = React.createClass({
  render: function () {
    return (
      <div className="col-sm-9 col-sm-offset-3">
        <Link to="about">
          about23
        </Link>
        <br/>
        <Link to="inbox">
          inbox23
        </Link>
      </div>
    );
  }
});

module.exports = Home;