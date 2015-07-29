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
          <p className="meta">
            <a className="" href="category.html">James Reddy</a> in <a className="" href="category.html">Storytime</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 23 minute read
          </p>
          <h2 className="favorites">Most recommended posts</h2>
          <div className="posts-block animated fadeIn ">
            <article className="post author-page">
              <div className="post-preview col-xs-10  no-gutter">
                <h2><a href="post.html">8 Reasons to quit your day job</a></h2>
                <p>It was a cold December morning, as I sat out on my porch I decided today was the day. </p>
              </div>
              <div className="col-sm-3 col-md-1 col-md-offset-1 hidden-sm hidden-xs no-gutter">
                <p className="meta">
                  <span className="time"><i className="fa fa-bookmark"></i> 12</span>
                  <span className="min">minutes</span>
                </p>
              </div>
            </article>
            <article className="post author-page">
              <div className="post-preview col-xs-10  no-gutter">
                <h2><a href="post.html">The Best thing about cold showers</a></h2>
                <p>Would you give up your warm shower for an icy one? </p>
              </div>
              <div className="col-sm-3 col-md-1 col-md-offset-1 hidden-sm hidden-xs no-gutter">
                <p className="meta author-page">
                  <span className="time"><i className="fa fa-bookmark"></i> 19</span>
                  <span className="min">minutes</span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Post;