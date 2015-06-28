var http                = require("http");
var assert              = require("assert");
var githFactory         = require('../libs/gith.js');
var querystring         = require("querystring");

describe('server', function(){
    describe('gith creates a server and listens to unescaped payloads on that port', function(){
        it('payload data should equal sent payload data', function(done){
            var gith = githFactory.create( 9001 );

            var payloadObject = require('./payloads/add-file-and-dir.json');
            var failSafe = false;
            gith().on( 'all', function( payload ) {
                failSafe = true;
                assert.equal( payload.original.after, payloadObject.after, "payload data should equal sent payload data" );
                gith.close();
                done();
            });

            // just incase
            setTimeout( function() {
                if ( !failSafe ) {
                    gith.close();
                    assert.ok( false, 'payload event never fired after 200ms, shutting down server' );
                    done();
                }
            }, 200 );

            var request = http.request({
                port: 9001,
                host: 'localhost',
                method: 'POST'
            });
            request.write( 'payload=' + JSON.stringify( payloadObject ) );
            request.end();
        });
    })

    describe('gith creates a server and listens to escaped payloads on that port', function(){
        it('payload data should equal sent payload data', function(done){
            var gith = githFactory.create( 9001 );

            var payloadObject = require('./payloads/add-file-and-dir.json');
            var failSafe = false;
            gith().on( 'all', function( payload ) {
                failSafe = true;
                assert.equal( payload.original.after, payloadObject.after, "payload data should equal sent payload data" );
                gith.close();
                done();
            });

            // just incase
            setTimeout( function() {
                if ( !failSafe ) {
                    gith.close();
                    assert.ok( false, 'payload event never fired after 200ms, shutting down server' );
                    done();
                }
            }, 200 );

            var request = http.request({
                port: 9001,
                host: 'localhost',
                method: 'POST'
            });
            request.write( 'payload=' + querystring.escape( JSON.stringify( payloadObject ) ) );
            request.end();
        });
    })
});
