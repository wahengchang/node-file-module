# node-file-module

It is a module includes functions of create, delete, rename and get path locally 

## Usage

```js
var fileModule = new require('./file.module.js')();

var _readPath = '../this/is/file.jpg';
var _newPath = '../this/is/new/';
var fileName = 'fileName.jpg';

//move or rename a file to new path
fileModule.rename(_readPath,fileName,_newPath+fileName).then(function(url){ ... });

//show all files under a folder
fileModule.getFileUnderPath(_readPath).then(function(url){ ... });

//show all files under a folder
fileModule.getFileUnderPath(_readPath).then(function(url){ ... });


```

## License


[MIT](http://vjpr.mit-license.org)