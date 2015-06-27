var assert      = require("assert");
var githFactory = require('../libs/gith.js');
var http        = require('http');
var querystring = require('querystring');

describe('ip filtering', function(){
    describe('custom ip', function(){
        it('One or more default safe IPs should be present', function(){
            var gith = githFactory.create();
            assert.ok( gith.ips.length > 0,  'One or more default safe IPs should be present' );
        })
    })
    describe('request from non-approved ip fails', function(){
        it('Connections on local host should not be permitted', function(done){
            var json = require('./payloads/add-file-and-dir.json');
            var gith = githFactory.create( 9001 );
            var g = gith();
            g.on( 'all', function() {
                assert.ok( false, 'Connections on local host should not be permitted' );
                done();
                gith.close();
            });

            var request = http.request({
                port: 9001,
                host: 'localhost',
                method: 'POST'
            });
            request.write( 'payload=' + querystring.escape( JSON.stringify( json ) ) );
            request.end();

            setTimeout( function() {
                done();
                gith.close();
            },300);
        })
    })
});