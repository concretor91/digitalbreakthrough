import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

// configure middlewares
const middlewares = [epicMiddleware];

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
