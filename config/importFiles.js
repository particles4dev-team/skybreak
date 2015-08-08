var glob                = require('glob');
var path                = require('path');

function isFile (file) {
    return /\..+$/.test(file)
}

module.exports = {
    loadPath: function (p, client_modules) {
        var files = glob.sync(p, {});

        files.forEach(function (file) {
            var fileOrigin = file;
            if (isFile(file)) {
                client_modules[(file).replace(/\..+$/, '').replace(/^src\/client\//, '')] = path.join(__dirname, '../', fileOrigin.replace(/\..+$/, ''));
            }
            else {
                client_modules[(file).replace(/\..+$/, '').replace(/^src\/client\//, '')] = path.join(__dirname, '../', fileOrigin.replace(/\..+$/, ''), 'index');
            }   
        });

        return client_modules;
    }
};
