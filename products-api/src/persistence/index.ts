import { Product } from '../model';

const data = new Map<string, Product>();

export const productStore = {
  getByResourceName: (resourceName: string) => data.get(resourceName),
  getAll: () => [...data.values()],
  upsert: (product: Product) => data.set(product.name, product),
  removeByResourceName: (resourceName: string) => data.delete(resourceName),
};
