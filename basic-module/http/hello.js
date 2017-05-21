"use strict";
// 导入http模块
var http = require("http");
// 创建http serve, 并传入回调函数
var server = http.createServer(function(request,response){
    // 回调函数接受request和response
    // 获得http请求的method和url
    console.log(request.method +" : "+request.url );
    // 将http响应200写入response,同时设置content-type
    response.writeHead(200,{"Content-Type":"text.html"});
    response.end("<h1>Hello, yishuihan !</h1>")
});
// 服务器监听8080端口
server.listen(8080);
console.log("Server is running at http://127.0.0.1:8080");