"use strict";
var fs = require("fs");
// 打开流
var rs = fs.createReadStream("sample.txt","utf-8");
// 读取流
rs.on("data",function(chunk){
    console.log("DATA !");
    console.log(chunk);
});
// 流结束
rs.on("end",function(){
    console.log("END !");
});
// 流出错
rs.on("error",function(err){
    console.log("ERROR: "+err);
});