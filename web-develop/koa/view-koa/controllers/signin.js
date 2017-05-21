"use strict";

// var fn_hello = async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>hello, ${name} !</h1>`;
// }

// module.exports = {
//     "GET/hello/:name": fn_hello
// }

module.exports = {
    "POST/signin": async(ctx,next) => {
        console.log("...Come Here: signin...");
        var email = ctx.request.body.email || "",
            password =  ctx.request.body.password || "";
        if(email==="969971977@qq.com"&&password==="123456"){
            console.log("Signin Is OK !");
            ctx.render("signin-ok.html",{
                title: "Signin Is OK !",
                name: "Mr Node"
            });
        }else{
            console.log("Signin Is Fail !");
            ctx.render("signin-failed.html",{
                title: "Signin Is Fail !"
            })
        }
    }
};
