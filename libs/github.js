var _                   = require("lodash");
var querystring         = require("querystring");

var filterSettings = function( settings, payload ) {

    if ( !payload ) {
        return false;
    }

    settings = settings || {};

    // add the matches object for later
    payload.matches = {};

    // check all the things
    var checksPassed = true;

    [ 'repo', 'branch', 'file', 'tag' ].forEach( function( thing ) {
        var wat = settings[ thing ];

        // default to a passed state
        var passed = true;

        // was a filter specified? and is it not a wildcard?
        if ( wat && wat !== '*' ) {

            // checking, so default passed to false
            passed = false;

            // make an array of the thing or all the files
            var checks = [].concat( thing === 'file' ? payload.files.all : payload[ thing ] );

            // all the checks - did any of them pass?
            passed = checks.some( function( check ) {

                 // direct match
                if ( wat === check ) {
                    return true;
                }

                // if negated match (!string)
                if ( _.isString( wat ) && wat[0] === "!" &&
                            wat.slice(1) !== check ) {
                    return true;
                }

                // regex?
                if ( _.isRegExp( wat ) ) {
                    var match = check.match( wat );

                    // did it match? huh? did it?
                    if ( match ) {
                        // goddamn files being different
                        if ( thing === 'file' ) {
                            if ( !payload.matches.files ) {
                                payload.matches.files = {};
                            }
                            payload.matches.files[ check ] = match;
                        } else {
                            payload.matches[ thing ] = match;
                        }

                        return true;
                    }
                }
            });

            // usr function?
            if ( _.isFunction( wat ) ) {
                passed = wat( payload[ thing ], payload );
            }

            // assign the final result of this 'thing' to checksPassed
            checksPassed = passed && checksPassed;
        }
    });

    return checksPassed;
};

function Github () {
    this.server = null;
}
Github.prototype.constructor = Github;
/*
 * Add Methods
 */
_.extend(Github.prototype, {
    /**
     *
     */
    setServer: function (server) {
        this.server = server;
    },

    /**
     *
     */
    parseJson:function (data) {
        if ( /^payload=/.test( data ) ) {
            return JSON.parse( querystring.unescape(data.slice(8)) );
        }
        else if(_.isObject(data))
            return data;
        return JSON.parse( querystring.unescape(data) );
    },

    simplifyPayload: function(payload) {

        payload = payload || {};

        var branch = '';
        var tag = '';
        var rRef = /refs\/(tags|heads)\/(.*)$/;

        // break out if it was a tag or branch and assign
        var refMatches = (payload.ref || "").match(rRef);
        if (refMatches) {
            if (refMatches[1] === "heads") {
                branch = refMatches[2];
            }
            if (refMatches[1] === "tags") {
                tag = refMatches[2];
            }
        }

        // if branch wasn't found, use base_ref if available
        if (!branch && payload.base_ref) {
            branch = payload.base_ref.replace(rRef, '$2');
        }

        var simpler = {
            original: payload,
            files: {
                all: [],
                added: [],
                deleted: [],
                modified: []
            },
            tag: tag,
            branch: branch,
            repo: payload.repository ? (payload.repository.owner.name + '/' + payload.repository.name) : null,
            sha: payload.after,
            time: payload.repository ? payload.repository.pushed_at : null,
            urls: {
                head: payload.head_commit ? payload.head_commit.url : '',
                branch: '',
                tag: '',
                repo: payload.repository ? payload.repository.url : null,
                compare: payload.compare
            },
            reset: !payload.created && payload.forced,
            pusher: payload.pusher ? payload.pusher.name : null,
            owner: (payload.repository && payload.repository.owner) ? payload.repository.owner.name : null
        };

        if (branch) {
            simpler.urls.branch = simpler.urls.branch + '/tree/' + branch;
        }
        if (tag) {
            simpler.urls.tag = simpler.urls.head;
        }

        // populate files for every commit
        (payload.commits || []).forEach(function(commit) {
            // github label and simpler label ( make 'removed' deleted to be consistant )
            _.each({
                added: 'added',
                modified: 'modified',
                removed: 'deleted'
            }, function(s, g) {
                simpler.files[s] = simpler.files[s].concat(commit[g]);
                simpler.files.all = simpler.files.all.concat(commit[g]);
            });
        });

        return simpler;
        // todo: use github api to find what files were removed if the
        // head was reset? maybe?
    },

    action: function(originalPayload){
    try {
        var payload = this.parseJson(originalPayload);
        payload = this.simplifyPayload( payload );
        var gith = this.server;
        if ( filterSettings( gith.settings, payload ) ) {
            // all the things
            gith.emit( 'all', payload );

            // did we do any branch work?
            if ( originalPayload.created && originalPayload.forced && payload.branch ) {
                gith.emit( 'branch:add', payload );
            }
            if (    originalPayload.deleted && originalPayload.forced && payload.branch ) {
                gith.emit( 'branch:delete', payload );
            }

            // how about files?
            if ( payload.files.added.length > 0 ) {
                gith.emit( 'file:add', payload );
            }
            if ( payload.files.deleted.length > 0 ) {
                gith.emit( 'file:delete', payload );
            }
            if ( payload.files.modified.length > 0 ) {
                gith.emit( 'file:modify', payload );
            }
            if ( payload.files.all.length > 0 ) {
                gith.emit( 'file:all', payload );
            }

            // tagging?
            if ( payload.tag && originalPayload.created ) {
                gith.emit( 'tag:add', payload );
            }
            if ( payload.tag && originalPayload.deleted ) {
                gith.emit( 'tag:delete', payload );
            }
        }
    }
    catch(e){
        console.log(e);
    }
    }
});

