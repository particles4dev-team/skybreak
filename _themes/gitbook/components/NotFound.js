import React from 'react';

const NotFound = React.createClass({
  render: function() {
    return (
      <div className="col-sm-9 col-sm-offset-3 header">
        <div className="wrapper-hero">
          <img title="404" className="hero" src="/img/notfound-160x160.svg"/>
          <h1 className="title-page">Not Found</h1>
          <p className="description-page">Yikes! The content you were looking for cannot be found.</p>
          <a className="btn-secondary caps" href="/">Return Home</a>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;