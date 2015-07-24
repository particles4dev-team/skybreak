import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

let Home = React.createClass({
  statics: {
    fetchData: function () {
      // console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
      // axios.get('http://localhost:4000/api/posts')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (response) {
      //   console.log(response);
      // });
      return {
        message: 'message'
      };
    },
  },
  /**
   * propTypes
   * @property {string} path URL path
   */
  propTypes: {
    path: React.PropTypes.string
  },
  componentWillMount: function(){
    // console.log('componentWillMount');
    // // Make a request for a user with a given ID
    // var self = this;
    // axios.get('http://localhost:4000/api')
    // .then(function (response) {
    //   console.log(response);
    //   self.setState(response.data);
    // })
    // .catch(function (response) {
    //   console.log(response);
    // });
  },
  render: function () {
    var posts = this.props.data['home'];
    return (
      <div>
        <div className="sub-nav">
          <a href="/" className="select-posts active">Posts</a>
          <a href="/categories" className="select-categories">Categories</a>
        </div>
        <div className="home-page-posts animated fadeIn ">
          <article className="post">
            <div className="post-preview col-xs-10  no-gutter">
            <h2>
              <Link to="post" params={{id: "123"}}>
                weekly update 2015-07-10
              </Link>
            </h2>
            <p>Thông tin tuần 2015-07-10</p>
            <p className="meta">
              <a href="author.html">Le Hoang</a> in <a href="category.html">Weekly Update</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 23 minute read
            </p>
            </div>
          </article>
          <article className="post">
            <div className="post-preview col-xs-10 no-gutter">
              <h2><a href="post.html">Builing, Hacking, Creating</a></h2>
              <p>Is it better to start from scratch or build on someone elses work. My thoughts.</p>
              <p className="meta">
                <a href="author.html">Mad Hacker</a> in <a href="category.html">Easy Living</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 9 minute read
              </p>
            </div>
          </article>

          <article className="post">
            <div className="post-preview col-xs-10 no-gutter">
              <h2><a href="post.html">Builing, Hacking, Creating</a></h2>
              <p>Is it better to start from scratch or build on someone elses work. My thoughts.</p>
              <p className="meta">
                <a href="author.html">Mad Hacker</a> in <a href="category.html">Easy Living</a> <i className="link-spacer"></i> <i className="fa fa-bookmark"></i> 9 minute read
              </p>
            </div>
          </article> 
        </div>
        {/* 
        <div className="col-sm-9 col-sm-offset-3">
          <h1>{ posts.message }</h1>
          <Link to="about">
            about
          </Link>
          <br/>
          <Link to="inbox">
            inbox
          </Link>
        </div>
        */}
      </div>
    );
  }
});

module.exports = Home;