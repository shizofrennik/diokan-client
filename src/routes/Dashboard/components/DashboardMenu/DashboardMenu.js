import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class DashboardMenu extends React.Component {
    render() {
        return (
            <div className="diokan-sidebar-tab-content">
                <div className="diokan-tab-pane active" id="dashboard">
                    <div className="diokan-sidebar-tab-content__close">
                        <button className="diokan-btn diokan-btn-close diokan-btn-close__small">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="diokan-user-state">
                        <div className="diokan-user-state__name">
                            Trisha Hensley
                        </div>
                        <div className="diokan-dropdown diokan-dropdown__sidebar">
                            <button className="diokan-btn diokan-dropdown-toggle diokan-dropdown-toggle__user-state">
                                Approved
                                <span className="diokan-dropdown-caret diokan-dropdown-caret__right">
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </span>
                            </button>
                            <div className="diokan-dropdown-panel  diokan-dropdown-panel__corner-left">
                                <div className="diokan-dropdown-panel__intro">
                                        <span className="diokan-dropdown-panel__intro-icon">
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                        Portfolio
                                </div>
                                <ul className="diokan-dropdown-menu">
                                    <li className="diokan-dropdown-menu__item">
                                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Unapproved</a>
                                    </li>
                                    <li className="diokan-dropdown-menu__item">
                                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Needs Review</a>
                                    </li>
                                    <li className="diokan-dropdown-menu__item diokan-dropdown-menu__item_active">
                                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Approved</a>
                                    </li>
                                    <li className="diokan-dropdown-menu__item">
                                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Blocked</a>
                                    </li>
                                    <li className="diokan-dropdown-menu__item">
                                        <a href="javascript:;" className="diokan-dropdown-menu__item-link">Deleted</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="diokan-side-menu">
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link active">Settings</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Public Profile</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Portfolio</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Sessions</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Earnings</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Billing and payments</a>
                        </li>
                        <li className="diokan-side-menu__item">
                            <a href="" className="diokan-side-menu__item-link">Inbox</a>
                        </li>
                    </ul>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu)