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
          <p className="meta">
            <a href="author.html">{this.props.author.name}</a> in <a href="category.html">{this.props.category}</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 23 minute read
          </p>
        </div>
      </article>
    );
  }
});

module.exports = Article;