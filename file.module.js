var fs = require('fs');


function fileModule() {



    var getFileUnderPath = function(path) {
        return new Promise(function(resolve, reject) {
            fs.readdir(path, function(err, files) {
                if (!err) {
                    resolve(files);
                } else {
                    reject('fail');
                }
            });
        });
    };

    var rename = function(path, name, newPathAndName) {

        return new Promise(function(resolve, reject) {
            fs.rename(path + name, newPathAndName, function(err) {
                if (!err) {
                    resolve('success');
                } else {
                    reject('fail');
                }
            });
        });
    };

    var create = function(path, name, content) {

        return new Promise(function(resolve, reject) {
            fs.writeFile(path + name, content, function(err) {
                if (!err) {
                    resolve('success');
                } else {
                    reject('fail');
                }
            });
        });
    };

    var deleteFile = function(path, name) {

        return new Promise(function(resolve, reject) {
            fs.stat(path + name, function(err) {

                if (err) {
                    reject(err);
                }

                fs.unlink(path + name, function(err) {
                    if (!err) {
                        resolve('success');
                    } else {
                        reject('fail');
                    }
                });
            });
        });
    };

    return {
        getFileUnderPath: getFileUnderPath,
        create: create,
        rename: rename,
        deleteFile: deleteFile,
    };
}

module.exports = fileModule;
