'use strict';

var fs = require('fs');

var rs = fs.createReadStream('../fs/test.txt');
var ws = fs.createWriteStream('test2.txt');

rs.pipe(ws);