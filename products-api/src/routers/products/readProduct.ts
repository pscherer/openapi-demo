import { Middleware } from 'koa';
import { productStore } from '../../persistence';
import { createResourceName } from './util';

export const readProduct: Middleware = (ctx) => {
  const id = ctx.params.id;
  const product = productStore.getByResourceName(createResourceName(id));

  if (!product) {
    ctx.throw(404);
  }

  ctx.body = product;
};
