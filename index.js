// Listen on port 9001
var gith    = require('./libs/gith').create( 8082 );
var sites   = require('./sites');

gith({
    repo: 'nodejs/iojs-vi'
})
.on( 'all', sites.iojsvi);

gith({
    repo: 'particles4dev-team/iojs-vi'
})
.on( 'all', sites.iojsvi);

gith({
    repo: 'particle4dev/test-git-hook'
})
.on( 'all', sites.test);

gith({
    repo: 'particles4dev-team/particle4dev-sites'
})
.on( 'all', sites.particle4devteam);
