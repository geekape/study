'use strict';

var fs = require('fs');


var data = 'Hello, 123';

// 异步写文件
fs.writeFile('test.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// 同步写
// var data = 'Hello, Node.js';
// fs.writeFileSync('test.txt', data);



