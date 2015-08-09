import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';
import nconf from 'nconf';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

const RouteHandler = Router.RouteHandler;

let Layout = React.createClass({

    getInitialState: function() {
        return {
            isSidebarOpen: false
        };
    },
    clickSideBar: function (event) {
        event.preventDefault();
        if (!this.state.isSidebarOpen) {
            this.setState({
                isSidebarOpen: true
            });
        }
        else {
            this.setState({
                isSidebarOpen: false
            });
        }
    },
    render: function () {
        var title = nconf.get("general:title");
        var description = nconf.get("general:description");
        return (
        <div className=" body-sidebar-right is-page is-post is-photo is-media is-notreblog ">
            <div className="wrapper">

            <Header description={description} title={title} className={this.state.isSidebarOpen ? 'site-header col-xs-12 island-triple text-center sidebar-visible' : 'site-header col-xs-12 island-triple text-center'} />

            <Sidebar sideClickEvent={this.clickSideBar} className={this.state.isSidebarOpen ? 'sidebar sidebar-right sidebar-visible' : 'sidebar sidebar-right'}/>

            <div className={this.state.isSidebarOpen ? 'site-content col-xs-12 sidebar-visible' : 'site-content col-xs-12'} >
                <RouteHandler {...this.props}/>
            </div>

            <Footer />

            </div>
        </div>
        );
    }
});

module.exports = Layout;
