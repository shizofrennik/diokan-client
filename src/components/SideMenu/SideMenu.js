import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {logo} from 'styles/svg/svgs.js'

class SideMenu extends React.Component {
    render() {
        return (
            <aside className="diokan-sidebar diokan-sidebar__fixed-right">
                <div className="diokan-sidebar-group">
                    <div className="diokan-sidebar__top">
                        <div className="diokan-sidebar__logo" dangerouslySetInnerHTML={{__html: logo.simpleLogo}}/>
                        <ul className="diokan-side-menu">
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">
                                <span className="diokan-side-menu__item-icon">
                                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                                </span>
                                    Dashboard
                                </a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">
                            <span className="diokan-side-menu__item-icon">
                                <i className="fa fa-camera-retro" aria-hidden="true"></i>
                            </span>
                                    Sessions
                                </a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">
                            <span className="diokan-side-menu__item-icon">
                                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                            </span>
                                    Earnings
                                </a>
                            </li>
                            <li className="diokan-side-menu__item">
                                <a href="" className="diokan-side-menu__item-link">
                            <span className="diokan-side-menu__item-icon">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </span>
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="diokan-sidebar__bottom">
                        <div className="diokan-sidebar-info">
                            <button className="diokan-btn diokan-messages-box" data-message-count="3">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </button>
                            <div className="diokan-user-box">
                                <div className="diokan-user-box__logo">
                                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                </div>
                                <div className="diokan-user-box__name">
                                    Trisha
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)