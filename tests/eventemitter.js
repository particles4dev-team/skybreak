var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('eventemitter', function(){
    describe('gith() has .emit and .on', function(){
        it('.on .emit present', function(){
            var gith = githFactory.create();
            assert.ok( gith().on, '.on present' );
            assert.ok( gith().emit, '.emit present' );
        });
    })
});