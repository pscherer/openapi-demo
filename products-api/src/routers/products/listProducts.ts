import { Middleware } from 'koa';
import { productStore } from '../../persistence';

export const listProducts: Middleware = (ctx) => {
  const page = +(ctx.query.page ?? 1);
  const pageSize = +(ctx.query.pageSize ?? 20);

  if (page < 1) {
    ctx.throw(400, 'Invalid page number');
  }

  if (pageSize < 5 || pageSize > 100) {
    ctx.throw(400, 'Invalid page size');
  }

  ctx.set('X-Page-Num', page.toString());
  ctx.set('X-Page-Size', pageSize.toString());
  ctx.body = productStore.getAll();
};
