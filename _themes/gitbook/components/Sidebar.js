import React from 'react';

let Sidebar = React.createClass({
    render: function () {
        return (
            <div id="sidebar" className={this.props.className}>
                <a href="#sidebar" className="sidebar-link" onClick={this.props.sideClickEvent}>
                    <i className="fa fa-bars icon-sidebar-open"></i>
                    <i className="fa fa-close icon-sidebar-close"></i>
                </a>
                <div className="text-center">
                    <a href="http://www.misspato.com" target="_blank">
                        <img src="http://static.tumblr.com/857fa57609ee1465ae8163ad34c07cf2/6az34or/vT8nqx2fp/tumblr_static_85vy8d6fsb0oco8sc0gsoo8ww.jpg" className="user-avatar" />
                    </a>
                    <nav>
                        <ul className="primary-navigation text-uppercase">
                            <li className="nav h5"><a href="/" title="Home">Home</a></li>
                            <li className="nav h5"><a href="/about" title="About">About</a></li>
                            <li className="nav h5"><a href="/buy" title="Buy Theme">Buy Theme</a></li>
                            <li className="nav h5"><a href="/documentation" title="Documentation">Documentation</a></li>
                            <li className="nav h5"><a href="/gallery" title="Gallery">Gallery</a></li>
                            <li className="nav h5"><a href="/html" title="HTML Ipsum">HTML Ipsum</a></li>
                            <li className="nav h5"><a href="/new" title="New">New</a></li>
                            <li className="nav h5"><a href="/ask" title="Contact">Contact</a></li>
                        </ul>
                    </nav>
                    <aside className="widget widget-about">
                        <h5 className="widget-title text-uppercase">About</h5>
                        <div className="description">Mood is a premium Tumblr theme that will make your porfolio shine. It has a minimal but very original look with a zigzag layout. It will stand out from the crowd!</div>
                    </aside>

                    <aside className="widget widget-dribbble">
                        <h5 className="widget-title text-uppercase">Dribbble</h5>
                        <div id="dribbble" className="mini-thumbs">
                        <a href="http://dribbble.com/shots/1521421-Craftista-Tumblr-theme-preview-image" target="_blank" title="Craftista Tumblr theme preview image">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1521421/craftista-tumblrtheme-preview_teaser.png" className="mini-thumb" alt="Craftista Tumblr theme preview image" />
                        </a>
                        <a href="http://dribbble.com/shots/1462453-Photographica-Tumblr-Theme-1-3-Preview" target="_blank" title="Photographica Tumblr Theme 1.3 Preview">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1462453/photographica-tumblrtheme-preview_teaser.png" className="mini-thumb" alt="Photographica Tumblr Theme 1.3 Preview" />
                        </a>
                        <a href="http://dribbble.com/shots/1431680-Misspato-Tumblr-Themes-icons" target="_blank" title="Misspato Tumblr Themes - icons">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1431680/mpthemes-icons_teaser.jpg" className="mini-thumb" alt="Misspato Tumblr Themes - icons" />
                        </a>
                        <a href="http://dribbble.com/shots/1428785-Misspato-Tumblr-Themes-Homepage" target="_blank" title="Misspato Tumblr Themes - Homepage">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1428785/mp-400x300-anim_teaser.gif" className="mini-thumb" alt="Misspato Tumblr Themes - Homepage" />
                        </a>
                        <a href="http://dribbble.com/shots/1428755-PopGallery-Tumblr-Theme" target="_blank" title="PopGallery Tumblr Theme">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1428755/popgallery-800x600_teaser.jpg" className="mini-thumb" alt="PopGallery Tumblr Theme" />
                        </a>
                        <a href="http://dribbble.com/shots/1428751-Horizontalism-Tumblr-Theme-grid-layout" target="_blank" title="Horizontalism Tumblr Theme (grid layout)">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/2681/screenshots/1428751/horizontalismgrid-800x600_teaser.jpg" className="mini-thumb" alt="Horizontalism Tumblr Theme (grid layout)" />
                        </a>
                        </div>
                    </aside>

                    <aside className="widget widget-flickr">
                        <h5 className="widget-title text-uppercase">Flickr</h5>
                        <div id="flickr">
                        <div className="mini-thumbs">
                            <a href="http://www.flickr.com/photos/tinycutethings/19682936580/" title="Marvel (View on Flickr)" target="_black">
                            <img src="http://farm1.staticflickr.com/546/19682936580_2b859f2cbe_s.jpg" className="mini-thumb" alt="Marvel" /></a>
                            <a href="http://www.flickr.com/photos/tinycutethings/19844727376/" title="Marvel (View on Flickr)" target="_black">
                            <img src="http://farm1.staticflickr.com/496/19844727376_e37bb04df3_s.jpg" className="mini-thumb" alt="Marvel" /></a>
                            <a href="http://www.flickr.com/photos/tinycutethings/19682934300/" title="Marvel (View on Flickr)" target="_black">
                            <img src="http://farm1.staticflickr.com/556/19682934300_150dfb2d9c_s.jpg" className="mini-thumb" alt="Marvel" /></a>
                            <a href="http://www.flickr.com/photos/tinycutethings/19599238530/" title="A doll's life (View on Flickr)" target="_black">
                            <img src="http://farm1.staticflickr.com/455/19599238530_9225737d40_s.jpg" className="mini-thumb" alt="A doll's life" /></a>
                            <a href="http://www.flickr.com/photos/tinycutethings/19600442629/" title="Miete and Piet (View on Flickr)" target="_black">
                            <img src="http://farm4.staticflickr.com/3778/19600442629_da9506d320_s.jpg" className="mini-thumb" alt="Miete and Piet" /></a>
                            <a href="http://www.flickr.com/photos/tinycutethings/19778770582/" title="Work or Play? (View on Flickr)" target="_black">
                            <img src="http://farm1.staticflickr.com/256/19778770582_952b3e115d_s.jpg" className="mini-thumb" alt="Work or Play?" /></a>
                        </div>
                        </div>
                    </aside>

                </div>
            </div>
        );
    }
});

module.exports = Sidebar;
