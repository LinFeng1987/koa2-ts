import * as Koa from 'koa';
import * as Router from "koa-router";
import * as Json from 'koa-json';
import * as logger from 'koa-logger';
const app: Koa = new Koa();
const router: Router = new Router();


const ctr = require('./controller/index');//控制器

require('./routes/index')(router, ctr);//路由
app.use(router.routes());

app.use(Json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'))


app.use(async (ctx, next) => {
    const start: number = new Date().getTime() / 1000;
    await next();
    const end: number = new Date().getTime() / 1000;
    const ms = end - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})




app.listen(3001);

console.log("Server running on http://localhost:3001");
