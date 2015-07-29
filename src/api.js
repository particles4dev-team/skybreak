const express = require('express');
const dir = require('node-dir');
const _ = require('lodash');
const fs = require('fs');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/posts', function(req, res) {
    var data = [];
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
            // console.log('finished reading files:', files, __dirname);
            res.json({
                data: data
            });
    });
});

router.get('/post/:id', function(req, res) {
    fs.readFile(__dirname + '/_content/' + req.params.id, function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.get('/category/:id', function(req, res) {
    res.json({data: [
        {
            "_id": "134",
            "title": "A great story never told",
            "description": "It was a cold December morning, as I sat out on my porch I decided today was the day.",
            "category": "Storytime",
            "tags": ["Storytime"],
            "author": {
                "name": "Le Hoang"
            }
        }
    ]
    });
});

function getFileName(fullPath) {
    return fullPath.replace(/^.*[\\\/]/, '');
}

module.exports = router;