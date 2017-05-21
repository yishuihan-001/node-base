"use strict";
const nunjucks = require("nunjucks");
function creatEnv(path, opts) {
    var autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader("views", {
                noCache: noCache,
                watch: watch
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            }
        );
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}
var env = creatEnv("views", {
    watch: true,
    filters: {
        hex: function (n) {
            return "0x" + n.toString(16);
        }
    }
});

var t = env.render("test.html", {
    name: "yishuihan"
});
console.log(t);

var et = env.render("test.html", {
    name: "<script>alert('yishuihan')</script>"
});
console.log(et);

var h = env.render("hello.html", {
    name: "Nunjucks",
    fruits: ["apple", "banana", "watermelon"],
    count: 12000
});
console.log(h);

var b = env.render("base.html", {
    name: "yishuihan"
});
console.log(b);

var e = env.render("extend.html", {
    header: "How are you ?",
    body: "I`m fine, thanks !"
});
console.log(e);
