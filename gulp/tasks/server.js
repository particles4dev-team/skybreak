var gulp    = require('gulp');
var nodemon = require('nodemon');
var path    = require('path');

gulp.task('server', function() {
  // https://github.com/remy/nodemon
  nodemon({
    // Using nodejs for nodemon
    execMap: {
      js: 'node'
    },

    // your node app
    script: path.join(__rootPath, 'build/backend'),
    
    // Note that by default, nodemon will ignore the .git, node_modules, bower_components and .sass-cache directories.
    // ignore everthing
    ignore: ['*'],
    
    // Now nodemon will only restart if there are changes in the ./foo directory.
    watch: ['foo/'],

    // Running non-node scripts
    // Ex. nodemon --exec "python -v" ./app.py
    ext: 'noop',

    verbose: true
  }).on('restart', function() {
    console.log('Patched!');
  });
});