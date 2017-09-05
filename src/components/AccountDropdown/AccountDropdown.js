import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { auth } from 'routes';

class AccountDropdown extends React.Component {
    render() {
        return (
            <div className="diokan-dropdown-panel diokan-dropdown-panel__account show">
                <ul className="diokan-dropdown-menu">
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Edit my profile</a>
                    </li>
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">View my profile as others see it</a>
                    </li>
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Billing & Payments</a>
                    </li>
                    <li className="diokan-dropdown-menu__item">
                        <Link to="/settings" className="diokan-dropdown-menu__item-link" onClick={this.props.handleClick}>Settings</Link>
                    </li>
                </ul>
                <div className="diokan-dropdown-panel__intro"></div>
                <ul className="diokan-dropdown-menu">
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Support</a>
                    </li>
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Resources</a>
                    </li>
                </ul>
                <div className="diokan-dropdown-panel__intro"></div>
                <ul className="diokan-dropdown-menu">
                    <li className="diokan-dropdown-menu__item">
                        <a href="javascript:;" className="diokan-dropdown-menu__item-link" onClick={() => auth.logout()}>Log out</a>
                    </li>
                </ul>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdown)