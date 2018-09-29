'use strict';

var fs = require('fs');

// 异步读文件
// fs.readFile('test.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// 读二进制文件

// fs.readFile('icons.png', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//     }
// });


// 同步读文件
var data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);