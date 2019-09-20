import * as Koa from 'koa';
import * as Router from "koa-router";
import * as Json from 'koa-json';
import * as logger from 'koa-logger';

const app: Koa = new Koa();
const router: Router = new Router();

const config = require('./config/index')

const ctr = require('./controller/index');//控制器

app.use(Json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(async (ctx, next) => {
    const start: number = new Date().getTime() / 1000;
    await next();
    const end: number = new Date().getTime() / 1000;
    const ms = end - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// database
app.use(async (ctx, next) => {
    ctx.db = require('knex')(config.db);
    console.log('connect to db!');
    await next()
})

require('./routes/index')(router, ctr);//路由
app.use(router.routes());


app.listen(3001);

console.log("Server running on http://localhost:3001");
