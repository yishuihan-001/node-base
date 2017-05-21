"use strict";
var fs = require("fs");

// 流的串联

var rs = fs.createReadStream("sample.txt");

var ws = fs.createWriteStream("copied.txt");

rs.pipe(ws,{end:false});

// readable.pipe(writable, { end: false });

// var ws2 = fs.createWriteStream("copied.txt","utf-8");
// ws2.write("--- THE START ---\n");
// ws2.write("you are the best ! ...\n");
// ws2.write("--- THE END ---");
// ws2.end();