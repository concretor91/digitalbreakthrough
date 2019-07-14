import { createAsyncAction } from 'typesafe-actions';
import { Flight } from 'MyModels';

export const searchFlightsAsync = createAsyncAction(
    'searchFlights/request',
    'searchFlights/success',
    'searchFlights/error'
)<undefined, Flight[], undefined>();

