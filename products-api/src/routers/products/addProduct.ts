import { randomUUID } from 'crypto';
import { Middleware } from 'koa';
import { productStore } from '../../persistence';
import { createResourceName } from './util';

export const addProduct: Middleware = (ctx) => {
  const id = randomUUID();
  const resourceName = createResourceName(id);

  const product = {
    name: resourceName,
    ...ctx.request.body,
  };

  productStore.upsert(product);

  ctx.set('Location', `/${resourceName}`);
  ctx.status = 201;
  ctx.body = product;
};
