'use strict';

var fs = require('fs');

// 打开一个流:
// var rs = fs.createReadStream('../fs/test.txt', 'utf-8');

// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });

var data = '我是第一个字符串' + 'sdfsdfjksjf' + 2324232734 + 'sad第十个字符串';
// 以流的形式写入文件
var ws1 = fs.createWriteStream('../fs/test.txt', 'utf-8');
ws1.write(data+'\n');
ws1.write('END.');
ws1.end();