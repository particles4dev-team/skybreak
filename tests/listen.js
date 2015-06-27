var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('listen', function(){
    describe('listen assigns port', function(){
        it('gith.listen', function(){
            var gith = githFactory.create();
            gith.listen( 9001 );
            assert.strictEqual( gith.port, 9001, 'gith.listen should assign the port' );
            var gith2 = githFactory.create( 9000 );
            gith2.listen( 9002 );
            assert.strictEqual( gith2.port, 9002, 'gith.listen overrites port' );
            gith.close();
            gith2.close();
        });
    })
});