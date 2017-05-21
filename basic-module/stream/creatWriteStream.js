"use strict";
var fs = require("fs");
// 写入流/文本流
var ws1 = fs.createWriteStream("outPutOne.txt","utf-8");
ws1.write("使用stream写入文本数据...\n");
ws1.write("END !");
ws1.end();
// 写入流/二进制流
var ws2 = fs.createWriteStream("outPutTwo.txt");
ws2.write(new Buffer("使用stream写入二进制数据...\n","utf-8"));
ws2.write(new Buffer("END !","utf-8"));
ws2.end();
