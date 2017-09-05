import { injectReducer } from '../../store/reducers';
import InviteUserContainer from './containers/InviteUserContainer';
import { isLoggedIn } from '../../routes/index';

export default (store) => ({
  path: 'invite',
  onEnter: isLoggedIn,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, InviteUserContainer)
    }, 'invite_user')
  }
});