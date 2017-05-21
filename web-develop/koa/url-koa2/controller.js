"use strict";
const fs = require("fs");

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith("GET")) {
            var path = url.substring(3);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith("POST")) {
            var path = url.substring(4);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }else if(url.startsWith("PUT")){
            var path = url.substring(3);
            router.put(path,mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        }else if(url.startsWith("DELETE")){
            var path = url.substring(6);
            router.del(path,mapping([url]));
            console.log(`register URL mapping DELETE ${path}`);
        }
    }
}

function addControllers(router, dir) {
    var files = fs.readdirSync(__dirname + "/" + dir);
    var js_files = files.filter((f) => {
        return f.endsWith(".js");
    })
    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + "/" + dir + "/" + f);
        console.log(__dirname + "/" + dir + "/");
        console.log(__dirname + "/" + dir + "/"+f);
        console.log("mapping is " + mapping);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || "controllers";
    console.log("controllers_dir is " + controllers_dir);
    let router = require("koa-router")();
    addControllers(router, controllers_dir);
    return router.routes();
}