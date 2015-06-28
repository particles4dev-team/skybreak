var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('gith filtering', function(){
    describe('string matching', function(){
        it('text matched', function(done){
            var json = require( './payloads/create-branch-with-files.json' );
            var gith = githFactory.create();

            var test1 = gith({
                repo: 'danheberden/payloads'
            }).on( 'all', function( payload ) {
                assert.ok( true, 'repo text matched' );
            });

            var test2 = gith({
                repo: 'danheberden/payloads',
                file: 'README.md',
                branch: 'merge-test'
            }).on( 'all', function( payload ) {
                assert.ok( true, 'repo and file and branch text matched' );
            });

            var test3 = gith({
                branch: 'merge-test'
            }).on( 'all', function( payload ) {
                assert.ok( true, 'just branch should match' );
            });

            var test4 = gith({
                repo: 'wrong/repo'
            }).on( 'all', function( payload ) {
                assert.ok( false, 'wrong/repo should have never matched' );
            });

            var test5 = gith({
                repo: 'danheberden/payloads',
                branch: 'nup'
            }).on( 'all', function( payload ) {
                assert.ok( false, 'repo should have matched, but not branch, so.....' );
            });

            var test6 = gith({
                repo: 'wrong/repo',
                branch: 'merge-test'
            }).on( 'all', function( payload ) {
                assert.ok( false, 'branch should have matched, but not repo, so.....' );
            });

            // this needs to be improved
            setTimeout( function(){
                done();
            }, 500 );

            gith.payload( json );
        });
    })
    describe('regex matching', function(){
        it('regexp should match', function(done){
            var json = require( './payloads/tag-v1.0.0.json' );
            var gith = githFactory.create();

            var test1 = gith({
                repo: /payloads/
            }).on( 'all', function( payload ) {
                assert.ok( true, 'repo regexp should match' );
            });

            var test2 = gith({
                repo: 'danheberden/payloads',
                tag: /^v1\.(.*)/
            }).on( 'tag:add', function( payload ) {
                assert.ok( true, 'tag regex should match' );
                assert.equal( payload.matches.tag[1], '0.0', 'regex matches should be stored' );
            });

            var test3 = gith({
                tag: /yeahright/
            }).on( 'all', function( payload ) {
                assert.ok( false, 'non-matching regex should fail' );
            });

            // this needs to be improved
            setTimeout( function(){
                done();
            }, 500 );

            gith.payload( json );
        });
    })
});