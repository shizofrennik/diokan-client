import {injectReducer} from 'store/reducers';
import SessionsContainer from './containers/SessionsContainer';
import { requireAuth } from 'routes/index';
import React from 'react';
import ChildRoutes from './routes';

export default (store) => ({
  path: '/sessions',
  onEnter: requireAuth,
  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, SessionsContainer)
      }, 'sessions')
    }
  },
  childRoutes : ChildRoutes(store)
});