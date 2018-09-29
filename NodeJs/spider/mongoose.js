var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('连接成功');
});

// 定义Schema
var tieBaPost = new Schema({
    title: String,
    url: String,
    author: String,
    commentNum: Number,
    time: String
});

// 创建一个模型
var Post = mongoose.model('Post', tieBaPost);



var item = new Post({
  title: 'test标题',
  url: 'test链接',
  author: 'test作者',
  commentNum: 1
})

item.save(function(err) {
  if(err) {
    console.log('保存失败');
    return;
  }
  console.log('保存成功')
})

