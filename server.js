// 1.引入express
const { request, response } = require('express')
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
//接收GET类型请求
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO AJAX GET-1');
});

// all表示可以接收任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 响应一个数据
    const data = {
        name: "AJAX"
    }

    // 对对象进行字符串转换
    let str = JSON.stringify(data);

    // 设置响应体
    // send(),只能接收字符串和buffer
    // response.send('HELLO AJAX JSON');
    response.send(str);
});

//专门针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO IE-3');
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应');
    }, 1000)
});

//jQuery服务
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: "jQuery" };
    response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: "axios" };
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send('Hello jQuery AJAX');
    const data = { name: "fetch" };
    response.send(JSON.stringify(data));
});

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        name: '牛逼'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        exist: 1,
        msg: "用户名已经存在"
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果---一个handle()函数的调用
    response.end(`handle(${str})`);
});

//
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        name: '处理jQuery-json请求',
        city: ['重庆', '北京', '深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    // 接收 callback 参数
    let cb = request.query.callback
        // 返回结果---一个handle()函数的调用
    response.end(`${cb}(${str})`);
});

app.all('/cors-server', (request, response) => {
    //设置响应头，允许跨域请求，‘*’表示所有跨域请求都可以
    response.setHeader("Access-Control-Allow-Origin", "*");
    //请求可以自定义请求头字段
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 请求方法可以任意
    response.setHeader("Access-Control-Allow-Method", "*");
    response.send("Hello CORS");
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})