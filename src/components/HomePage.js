import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

let Home = React.createClass({
  statics: {
    fetchData: function () {
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
    );
  }
});

module.exports = Home;