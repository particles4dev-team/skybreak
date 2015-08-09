const { getPosts } = require("impl");

var Mixin = {
    statics: {
        fetchData: function (routerName) {
            console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
            return getPosts(routerName);
        },
    }
};

module.exports = Mixin;
