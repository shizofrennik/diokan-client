import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import CardStatistic from '../components/CardStatistic';
import Dropdown from '../components/Dropdown';
import CheckList from '../components/CheckList';
import SliderSimple from '../components/SliderSimple';
import ProgressBar from '../components/ProgressBar';
import ListWithIcon from '../components/ListWithIcon';
import ProfileCardStatistic from '../components/ProfileCardStatistic';
import Announcements from '../components/Announcements';

class DashboardContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="diokan-header">
          <div className="diokan-header-inner">
            <div className="diokan-header__logo">
              <div className="diokan-header__logo-text">
                Dashboard
              </div>
            </div>
            <div className="diokan-header__action-group">
              <div className="diokan-header__action-group-inner">
                <div className="diokan-balance-box">
                  <div className="diokan-balance-box__title">
                    Balance
                  </div>
                  <div className="diokan-balance-box__count">
                    $641.77
                  </div>
                </div>
              </div>
              <button
                className="diokan-btn diokan-btn-secondary diokan-btn-secondary_role-upload diokan-helper__coming-soon">
                  <span className="diokan-icon diokan-icon__upload">
                  </span>Upload
              </button>
            </div>
          </div>
        </div>
        <div className="diokan-main-inner">
          <div className="diokan-main__filter">
            <Dropdown/>
          </div>
          <Row className="diokan-block-group">
            <Col md={4}>
              <CardStatistic/>
            </Col>
            <Col md={4}>
              <CardStatistic/>
            </Col>
            <Col md={4}>
              <CardStatistic/>
            </Col>
          </Row>
          <Row className="diokan-block-group diokan-blocks-equal">
            <Col md={4}>
              <CheckList/>
            </Col>
            <Col md={4}>
              <div className="diokan-news">
                <div className="diokan-news__header">
                  <div className="diokan-title-secondary">
                    Resources
                  </div>
                  <a href="" className="diokan-link diokan-link__small">
                    View all resources
                  </a>
                </div>
                <SliderSimple/>
              </div>
            </Col>
            <Col md={4}>
              <div className="diokan-profile-card">
                <div className="diokan-profile-card__header">
                  <div className="diokan-title-secondary">
                    My Profile
                  </div>
                </div>
                <div className="diokan-profile-card-inner">
                  <div className="diokan-profile-card-intro">
                    <div className="diokan-profile-card__info">
                      <ProgressBar/>
                      <div className="diokan-remark">
                        5% complete
                      </div>
                    </div>
                    <div className="diokan-profile-card__logo">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="diokan-profile-card__content">
                    <div className="diokan-profile-card__list">
                      <ListWithIcon/>
                    </div>
                    <div className="diokan-profile-card__link-group">
                      <div className="diokan-profile-card__link">
                        <a href="" className="diokan-link diokan-link__small">Edit my profile</a>
                      </div>
                      <div className="diokan-profile-card__link">
                        <a href="" className="diokan-link diokan-link__small">View my profile as others see it</a>
                      </div>
                    </div>
                  </div>
                  <ProfileCardStatistic/>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Announcements/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({
    currentUser: state.user.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)