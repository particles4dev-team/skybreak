const { getCategories } = require("impl");

var Mixin = {
    statics: {
        fetchData: function (routerName) {
            console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
            return getCategories(routerName);
        },
    }
};

module.exports = Mixin;
