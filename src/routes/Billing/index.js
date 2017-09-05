import {injectReducer} from '../../store/reducers'
import BillingContainer from './containers/BillingContainer'
import { requireAuth } from '../../routes/index';

export default (store) => ({
  path: 'billing',
  onEnter: requireAuth,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, BillingContainer)
    }, 'billing')
  }
});