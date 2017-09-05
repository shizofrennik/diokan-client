import { injectReducer } from '../../store/reducers';
import DashboardContainer from './containers/DashboardContainer';
import { requireAuth } from '../../routes/index';

export default (store) => ({
  onEnter: requireAuth,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, DashboardContainer)
    }, 'dashboard')
  }
});