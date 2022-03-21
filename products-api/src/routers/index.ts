import Router from '@koa/router';
import { productsRouter } from './products';

export const v1Router = new Router({ prefix: '/v1' }).use(
  productsRouter.routes(),
  productsRouter.allowedMethods(),
);
