import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';

class BaseLayout extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
        loggedIn: this.props.route.auth.loggedIn()
      })
    }

    return (
      <div>
        <Header/>
        <div className="diokan-entry-page-wrap">
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired
}

BaseLayout.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state, props) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)