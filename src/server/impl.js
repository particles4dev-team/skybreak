const dir = require('node-dir');
const fs = require('fs');
const path = require('path');
const moment = require( 'moment');

function getFileName (fullPath) {
    return fullPath.replace(/^.*[\\\/]/, '');
}
// http://www.rubydoc.info/github/mojombo/jekyll/Jekyll/Post
// YEAR-MONTH-DAY-title.MARKUP
// 2011-12-31-new-years-eve-is-awesome.md
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
// 2015-02-20-index.post.json
function getDate (post) {
    let postRegex = /^(.+\/)*(\d+-\d+-\d+)-(.*)(\.[^.]+)$/g;
    let r = postRegex.exec(post);
    if (!r)
        return new Date();
    return new Date(r[2] + 'T00:00:00');
};

let getPosts = function (routerName) {
    let data = [];
    return new Promise( function (resolve /**, reject */) {

        // NOTE: __dirname is build folder
        // match only filenames with a .txt extension
        // and that don't start with a `.´
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function (err, content, file, next) {
                if (err) { throw err; }
                content = JSON.parse(content);
                content._id = getFileName(file);
                content.createdAt = getDate(content._id);
                data.push(content);
                next();
            },

            function (err, /**files*/) {
                if (err) { throw err; }

                data.sort(function compare(a, b) {
                    return - moment(a.createdAt).diff(b.createdAt, 'minutes')
                });
                if (routerName) {
                    resolve({
                        data: {
                            data: data
                        },
                        routerName: routerName
                    });
                }
                else {
                    resolve({
                        data: data
                    });
                }
        });
    });
};

let getPost = function (id, routerName) {
    return new Promise( function (resolve, /**reject*/) {
        // FIXME: reject ???
        fs.readFile(path.join(__dirname, '/_content/', id),
            function (err, data) {
            if (err) { throw err; }
            if(routerName) {
                resolve({
                    data: JSON.parse(data),
                    routerName: routerName
                });
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
};

let getCategories = function (routerName) {
    let data = {};
    // NOTE: __dirname is build folder
    // match only filenames with a .txt extension
    // and that don't start with a `.´
    return new Promise( function (resolve, /**reject*/) {
        // FIXME: reject ???
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function (err, content, file, next) {
                if (err) { throw err; }
                content = JSON.parse(content);
                content.tags.forEach(function (tag) {
                    if(!data[tag]) {
                        data[tag] = {
                            length: 0,
                            posts: []
                        };
                    }
                    data[tag].length += 1;
                    data[tag].posts.push({
                        _id: getFileName(file),
                        description: content.description,
                        title: content.title
                    });
                });
                next();
            },
            function (err, /**files*/) {
                if (err) { throw err; }
                // console.log('finished reading files:', files, __dirname);
                if(routerName) {
                    resolve({
                        data: { data: data },
                        routerName: routerName
                    });
                }
                else {
                    resolve({
                        data: data
                    });
                }
        });
    });
};

let getCategory = function (id, routerName) {
    let data = {
        length: 0,
        posts: []
    };
    return new Promise( function (resolve, /**reject*/) {
        // FIXME: reject ???
        // NOTE: __dirname is build folder
        // match only filenames with a .txt extension
        // and that don't start with a `.´
        dir.readFiles(__dirname, {
            match: /.post.json$/,
            exclude: /^\./
            }, function (err, content, file, next) {
                if (err) { throw err; }
                content = JSON.parse(content);
                content.tags.forEach(function (tag) {
                    if(id !== tag) {
                        return;
                    }
                    data.length += 1;
                    data.posts.push({
                        _id: getFileName(file),
                        description: content.description,
                        title: content.title
                    });
                });
                next();
            },
            function (err, /**files*/) {
                if (err) { throw err; }
                // console.log('finished reading files:', files, __dirname);
                if (routerName) {
                    resolve({
                        data: { data: data },
                        routerName: routerName
                    });
                }
                else {
                    resolve({
                        data: data
                    });
                }
        });
    });
};

module.exports = {
    getPosts,
    getPost,
    getCategories,
    getCategory
};
