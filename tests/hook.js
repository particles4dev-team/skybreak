var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('other hook types', function(){
    describe('pull-request.json', function(){
        it('equal', function(done){
            var json = require( './payloads/pull-request.json' );
            var gith = githFactory.create();
            var g = gith();

            g.on( 'all', function( payload ) {
                // No particular expectation except it must not crash and present original payload
                assert.equal(payload.original, json);
                done();
            });
            gith.payload( json );
        });
    })
});