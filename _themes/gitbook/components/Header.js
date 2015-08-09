import React from 'react';
import {Link} from 'react-router';

let Header = React.createClass({
    render: function () {
        return (		
			<header className={this.props.className}>
                <div className="row">
                    <Link to="home" className="logo">
                        <img src="https://iojs.org/images/1.0.0.png" alt="Mood" className="logo-img" />
                        <h1 className="logo-text text-uppercase ">{this.props.title}</h1>
                    </Link>
                    <h2 className="tagline text-uppercase">{this.props.description}</h2>
                </div>
            </header>
     	);
    }
});

module.exports = Header;