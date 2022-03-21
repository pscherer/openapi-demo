import { Middleware } from 'koa';

export const errorHandler: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const { status, message } = err as { status: number; message: string };

    ctx.status = status ?? 500;
    ctx.body = { code: status, message };
  }
};
