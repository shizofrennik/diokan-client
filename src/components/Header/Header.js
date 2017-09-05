import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logo} from 'styles/svg/svgs.js';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header className="diokan-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 diokan-header-inner">
                            <IndexLink to="/">
                                <div className="diokan-header__logo">
                                    <div className="diokan-header__logo-image" dangerouslySetInnerHTML={{__html: logo.largeLogo}}/>
                                </div>
                            </IndexLink>
                            <div className="diokan-header__action-group">
                                <div className="diokan-header__action-group-inner">
                                    <Link to="/login">
                                        <button className="diokan-btn diokan-btn-login-link">
                                            Log In
                                        </button>
                                    </Link>
                                </div>
                                <Link to="/signup">
                                    <button className="diokan-btn diokan-btn-primary">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state, props) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)