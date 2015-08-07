const express = require('express');
const { getPosts, getPost, getCategories, getCategory } = require('impl');

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working
// (accessed at GET http://localhost:4000/api/v0)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our v0 api!' });
});

router.get('/posts', function (req, res) {
    getPosts().then(function (data) {
        res.json(data);
    });
});

router.get('/post/:id', function (req, res) {
    getPost(req.params.id).then(function (data) {
        res.json(data);
    });
});

router.get('/categories', function (req, res) {
    getCategories().then(function (data) {
        res.json(data);
    });
});

router.get('/category/:id', function (req, res) {
    getCategory(req.params.id).then(function (data) {
        res.json(data);
    });
});

module.exports = router;
