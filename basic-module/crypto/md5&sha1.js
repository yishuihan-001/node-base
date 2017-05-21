"use strict";

// MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示
// 哈希算法:md5
const crypto1 = require("crypto");
const hash1 = crypto1.createHash("md5");
// 可多次调用update
hash1.update("hello, world!");
hash1.update("hello, yishuihan!");
console.log(hash1.digest("hex"));

// 哈希算法:sha1
const crypto2 = require("crypto");
const hash2 = crypto2.createHash("sha1");
// 可多次调用update
hash2.update("hello, world!");
hash2.update("hello, yishuihan!");
console.log(hash2.digest("hex"));

// 哈希算法:sha256
const crypto3 = require("crypto");
const hash3 = crypto3.createHash("sha256");
// 可多次调用update
hash3.update("hello, world!");
hash3.update("hello, yishuihan!");
console.log(hash3.digest("hex"));

// 哈希算法:sha512
const crypto4 = require("crypto");
const hash4 = crypto4.createHash("sha512");
// 可多次调用update
hash4.update("hello, world!");
hash4.update("hello, yishuihan!");
console.log(hash4.digest("hex"));
