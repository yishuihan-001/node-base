"use strict";

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const controller = require("./controller");
// 注意require('koa-router')返回的是函数
// const router = require("koa-router")();
const app = new Koa();

// add middleware
// app.use(router.routes());

// *****************************************************************************
// // log request URL
app.use(async (ctx, next) => {
    console.log(`Process_${ctx.request.method}_${ctx.request.url}`);
    await next();
});

app.use(bodyParser());
app.use(controller());

// // add url-route
// router.get("/hello/:name", async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>hello,${name}!</h1>`;
// });
// router.get("/", async (ctx, next) => {
//     ctx.response.body = "<h1>Index</h1>";
// });
// *****************************************************************************
// router.get("/", async (ctx, next) => {
//     ctx.response.body = `
//         <h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>
//     `;
// });
// router.post("/signin", async (ctx, next) => {
//     var name = ctx.request.body.name || "";
//     var password = ctx.request.body.password || "";
//     console.log(`name: ${name} - password: ${password}`);
//     if (name == "koa" && password == "123456") {
//         ctx.response.body = `<h1>Welcome, ${name} !</h1>`;
//     } else {
//         ctx.response.body = `
//             <h1>Login Fail !</h1>
//             <p><a href="/">Try Again !</a></p>
//         `;
//     }
// });
// *****************************************************************************


app.listen(3000);
console.log("app started at port 3000 !");