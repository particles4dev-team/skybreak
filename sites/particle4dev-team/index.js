// Import execFile, to run our bash script
var execFile = require('child_process').execFile;
// Increase maxBuffer from 200*1024 to 1024*1024
var execOptions = {
    maxBuffer: 1024 * 1024 // 1mb
};

module.exports = function(payload){
    if( payload.branch === 'master' )
    {
        // Exec a shell script
        // execFile('./hook.sh', execOptions, function(error, stdout, stderr) {
        //     // Log success in some manner
        //     console.log( 'exec complete' );
        // });
    }
}
