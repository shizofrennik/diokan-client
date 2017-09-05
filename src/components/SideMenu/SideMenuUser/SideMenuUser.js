import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';

class SideMenuUser extends React.Component {
    render() {
        return (
            <ul className="diokan-side-tabs">
                <li className="diokan-side-tabs__item">
                    <a href="#dashboard" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                        <i className="fa fa-tachometer" aria-hidden="true" />
                    </span>
                        Dashboard
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#photographers" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                        <i className="fa fa-camera-retro" aria-hidden="true" />
                    </span>
                        Photographers
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#clients" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                    <i className="fa fa-users" aria-hidden="true" />
                    </span>
                        Clients
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#earning" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                        <i className="fa fa-bar-chart" aria-hidden="true" />
                    </span>
                        Earnings
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#payments" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                    <i className="fa fa-credit-card" aria-hidden="true" />
                    </span>
                        Payments
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#notifications" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                    <i className="fa fa-bell" aria-hidden="true" />
                    </span>
                        Notifications
                    </a>
                </li>
                <li className="diokan-side-tabs__item">
                    <a href="#resources" className="diokan-side-tabs__item-link" data-toggle="tab">
                    <span className="diokan-side-tabs__item-icon">
                    <i className="fa fa-book" aria-hidden="true" />
                    </span>
                        Resources
                    </a>
                </li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuUser)