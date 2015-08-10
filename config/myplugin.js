// MyPlugin.js
// https://github.com/webpack/extract-text-webpack-plugin/commit/29879d19d35d4bba511a47c334fec4ee2e8027c5
// https://github.com/webpack/webpack/blob/master/lib/IgnorePlugin.js
var RawSource = require("webpack/lib/RawSource");

function MyPlugin() {};
MyPlugin.prototype.apply = function (compiler) {
    // compiler.plugin("compile", function(params) {
        // // Just log something
        // console.log("Compiling...");
    // });
    compiler.plugin("this-compilation", function(compilation) {
    // compiler.plugin("compilation", function(compilation) {
        // compilation.plugin("optimize", function() {
        //     console.log("The compilation is now optimizing your stuff");
        // });
        // compilation.plugin('normal-module-loader', function(loaderContext, module) {
        //     //this is where all the modules are loaded
        //     //one by one, no dependencies are created yet
        //     console.log("normal-module-loader", module);
        // });
        // compilation.plugin("after-optimize-chunks", function(chunks) {
        //     chunks.forEach(function(chunk) {
        //         console.log("after-optimize-chunks", chunk.initial);
        //         if(chunk.initial) {
        //             var text = [];
        //             chunk.modules.forEach(function(module) {
        //                 console.log(module);
        //             });
                    
        //         }
        //     });
        // });
        // compilation.plugin("optimize-tree", function(chunks, modules, callback) {
        //     chunks.forEach(function(chunk, i) {
        //         console.log(chunk, i);
        //     });
        // });
        compilation.plugin("additional-assets", function(callback) {
            console.log("additional-assets");
        });
    });
}
module.exports = MyPlugin;