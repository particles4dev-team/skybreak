var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('constructor', function(){
    describe('constructor (githFactory) has create method', function(){
        it('require("gith") has .create method', function(){
            assert.ok(!!githFactory.create, "require('gith') has .create method");
        });
    })

    describe('githFactory.create is a function and can set port', function(){
        it('githFactory.create', function(){
            assert.strictEqual( typeof githFactory.create, 'function', 'githFactory.create is a function' );
            var gith = githFactory.create( 9001 );
            assert.strictEqual( gith.port, 9001, 'githFactory.create assigned a port correctly' );
            var gith2 = githFactory.create();
            assert.strictEqual( gith2.port, undefined, 'githFactory.create works fine with no port' );
            gith.close();
        });
    })

    describe('Created giths are unique', function(){
        it('Should be unique things, yo', function(){
            var g1 = githFactory.create(8000);
            var g2 = githFactory.create(8001);
            assert.notEqual( g1, g2, 'Should be unique things, yo' );
            g1.close();
            g2.close();
        });
    })

    describe('function based way to create if someone wants to', function(){
        it('listen', function(){
            var gith = githFactory();
            assert.ok( gith.listen );
        });
    })

});