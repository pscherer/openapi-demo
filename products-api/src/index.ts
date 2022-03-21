import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';
import { readFileSync } from 'fs';
import { join } from 'path';
import { errorHandler } from './middleware/error-handler';
import { v1Router } from './routers';

const server = new Koa();
const port = 3000;

const router = new Router()
  .use(v1Router.routes(), v1Router.allowedMethods())
  .get('/openapi', (ctx) => {
    ctx.body = readFileSync(join(__dirname, '..', 'doc', 'shop.yaml'), 'utf8');
  });

server.use(errorHandler).use(cors()).use(bodyParser()).use(router.middleware());

server.listen(port);
