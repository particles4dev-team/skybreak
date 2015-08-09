var glob                = require('glob');
var path                = require('path');

function isFile (file) {
    return /\..+$/.test(file)
}

module.exports = {
    loadPath: function (p, modules) {
        var files = glob.sync(p, {});

        files.forEach(function (file) {
            var fileOrigin = file;
            if (isFile(file)) {
                modules[(file).replace(/\..+$/, '').replace(/^src\//, '').replace(/^(client|server)\//, '')] = path.join(__dirname, '../', fileOrigin.replace(/\..+$/, ''));
            }
            else {
                // module
                modules[(file).replace(/\..+$/, '').replace(/^src\/(client|server)\//, '')] = path.join(__dirname, '../', fileOrigin.replace(/\..+$/, ''), 'index');
            }   
        });

        return modules;
    }
};
