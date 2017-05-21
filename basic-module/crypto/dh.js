"use strict";

const crypto = require("crypto");

// xiaogang's 的 keys
var gang  = crypto.createDiffieHellman(512);
var gang_key = gang.generateKeys();

var prime = gang.getPrime();
var generator = gang.getGenerator();

console.log("Prime : "+prime.toString("hex"));
console.log("Generator : "+generator.toString("hex"));

// xiaohong's 的 keys
var hong = crypto.createDiffieHellman(prime,generator);
var hong_key = hong.generateKeys();

// exchange and generate secret:
var gang_secret = gang.computeSecret(hong_key);
var hong_secret = hong.computeSecret(gang_key);

// print
console.log("Secret of gang is : "+gang_secret.toString("hex"));
console.log("Secret of hong is : "+hong_secret.toString("hex"));

