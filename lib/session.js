import {Client} from 'ssh2'
import fs from 'fs'
import SSHClient from './ssh'

/**
 * new Session ('128.199.217.218', {
 *   username: 'root',
 *   password: 'congdongmo'
 * }, {
 *   port: 22,
 *  keepAlive: true
 * });
 */
class Session {
    constructor(host, auth, options) {
        this._host = host;
        this._auth = auth;
        this._options = options || {};
        this._keepAlive = !!this._options.keepAlive;
    }

    _getSshConnInfo () {
        let connInfo = {
            host: this._host,
            username: this._auth.username,
            password: this._auth.password,
            // readyTimeout: 60000
        };

        return connInfo;
    }

    _withSshClient (callback) {
        if(this._keepAlive) {
            if(!this._keepAliveClient) {
                this._keepAliveClient = new SSHClient();
                this._keepAliveClient.connect(this._getSshConnInfo());
            }
            callback(this._keepAliveClient, () => undefined);
        } else {
            let client = new SSHClient();
            client.connect(this._getSshConnInfo());
            callback(client, () => client.close());
        }
    }

    copy (src, dest, options, callback) {
        if(typeof(options) == 'function') {
            callback = options;
            options = {};
        }
        options = options || {};

        callback = callback || function() {};

        var self = this;
        var command;
        var copyFile = src;
        var tmpFile;
        var pemFile;

        this._debug('copy file - src: %s, dest: %s, vars: %j', src, dest, options.vars);

        //lets do templating
        if(options.vars) {
            self._applyTemplate(src, options.vars, function(err, content) {
                if(err) {
                    callback(err);
                } else {
                    self._withSshClient(putContent(content));
                }
            });
        } else {
            self._withSshClient(putFile(copyFile));
        }

        function putContent(content) {
            return function(client, done) {
                client.putContent(content, dest, function(err) {
                    done();
                    (err)? callback(err) : callback(null, 0, {});
                })
            };
        }

        function putFile(copyFile) {
            var putFileOptions = {};

            if(options.progressBar) {
                var bar = new ProgressBar("[:bar] :percent :etas", {
                    complete: "=",
                    incomplete: ' ',
                    width: 40,
                    total: 100,
                    clear: true
                });

                putFileOptions.onProgress = function (completedPercentage) {
                    bar.update(completedPercentage / 100);  
                };
            }

            return function(client, done) {
                client.putFile(copyFile, dest, putFileOptions, function(err) {
                    done();
                    (err)? callback(err) : callback(null, 0, {});
                })
            };
        }
    }

    execute (shellCommand, options, callback) {
        if(typeof(options) == 'function') {
            callback = options;
            options = {};
        }
        options = options || {};
        callback = callback || function() {};

        this._withSshClient(function(client, done) {
            client.execute(shellCommand, options, function(err, context) {
                done();
                if(err) {
                    callback(err);
                } else {
                    callback(null, context.code, context);
                }
            });
        });
    }

    executeScript (scriptFile, options, callback) {
        if(typeof(options) == 'function') {
            callback = options;
            options = {};
        }
        callback = callback || function() {};
        options = options || {};
        options.vars = options.vars || {};

        var self = this;

        this._applyTemplate(scriptFile, options.vars, function(err, content) {
            if(err) {
                callback(err);
            } else {
                self.execute(content, options, callback);
            }
        });
    }

    _applyTemplate (file, vars, callback) {
        var self = this;
        fs.readFile(file, {encoding: 'utf8'}, function(err, content) {
            if(err) {
                callback(err);
            } else {
                if(vars) {
                    // var ejsOptions = self._options.ejs || {};
                    // var content = ejs.compile(content, ejsOptions)(vars);
                }
                callback(null, content);
            } 
        });
    }

    close () {
        if(this._keepAliveClient) {
            this._keepAliveClient.close();
        }
    }
}

module.exports = Session;