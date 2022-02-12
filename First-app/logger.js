var url = 'http://kjalfjal.io/log' //假设这个变量不和文件外部交互

function log(message){
    console.log(message);
}

//console.log(module);
//如何让app.js(main module)使用log函数
//如果只导出一个变量或者函数就不需要返回对象
module.exports= log;
