"use stricrt";

//异步读取txt-utf-8文件
var fs = require("fs");
fs.readFile("temp.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(new Buffer(data, "utf-8"));
    }
})
//异步读取图片-二进制文件
fs.readFile("123.jpg", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ".bytes");
        // console.log(data.toString("utf-8"));
    }
})

console.log("******************** START SYNC ***************************");
//同步读取文本文件
try {
    console.log(fs.readFileSync("temp.txt", "utf-8"));
} catch (err) {
    console.log("Error 1 !");
    console.log(err);
}
//同步读取二进制文件
try {
    console.log(fs.readFileSync("123.jpg"));
} catch (err) {
    console.log("Error 2 !");
    console.log(err);
}
console.log("******************** END SYNC ***************************");