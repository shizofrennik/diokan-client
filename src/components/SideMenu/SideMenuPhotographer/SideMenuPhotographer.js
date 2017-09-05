import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';

class SideMenuPhotographer extends React.Component {
  render() {
    return (
      <ul className="diokan-side-tabs">
        <li className="diokan-side-tabs__item">
          <IndexLink to="/" activeClassName="active" className="diokan-side-tabs__item-link">
            <span className="diokan-side-tabs__item-icon">
                <i className="fa fa-tachometer" />
            </span>
            Dashboard
          </IndexLink>
        </li>
        <li className="diokan-side-tabs__item">
        <Link to="/sessions" activeClassName="active" className="diokan-side-tabs__item-link">
            <span className="diokan-side-tabs__item-icon">
                <i className="fa fa-camera-retro" />
            </span>
            Sessions
        </Link>
        </li>
        <li className="diokan-side-tabs__item diokan-helper__coming-soon">
          <a href="" className="diokan-side-tabs__item-link">
            <span className="diokan-side-tabs__item-icon">
                <i className="fa fa-bar-chart" />
            </span>
            Earnings
          </a>
        </li>
        <li className="diokan-side-tabs__item">
          <a href="" className="diokan-side-tabs__item-link">
            <span className="diokan-side-tabs__item-icon">
               <i className="fa fa-briefcase" />
            </span>
            Portfolio
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({})
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuPhotographer)