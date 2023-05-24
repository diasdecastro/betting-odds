import { Middleware, use } from 'next-api-route-middleware';
import { NextApiRequest } from 'next';

import errorHandler from '@lib/middlewares/errorHandler';

const middleware = (...middlewares: Middleware<NextApiRequest>[]) =>
  use(errorHandler, ...middlewares);

export default middleware;
