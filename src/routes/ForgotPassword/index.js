import { injectReducer } from '../../store/reducers';
import ForgotPasswordContainer from './containers/ForgotPasswordContainer';

export default (store) => ({
  path: 'forgot-password',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ForgotPasswordContainer)
    }, 'forgot_password')
  }
});