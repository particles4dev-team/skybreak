var dest  = './build';
var src   = './src';

module.exports = {
    del: {
        files: [
            dest + '/backend.js',
            dest + '/_content/*',
            dest + '/public/client.js',
            dest + '/public/style/*',
            dest + '/_config.skybreak.json',
            dest + '/template.html',
            src  + '/server.js',
            src  + '/client.js'
        ]
    }
};
