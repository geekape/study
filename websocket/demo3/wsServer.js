var ws = require("nodejs-websocket")

var PORT = 8001

// 客户端人数
clientCount = 0

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection")

	clientCount++;
	conn.nickname = 'user' + clientCount

	// 进群提示
	broadcast((conn.nickname + ' 进来了'))

	conn.on("text", function (str) {
		console.log("Received "+str)
		// 发送消息
		broadcast(str)
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
		// 关闭提示
		broadcast(conn.nickname + ' 离开了')
	})

	conn.on("error", function (err) {
		console.log("handle err")
		console.log(err)
	})
}).listen(PORT)

console.log("websocket server listening to port" + PORT)

// 广播方法
function broadcast(str) {
	// 遍历所有连接的人
	server.connections.forEach(function (connection) {
		connection.sendText(str);
	})
}