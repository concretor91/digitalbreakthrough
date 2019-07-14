import * as logger from './logger-service';
import * as coupons from './coupons-api-client';
import * as users from './users-api-client';
import * as flights from './flights-api-clients';

export default {
  logger,
  api: {
    coupons,
    users,
    flights
  },
};
