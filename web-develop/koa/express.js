"use strict";

// var express = require("express");
// var app = express();

// app.get("/",function(req,res){
//     res.send("hello, world!");
// });
// app.listen(3000,function(){
//     console.log("Exemple app listen on port 3000!");
// });

// app.get('/test', function (req, res) {
//     fs.readFile('/file1', function (err, data) {
//         if (err) {
//             res.status(500).send('read file1 error');
//         }
//         fs.readFile('/file2', function (err, data) {
//             if (err) {
//                 res.status(500).send('read file2 error');
//             }
//             res.type('text/plain');
//             res.send(data);
//         });
//     });
// });

var koa = require('koa');
var app = koa();

app.use('/test', function *() {
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body = data;
});

app.listen(3000);