import { injectReducer } from '../../store/reducers';
import SignUpPhotographersContainer from './containers/SignUpPhotographersContainer';
import { isLoggedIn } from '../../routes/index';

export default (store) => ({
  path: 'photographers/signup',
  onEnter: isLoggedIn,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, SignUpPhotographersContainer)
    }, 'signup_photographers')
  }
});