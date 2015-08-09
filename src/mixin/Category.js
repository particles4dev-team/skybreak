const { getCategory } = require("impl");

var Mixin = {
    statics: {
        fetchData: function (routerName, params, query) {
            console.log("__CLIENT__ = ", __CLIENT__, "__SERVER__ = ", __SERVER__);
            return getCategory(params.id, routerName);
        },
    }
};

module.exports = Mixin;
