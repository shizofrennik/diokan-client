import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SideMenu from 'components/SideMenu';
import {getCurrentUser} from '../../store/user';
import Spinner from 'components/Spinner';

class DashboardLayout extends React.Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  render() {
    if(!this.props.currentUser.id) {
      return (
        <Spinner />
      );  
    }
    
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
        loggedIn: this.props.route.auth.loggedIn()
      })
    }

    return (
      <div className="container nopadding">
        <div className="diokan-content">
          <SideMenu/>
          <main className="diokan-main">
             {children}
          </main>
        </div>
      </div>
    )
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}

DashboardLayout.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state, props) => {
  return ({
    currentUser: state.user.currentUser
  })
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      getCurrentUser
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)