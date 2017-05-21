"use strict"
var s = "hello";
function hello(name){
    console.log(s+","+name+"!");
}
function hi(name){
    console.log("hi"+","+name+"!");
}
function goodbye(name){
    console.log("goodbye"+","+name+"!");
}
function love(name){
    console.log("I love "+name+"!");
}
module.exports = {
    hello: hello,
    hi: hi,
    goodBye: goodbye,
    love: love
};