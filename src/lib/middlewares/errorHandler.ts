import { NextApiRequest } from 'next';
import { Middleware } from 'next-api-route-middleware';

const errorHandler: Middleware<NextApiRequest> = async (req, res, next) => {
  // nichts tun
  try {
    await next();
  } catch (e) {
    throw e;
  }
};

export default errorHandler;
