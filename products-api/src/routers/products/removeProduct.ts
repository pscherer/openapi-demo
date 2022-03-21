import { Middleware } from 'koa';
import { productStore } from '../../persistence';
import { createResourceName } from './util';

export const removeProduct: Middleware = (ctx) => {
  const id = ctx.params.id;

  ctx.status = 204;
  ctx.body = productStore.getByResourceName(createResourceName(id));
};
