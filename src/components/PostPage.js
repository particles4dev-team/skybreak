import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

function decodeTextContent(str) {
  return str.replace(/(&lt;|&gt;|&amp;)/g, function(str) {
    return {
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&'
    }[str];
  })
}

let Post = React.createClass({
  statics: {
    fetchData: function (routerName, params, query) {
      console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
      return axios.get('http://localhost:4000/api/post/' + params.id)
      .then(function (response) {
        return {
          data: response.data,
          routerName: routerName
        };
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  render: function () {
    var post = this.props.data['post'];
    post.content = decodeTextContent(post.__content);
    return (
      <div>
        <div className="sub-nav">
          <Link to="home" className="select-posts active">
            Posts
          </Link>
          <Link to="categories" className="select-categories">
            Categories
          </Link>
        </div>
        <div className="col-xs-12 single-content">
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      </div>
    );
  }
});

module.exports = Post;