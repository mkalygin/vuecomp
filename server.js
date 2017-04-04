// Enable harmony flags for async/await support and use Bluebird as Promise.
require('harmonica')(['harmony-async-await']);

const path    = require('path');
const Koa     = require('koa');
const serve   = require('koa-static');
const convert = require('koa-convert');

const port = 3000 || process.env.PORT;

const koa = new Koa();

koa.use(convert(serve(path.join(__dirname, 'public'))));
koa.listen(port);

console.log(`Started server on port ${port}`);
