const dir = require('node-dir');
const _ = require('lodash');
const fs = require('fs');

function getFileName(fullPath) {
    return fullPath.replace(/^.*[\\\/]/, '');
}

let getPosts = function (routerName) {
    var data = [];
    return new Promise( function(resolve, reject) {

        // NOTE: __dirname is build folder
        // match only filenames with a .txt extension and that don't start with a `.´
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function(err, content, file, next) {
                if (err) throw err;
                content = JSON.parse(content);
                content._id = getFileName(file);
                data.push(content);
                next();
            },

            function(err, files){
                if (err) throw err;
                if(routerName)
                    resolve({
                        data: {
                            data: data
                        },
                        routerName: routerName
                    });
                else
                    resolve({
                        data: data
                    });
        });
    });
};

let getPost = function (id, routerName) {
    return new Promise( function(resolve, reject) {
        // FIXME: reject ???
        fs.readFile(__dirname + '/_content/' + id, function (err, data) {
            if (err) throw err;
            if(routerName)
                resolve({
                    data: JSON.parse(data),
                    routerName: routerName
                });
            else
                resolve(JSON.parse(data));
        });
    });
};

let getCategories = function (routerName) {
    var data = {};
    // NOTE: __dirname is build folder
    // match only filenames with a .txt extension and that don't start with a `.´
    return new Promise( function(resolve, reject) {
        // FIXME: reject ???
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function(err, content, file, next) {
                if (err) throw err;
                content = JSON.parse(content);
                content.tags.forEach(function (tag) {
                    if(!data[tag])
                        data[tag] = {
                            length: 0,
                            posts: []
                        };
                    data[tag].length += 1;
                    data[tag].posts.push({
                        _id: getFileName(file),
                        description: content.description,
                        title: content.title
                    });
                });
                next();
            },
            function(err, files){
                if (err) throw err;
                // console.log('finished reading files:', files, __dirname);
                if(routerName)
                  resolve({
                      data: {data: data},
                      routerName: routerName
                  });
                else
                  resolve({
                      data: data
                  });
        });
    });
};

let getCategory = function (id, routerName) {
    var data = {
        length: 0,
        posts: []
    };
    return new Promise( function(resolve, reject) {
        // FIXME: reject ???
        // NOTE: __dirname is build folder
        // match only filenames with a .txt extension and that don't start with a `.´
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function(err, content, file, next) {
                if (err) throw err;
                content = JSON.parse(content);
                content.tags.forEach(function (tag) {
                    if(id != tag)
                        return;
                    data.length += 1;
                    data.posts.push({
                        _id: getFileName(file),
                        description: content.description,
                        title: content.title
                    });
                });
                next();
            },
            function(err, files){
                if (err) throw err;
                // console.log('finished reading files:', files, __dirname);
                if(routerName)
                  resolve({
                      data: {data: data},
                      routerName: routerName
                  });
                else
                resolve({
                    data: data
                });
        });
    });
};

module.exports = {
    getPosts,
    getPost,
    getCategories,
    getCategory
};
