// Listen on port 9001
var gith = require('gith').create( 8082 );

// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

// Increase maxBuffer from 200*1024 to 1024*1024
var execOptions = {
     maxBuffer: 1024 * 1024 // 1mb
}

gith({
    repo: 'iojs/iojs-vi'
})
.on( 'all', function( payload ) {
    if( payload.branch === 'live' )
    {
        // Exec a shell script
        execFile('/var/www/githook/hook.sh', execOptions, function(error, stdout, stderr) {
            // Log success in some manner
            console.log( 'exec complete' );
        });
    }
});
