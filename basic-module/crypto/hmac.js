"use strict";

// Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥
// 只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把Hmac理解为用随机数“增强”的哈希算法
var crypto = require("crypto");
var hmac = crypto.createHmac("md5","secret-key");
hmac.update("hello, world!");
hmac.update("hello, yishuihan!");
console.log(hmac.digest("hex"));
