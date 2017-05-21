"use strict";

// process.cwd() 返回当前工作目录
console.log("cwd: "+ process.cwd());
console.log("current js file: "+ __filename);
console.log("current js dir: "+ __dirname);
process.name = "Sample NodeJS !";
// process.argv 存储了命令行参数
console.log("arguments: "+ JSON.stringify(process.argv));

var d = "private/temp";
if(process.platform==="win32"){
    d = "C:/Windows/System32";
}
process.chdir(d);
console.log("cwd: "+process.cwd());

// process.nextTick将会在下一次事件执行时调用
process.nextTick(function(){
    console.log("nextTick callBack !");
});
console.log("nextTick was set !");

//判断javaScript执行环境
if(typeof(window)==="undefined"){
    console.log("node Environment !");
}else{
    console.log("browser Environment !");
}

//程序退出时执行
process.on("exit",function(code){
    console.log("process will exit , code is "+code);
})