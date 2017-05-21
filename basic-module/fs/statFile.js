"use strict";
var fs = require("fs");

//异步获取文件信息
fs.stat("temp.txt", function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件
        console.log("isFile: " + stat.isFile());
        // 是否是目录
        console.log("isDirectory: " + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小
            console.log("file_size: " + stat.size);
            // 创建时间
            console.log("file_birthTime: " + stat.birthtime);
            // 修改时间
            console.log("file_modifiedTime: " + stat.mtime);
        }
    }
});

//暂时有误
//同步获取文件信息
fs.statSync("temp.txt", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("successful !!!");
    }
});
