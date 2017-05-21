"use strict";
const fs = require("fs");

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith("GET")) {
            console.log(`...`);
            console.log(url);
            console.log(`...`);
            var path = url.substring(3);
            router.get(path, mapping[url]);
            console.log(`Register URL mapping: GET *_* ${path}`);
        } else if (url.startsWith("POST")) {
            console.log(`...`);
            console.log(url);
            console.log(`...`);
            var path = url.substring(4);
            router.post(path, mapping[url]);
            console.log(`Register URL mapping: POST *_* ${path}`);
        } else if (url.startsWith("PUT")) {
            var path = url.substring(3);
            router.put(path, mapping[url]);
            console.log(`Register URL mapping: PUT *_* ${path}`);
        } else if (url.startsWith("DELETE")) {
            var path = url.substring(6);
            router.del(path, mapping([url]));
            console.log(`Register URL mapping DELETE *_* ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    var files = fs.readdirSync(__dirname + "/" + dir);
    var js_files = files.filter((f) => {
        return f.endsWith(".js");
    })
    for (var f of js_files) {
        console.log(`Process controller: *_* ${f}`);
        let mapping = require(__dirname + "/" + dir + "/" + f);
        console.log(__dirname + "/");
        console.log(__dirname + "/" + dir + "/");
        console.log(__dirname + "/" + dir + "/" + f);
        console.log(mapping);
        console.log("Mapping is *_*" + mapping);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || "controllers";
    console.log("Controllers_dir is *_* " + controllers_dir);
    let router = require("koa-router")();
    addControllers(router, controllers_dir);
    return router.routes();
};