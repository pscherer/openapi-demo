import { Middleware } from 'koa';
import { productStore } from '../../persistence';
import { createResourceName } from './util';

export const replaceProduct: Middleware = (ctx) => {
  const id = ctx.params.id;
  const product = {
    name: createResourceName(id),
    ...ctx.request.body,
  };

  productStore.upsert(product);

  ctx.body = product;
};
