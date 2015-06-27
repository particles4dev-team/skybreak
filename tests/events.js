var assert      = require("assert");
var githFactory = require('../libs/gith.js');

describe('gith events', function(){
    describe('add-file-and-dir.json', function(){
        it('matched both files', function(done){
            var json = require( './payloads/add-file-and-dir.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'file:add', function( payload ) {
                assert.deepEqual(['delete-me.txt', 'payloads/add-file.json' ],
                    payload.files.all,
                    'matched both files' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('delete-file.json', function(){
        it('delete branch event should have deleted branch', function(done){
            var json = require( './payloads/delete-file.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'file:delete', function( payload ) {
                assert.deepEqual(
                    [ 'another2.txt' ],
                    payload.files.deleted,
                    'delete branch event should have deleted branch' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('add-file.json', function(){
        it('matched both files', function(done){
            var json = require( './payloads/add-file.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'file:add', function( payload ) {
                assert.deepEqual(
                    [ 'README.md' ],
                    payload.files.all,
                    'matched both files' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('create-branch-with-files.json', function(){
        it('branch add should match payload', function(done){
            var json = require( './payloads/create-branch-with-files.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'branch:add', function( payload ) {
                assert.equal( payload.branch, 'merge-test', 'branch add should match payload' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('tag-v1.0.0.json', function(){
        it('tag add event should fire the right tag, yo', function(done){
            var json = require( './payloads/tag-v1.0.0.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'tag:add', function( payload ) {
                assert.equal( payload.tag, 'v1.0.0', 'tag add event should fire the right tag, yo' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('delete-remote-tag.json', function(){
        it('tag delete event should fire the right tag', function(done){
            var json = require( './payloads/delete-remote-tag.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'tag:delete', function( payload ) {
                assert.equal( payload.tag, 'v1.0.0', 'tag delete event should fire the right tag' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('delete-remote-branch.json', function(){
        it('delete branch event should have deleted branch', function(done){
            var json = require( './payloads/delete-remote-branch.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'branch:delete', function( payload ) {
                assert.equal( payload.branch, 'merge-test', 'delete branch event should have deleted branch' );
                done();
            });
            gith.payload( json );
        });
    })

    describe('tag-on-branch.json', function(){
        it('tagging', function(done){
            var json = require( './payloads/tag-on-branch.json' );
            var gith = githFactory.create();
            var g = gith();
            g.on( 'tag:add', function( payload ) {
                assert.equal( payload.branch, 'itsabranch', 'tagging operation should still get the branch it fired on' );
                assert.equal( payload.sha, '48722bc3552e5e04293a74fd3851c0c643f76657' , 'tagging operation should point to commit' );
                done();
            });
            gith.payload( json );
        });
    })
});