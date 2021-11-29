// 本文件用于proxy转发
// 如果只有一个请求路径，可以直接再package.json里面直接写上proxy，服务器地址。
// 然后请求的时候请求本地的端口地址，

const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1',{ // 遇见/api1前缀请求，就会触发该代理配置
            target: 'http://localhost:5000', // 请求转发给谁
            changeOrigin: true, // 控制服务器收到的请求头 host 的值
            pathRewrite: {'^/api1':''} // 重写请求路径
        }),
        proxy('/api2',{
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2':''}
        }),
    )
}