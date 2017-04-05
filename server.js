// Enable harmony flags for async/await support and use Bluebird as Promise.
require('harmonica')(['harmony-async-await']);

const path    = require('path');
const Koa     = require('koa');
const Router  = require('koa-router');
const serve   = require('koa-static');
const convert = require('koa-convert');

const DEVS_JSON = require('./data/devs.json');

const port = 3000 || process.env.PORT;

const koa    = new Koa();
const router = new Router();

router.get('/api/devs', async (ctx) => {
  ctx.body = DEVS_JSON;
});

koa.use(convert(serve(path.join(__dirname, 'public'))));
koa.use(router.routes());
koa.listen(port);

console.log(`Started server on port ${port}`);