module.exports = new Github();
/**
module.exports = function(payload, next) {
    console.log(payload, next, 'zzzzzz');
    return;

    payload = payload || {};

    var branch = '';
    var tag = '';
    var rRef = /refs\/(tags|heads)\/(.*)$/;

    // break out if it was a tag or branch and assign
    var refMatches = (payload.ref || "").match(rRef);
    if (refMatches) {
        if (refMatches[1] === "heads") {
            branch = refMatches[2];
        }
        if (refMatches[1] === "tags") {
            tag = refMatches[2];
        }
    }

    // if branch wasn't found, use base_ref if available
    if (!branch && payload.base_ref) {
        branch = payload.base_ref.replace(rRef, '$2');
    }

    var simpler = {
        original: payload,
        files: {
            all: [],
            added: [],
            deleted: [],
            modified: []
        },
        tag: tag,
        branch: branch,
        repo: payload.repository ? (payload.repository.owner.name + '/' + payload.repository.name) : null,
        sha: payload.after,
        time: payload.repository ? payload.repository.pushed_at : null,
        urls: {
            head: payload.head_commit ? payload.head_commit.url : '',
            branch: '',
            tag: '',
            repo: payload.repository ? payload.repository.url : null,
            compare: payload.compare
        },
        reset: !payload.created && payload.forced,
        pusher: payload.pusher ? payload.pusher.name : null,
        owner: (payload.repository && payload.repository.owner) ? payload.repository.owner.name : null
    };

    if (branch) {
        simpler.urls.branch = simpler.urls.branch + '/tree/' + branch;
    }
    if (tag) {
        simpler.urls.tag = simpler.urls.head;
    }

    // populate files for every commit
    (payload.commits || []).forEach(function(commit) {
        // github label and simpler label ( make 'removed' deleted to be consistant )
        _.each({
            added: 'added',
            modified: 'modified',
            removed: 'deleted'
        }, function(s, g) {
            simpler.files[s] = simpler.files[s].concat(commit[g]);
            simpler.files.all = simpler.files.all.concat(commit[g]);
        });
    });

    return simpler;
    // todo: use github api to find what files were removed if the
    // head was reset? maybe?
};
*/