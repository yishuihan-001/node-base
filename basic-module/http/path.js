"usr strict";

var path = require("path");

// 解析当前目录
var workDir = path.resolve(".");
console.log(workDir);

// 组合完整的文件目录,路径: 当前目录 + "pub" + "info" + "index.html"
var filePath = path.join(workDir,"pub","info","index.html");
console.log(filePath);