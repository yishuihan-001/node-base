"use strict";
var crypto = require("crypto");

// 加密算法
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher("aes192", key);
    let crypted = cipher.update(data, "utf-8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}
// 解密算法
function aesDecrypt(crypted, key) {
    const decipher = crypto.createDecipher("aes192", key);
    let decrypted = decipher.update(crypted, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
}

const data = "hello, this is secret message !";
const key = "password123";
var miwen = aesEncrypt(data, key);
var mingwen = aesDecrypt(miwen, key);

console.log("plain txt : " + data);
console.log("ctypted txt : " + miwen);
console.log("decrypted txt : " + mingwen);

