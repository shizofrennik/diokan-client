import { injectReducer } from '../../store/reducers';
import SignUpUsersContainer from './containers/SignUpUsersContainer';
import { isLoggedIn } from '../../routes/index';

export default (store) => ({
  path: 'users/signup',
  onEnter: isLoggedIn,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUpUsersContainer)
    }, 'signup_users')
  }
});