import React from 'react';
import nconf from 'nconf';

let ShareSocialMedia = React.createClass({
    render: function () {
        var name = nconf.get('general:name');
        var bio  = nconf.get('general:bio');
        var picture = nconf.get('general:baseUrl') + '/public/ico/W9ics_VG.png';
        var tweetShare = 'http://twitter.com/share?text=' + this.props.post.title;
        if(nconf.get('general:twitter'))
            tweetShare += ('&via=' + nconf.get('general:twitter'));
        return (
        <div>
            <section className="share col-sm-6">
                <h4 className="section-title">Share Post</h4>
                <a className="btn btn-default btn-sm twitter"
                    href={ tweetShare }
                    onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
                    <i className="fa fa-twitter fa-lg"></i>
                    Twitter
                </a>
                <a className="btn btn-default btn-sm facebook"
                    href="https://www.facebook.com/sharer/sharer.php"
                   onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;">
                  <i className="fa fa-facebook fa-lg"></i>
                  Facebook
                </a>
                <a className="btn btn-default btn-sm gplus"
                    onclick="window.open('https://plus.google.com/share?url='+window.location.href, 'google-plus-share', 'width=490,height=530');return false;">
                    <i className="fa fa-google-plus fa-lg"></i>
                    Google+
                </a>
            </section>

            <section className="col-sm-6 author">
                <img width="80" src={ picture } className="img-rounded author-image" />
                <h4 className="section-title author-name">{ name }</h4>
                <p className="author-bio">{ bio }</p>
            </section>
        </div>
        );
    }
});

module.exports = ShareSocialMedia;