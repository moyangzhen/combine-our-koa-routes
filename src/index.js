const koa=require('koa');
const path=require('path')
const app=new koa();
const router=require('./routes/routes')
const cors=require('koa2-cors');
const helmet=require('koa-helmet')
const statics=require('koa-static')
app.use(cors({
    origin: function (ctx) {
        // if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        // }
        // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(helmet())
app.use(statics(path.join(__dirname,'../public')))
app.use(router())
app.listen(3000)