"use strict";

// 导入模块
var fs = require("fs");
var url = require("url");
var http = require("http");
var path = require("path");

// 从命令行参数读取root目录,默认是当前目录
var root = path.resolve(process.argv[2]||".");
console.log("Static root dir : "+root);

// 创建服务器
var server = http.createServer(function(request,response){
    // 获得url的path
    var pathName = url.parse(request.url).pathname;
    // 获得对应的本地文件路径
    var filePath = path.join(root,pathName);
    // console.log(pathName);
    // console.log(filePath);
    // 获取文件信息
    fs.stat(filePath,function(err,stats){
        if(!err&&stats.isFile()){
            // 没有出错且文件存在
            console.log("200 : " + request.url);
            // 发送200相应
            response.writeHead(200);
            // 将文件导向response
            fs.createReadStream(filePath).pipe(response);
        }else{
            console.log("404 : " + request.url);
            response.writeHead(404);
            response.end("<h1>404 Not Found !</h1>")
        }
    });
});

server.listen(8080);
console.log("Server is running at 127.0.0.1:8080 !")

