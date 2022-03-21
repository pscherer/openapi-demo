import Router from '@koa/router';
import { addProduct } from './addProduct';
import { listProducts } from './listProducts';
import { readProduct } from './readProduct';
import { removeProduct } from './removeProduct';
import { replaceProduct } from './replaceProduct';

export const productsRouter = new Router({ prefix: '/products' })
  .get('/', listProducts)
  .post('/', addProduct)
  .get('/:id', readProduct)
  .put('/:id', replaceProduct)
  .delete('/:id', removeProduct);
