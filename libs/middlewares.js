var _                   = require("lodash");

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

function call(handle, context, err, args, next) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
    // length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. 
    var arity = handle.length;
    var error = err;

    try {
        if (arity === 3) {
            // error-handling middleware
            handle.call(context, err, args, next);
            return;
        } else if (arity < 3) {
            // request-handling middleware
            handle.call(context, args, next);
            return;
        }
    } catch (e) {
        // replace the error
        error = e;
    }
    // continue
    next(error);
}

function Middleware () {
    /**
     * Save the service
     * @type {Array}
     */
    this._services = [];
};

Middleware.prototype.constructor = Middleware;

 /*
 * Add Methods
 */
_.extend(Middleware.prototype, {
    register: function (name, hook, context) {
        if(_.isFunction(name))
            hook = name;
        if(!_.isString(name))
            name = null;
        if(!_.isObject(context))
            context = null;
        if(!_.isFunction(hook))
            throw new Error('hook must be a function');
        this._services.push({ name: name, handle: hook, context: context });
    },
    start: function (args, fin) {
        var index = 0;
        var stack = this._services;
        
        // final function handler
        var done = function (err, res) {
            if(_.isFunction(fin))
                fin(err, res);
        };
        function next(err) {
            // next callback
            var layer = stack[index++];
            // all done
            if (!layer) {
                defer(done, err, args);
                return;
            }
            // call the layer handle
            call(layer.handle, layer.context, err, args, next);
        }
        next();
    }
});

module.exports = Middleware;