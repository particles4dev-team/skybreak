var http                = require("http");
var EventEmitter2       = require( "eventemitter2" ).EventEmitter2;
var util                = require("util");
var _                   = require("lodash");
var githubHook          = require("./github");
var Middleware          = require('./middlewares');

// the listen method - this gets added/bound in
// module.exports.create, fyi
var listen = function( eventaur, port ) {
    var gith = this;

    // are we changing ports?
    if ( port ) {
        this.port = port;
    }
    if ( !this.port ) {
        throw new Error('.listen() requires a port to be set');
    }

    this.server = http.createServer( function( req, res ) {
        var data = "";
        if ( req.method === "POST" ) {
            req.on( "data", function( chunk ) {
                data += chunk;
            });
        }
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("From IP: " + ip); 
        req.on( "end", function() {
            eventaur.emit( 'payload', data );
            res.writeHead( 200, {
                'Content-type': 'text/html'
            });
            res.end();
        });

    }).listen( port );
};

var Gith = function(eventaur, settings) {
    var gith = this;
    this.settings = settings || {};
    // make this bad boy an event emitter
    EventEmitter2.call( this, {
        delimiter: ':',
        maxListeners: 0
    });

    this._hooks               = new Middleware();
    githubHook.setServer(this);
    this._hooks.register('github', githubHook.action, githubHook);

    // handle bound payloads
    eventaur.on( 'payload', function( originalPayload ) {
        gith._hooks.start(originalPayload);
    });
};

// inherit the EventEmitter2 stuff
util.inherits( Gith, EventEmitter2 );

/*
 * Add Methods
 */
// Gith.prototype.constructor = Gith;

// make require('gith')( 9001 ) work if someone really wants to
module.exports = function( port ) {
    return module.exports.create( port );
};

// make the preferred way of `require('gith').create( 9001 ) work
module.exports.create = function( port ) {

    // make an event emitter to use for the hardcore stuff
    var eventaur = new EventEmitter2({
        delimter: ':',
        maxListeners: 0
    });

    // return a function that
    //     a) holds its own server/port/whatever
    //     b) exposes a listen method
    //     c) is a function that returns a new Gith object
    var ret = function( map ) {
        // make a new Gith with a reference to this factory
        return new Gith( eventaur, map );
    };

    // add the listen method to the function - bind to ret
    // and send eventaur to it
    ret.listen = listen.bind( ret, eventaur );

    // expose ability to close http server
    ret.close = function(){
        this.server.close();
    };

    ret.payload = function( payload ) {
        eventaur.emit( 'payload', payload );
    };

    // if create was sent port, call listen automatically
    if ( port ) {
        ret.listen( port );
    }

    // return the new function
    return ret;
};