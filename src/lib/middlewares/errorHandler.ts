import { NextApiRequest } from 'next';
import { Middleware } from 'next-api-route-middleware';

const requestErrorHandler: Middleware<NextApiRequest> = async (
  req,
  res,
  next
) => {
  try {
    await next();
  } catch (e) {
    throw e;
  }
};

export default requestErrorHandler;
