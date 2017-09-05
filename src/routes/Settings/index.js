import {injectReducer} from '../../store/reducers'
import SettingsContainer from './containers/SettingsContainer'
import { requireAuth } from '../../routes/index';

export default (store) => ({
  path: 'settings',
  onEnter: requireAuth,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SettingsContainer)
    }, 'settings')
  }
});