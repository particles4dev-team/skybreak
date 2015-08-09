import React from 'react';
import {Link} from 'react-router';
const PostsMixin = require("mixin/Posts");

let Home = React.createClass({
    mixins: [PostsMixin], // Use the mixin

    /**
    * propTypes
    * @property {string} path URL path
    */
    propTypes: {
        path: React.PropTypes.string
    },

    componentWillMount: function(){},

    render: function () {
        return (
            <div style={this.props.style}>

            </div>
        );
    }
});

module.exports = Home;