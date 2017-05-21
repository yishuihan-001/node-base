"use strict";

var Koa = require("koa");
var app = new Koa();

app.use(async (ctx, next) => {
    console.log(`00-1 ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`00-2 Time : ${ms}ms`);
})

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello,world! Hello,yishuihan!</h1>";
})

app.listen(5000);
console.log('app started at port 5000...');