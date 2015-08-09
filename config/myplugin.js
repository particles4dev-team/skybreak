//MyPlugin.js

function MyPlugin() {};
MyPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compile", function(params) {
        // Just log something
        console.log("Compiling...");
    });

    compiler.plugin("compilation", function(compilation) {
        compilation.plugin("optimize", function() {
            console.log("The compilation is now optimizing your stuff");
        });
        compilation.plugin('normal-module-loader', function(loaderContext, module) {
            //this is where all the modules are loaded
            //one by one, no dependencies are created yet
            console.log("normal-module-loader", module);
        });
    });
}
module.exports = MyPlugin;