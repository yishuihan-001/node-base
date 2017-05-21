"use strict";
var fs = require("fs");
var data = "hello, yishuihan; I LOVE YOU !!!";

//异步写入文件
fs.writeFile("temp.txt",data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("success !");
        console.log(fs.readFileSync("temp.txt","utf-8"));
    }
});

//同步写入文件
try{
    fs.writeFileSync("temp.txt",data);
    console.log(fs.readFileSync("temp.txt","utf-8"));
}catch(err){
    console.log(err);
}