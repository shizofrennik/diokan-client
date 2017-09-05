import { injectReducer } from '../../store/reducers';
import LoginContainer from './containers/LoginContainer';
import { isLoggedIn } from '../../routes/index';

export default (store) => ({
  path: 'login',
  onEnter: isLoggedIn,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoginContainer)
    }, 'login')
  }
});