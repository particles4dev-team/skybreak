import SshClient from 'ssh2'

class SSH {
    constructor() {
        this._client = new SshClient();
        this._client.once('ready', () => this._ready = true);
    }

    connect (connInfo) {
        this._client.connect(connInfo);
    }

    _onReady (callback) {
        if(this._ready) {
            callback();
        } else {
            this._client.once('ready', callback);
        }
    }

    putFile (src, dest, options, callback) {
        let self = this;
        if(typeof options === 'function') {
            callback = options;
            options = {};
        }

        self._onReady(function() {
            self._client.sftp(onSftp);
        });

        function onSftp(err, sftp) {
            if(err) {
                callback(err);
            } else {
                var totalTransfered = 0;
                var fastPutOptions = {
                    step: sendProgressInfo
                };

                sftp.fastPut(src, dest, fastPutOptions, function(err) {
                    if(err) {
                        callback(err);
                    } else {
                        callback(null);
                    }
                });
            }

            function sendProgressInfo(_tt, chunk, total) {
                totalTransfered += chunk;
                if(options.onProgress) {
                    var completedPercentage = (totalTransfered/total) * 100;
                    options.onProgress(completedPercentage);
                }
            }
        }
    }

    putContent (content, dest, callback) {
        let self = this;
        self._onReady(function() {
            self._client.sftp(onSftp);
        });

        var fileHandle;
        var sftp;

        function onSftp(err, _sftp) {
            if(err) {
                callback(err);
            } else {
                sftp = _sftp;
                openFile();
            }
        }

        function openFile() {
            sftp.open(dest, "w+", function(err, handle) {
                if(err) {
                    callback(err);
                } else {
                    fileHandle = handle;
                    writeContent();
                }
            });
        }

        function writeContent() {
            var data = new Buffer(content)
            sftp.write(fileHandle, data, 0, data.length, 0, function(err) {
                if(err) {
                    callback(err);
                } else {
                    sftp.close(fileHandle, callback);
                }
            });
        }
    }

    execute (shellCommand, options, callback) {
        var self = this;
        if(typeof options === 'function') {
            callback = options;
            options = {};
        }

        options.onStdout = options.onStdout || function() {};
        options.onStderr = options.onStderr || function() {};

        self._onReady(function() {
            self._client.exec(shellCommand, onExec);
        });

        function onExec(err, stream) {
            if(err) {
                callback(err);
            } else {
                var context = {stdout: "", stderr: ""};
                stream.on('close', function(code, signal) {
                    context.code = code;
                    context.signal = signal;
                    callback(null, context);
                }).on('data', function(data) {
                    data = data.toString();
                    context.stdout += data;
                    options.onStdout(data);
                }).stderr.on('data', function(data) {
                    data = data.toString();
                    context.stderr += data;
                    options.onStderr(data);
                });
            }
        }
    }

    close () {
        this._client.end();
    }
}

module.exports = SSH;
