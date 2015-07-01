var fs          = require('fs');
// Import execFile, to run our bash script
var execFile    = require('child_process').execFile;
// Increase maxBuffer from 200*1024 to 1024*1024
var execOptions = {
    maxBuffer: 1024 * 1024 // 1mb
};
function getCurentPath () {
    return fs.realpathSync( process.cwd() );
}
module.exports = function(payload){
    if( payload.branch === 'live' )
    {
        // Exec a shell script
        execFile(getCurentPath() + '/sites/iojs-vi/hook.sh',[payload.owner], execOptions, function(error, stdout, stderr) {
            // Log success in some manner
            console.log( 'exec complete', error, stdout, stderr );
        });
    }
}
