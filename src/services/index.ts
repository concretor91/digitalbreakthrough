import * as logger from './logger-service';
import * as coupons from './coupons-api-client';
import * as users from './users-api-client';

export default {
  logger,
  api: {
    coupons,
    users
  },
};
