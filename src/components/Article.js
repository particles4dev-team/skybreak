import React from 'react';
import {Link} from 'react-router';

let Article = React.createClass({
  render: function () {
    return (
      <article className="post">
        <div className="post-preview col-xs-10 no-gutter">
          <h2>
            <Link to="post" params={{id: this.props._id}}>
              {this.props.title}
            </Link>
          </h2>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
});

module.exports = Article;