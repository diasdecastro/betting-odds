import { Middleware, use } from 'next-api-route-middleware';
import { NextApiRequest } from 'next';

import requestErrorHandler from '@lib/middlewares/errorHandler';

const middleware = (...middlewares: Middleware<NextApiRequest>[]) =>
  use(requestErrorHandler, ...middlewares);

export default middleware;
