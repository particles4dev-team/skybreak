import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';

const Navigation = Router.Navigation;

let About = React.createClass({
    mixins: [ Navigation ],
    statics: {},
    handleClick: function(event) {
        this.goBack();
    },
    render: function () {
        return (
        <div style={this.props.style}>
            <div className="sub-nav">
                <Link to="home" className="select-posts">
                    Posts
                </Link>
                <Link to="categories" className="select-categories">
                    Categories
                </Link>
            </div>
            <div className="col-xs-12 single-content">
                <div className="header-content">
                    <h2>About</h2>
                    <h3>Behind the <a href="javascript:;">awesome</a> production.</h3>
                </div>
                <p>Too cultivated use solicitude frequently. Dashwood <a href="javascript:;">likewise</a> up consider continue entrance ladyship oh. Wrong guest given purse power is no. Friendship to
                <strong>connection</strong>&nbsp; an am considered difficulty. Country met pursuit lasting moments why calling certain the. Middletons boisterous our way understood law.</p>
               
                <p className="subtitle">Like I said, never told...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra ligula eget feugiat sollicitudin. Praesent accumsan, ante ut porttitor aliquet, odio felis mollis ante, et pretium arcu ipsum eget turpis. Quisque congue odio tristique, tincidunt arcu a, dignissim neque. Cras ligula erat, porta sed tristique at, sollicitudin sit amet ligula. Quisque eleifend elementum mauris, eu condimentum tortor ultrices a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer hendrerit, arcu a aliquam malesuada, sapien quam tempor neque, nec aliquam odio mi vel diam. Pellentesque egestas pharetra justo, id malesuada erat tincidunt ac. Ut mauris mauris, ultricies ut pharetra sit amet, suscipit sed nibh. Suspendisse vestibulum sem sed rhoncus pharetra. Nunc commodo, neque eget gravida mattis, augue est sollicitudin nunc, elementum aliquet tortor mi ac velit. Ut nec pharetra est. Vestibulum at mauris sapien. Duis sed turpis at lectus egestas rhoncus.</p>
                <p className="pullquote">Ut ullamcorper turpis nec felis vestibulum, vitae pretium mi sodales.</p>
                <p>Suspendisse laoreet consequat pellentesque. Aliquam erat volutpat. Nulla est elit, bibendum sit amet mauris eu, varius sollicitudin nibh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus veniam laborum sapiente, doloribus placeat culpa aliquam asperiores laudantium nobis ipsum ut, suscipit delectus! Aut delectus, voluptate, sunt fugiat ea harum!</p>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptatem optio, excepturi, sapiente corporis nihil quis natus quibusdam odio ex laborum cupiditate minima eos.</blockquote>
                <p>auctor a erat ac, dignissim bibendum urna. Ut aliquet convallis scelerisque. Praesent id luctus leo. Nam vestibulum interdum ligula blandit molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tempore illum inventore sit commodi, id eos nemo est voluptate aperiam tenetur? In, sint sed reprehenderit ipsum voluptas, nam molestias velit.</p>
                <hr/>
                <p>Etiam sed condimentum elit. Curabitur eu malesuada turpis. Nam sit amet dui tellus. Nullam eget neque sed lectus tincidunt fermentum. Aenean ac interdum odio, vitae consectetur erat. Nunc venenatis turpis sed consectetur lacinia. Phasellus euismod odio feugiat, semper ligula in, egestas magna. Duis ullamcorper gravida lacus a blandit. Fusce et diam pellentesque, egestas diam pellentesque, gravida libero. Ut condimentum, nulla ac faucibus porttitor, est dui gravida est, vel varius mi justo at erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisis diam eu libero suscipit lacinia. Sed sollicitudin justo ut fermentum venenatis. Morbi justo magna, pellentesque rutrum scelerisque eget, vehicula ac eros. Nam quis velit ac lorem blandit egestas eget id ante. Integer nibh arcu, vulputate eget luctus vel, porta eu ligula.</p>
                <ul>
                    <li>Maecenas pulvinar, turpis quis luctus tincidunt.</li>
                    <li>Maecenas pulvinar, turpis quis luctus tincidunt.</li>
                    <li>Maecenas pulvinar, turpis quis luctus tincidunt.</li>
                    <li>Maecenas pulvinar, turpis quis luctus tincidunt.</li>
                </ul>
                <p>Lorem massa hendrerit mi, ut dapibus sem enim at nisl. Nullam ut mollis arcu. Quisque lobortis nibh diam, non molestie dui pretium et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quos, mollitia dolor nam soluta consequuntur excepturi eveniet quod autem quasi. Labore dolorum vel voluptates molestias qui perspiciatis eveniet non, culpa!</p>
            </div>
        </div>
    );
    }
});

module.exports = About;