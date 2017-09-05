import {injectReducer} from 'store/reducers';
import PreviewContainer from './containers/PreviewContainer';
import { requireAuth } from 'routes/index';

export default (store) => ({
  path: 'preview/:sessionId',
  onEnter: requireAuth,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PreviewContainer)
    }, 'preview')
  }
});