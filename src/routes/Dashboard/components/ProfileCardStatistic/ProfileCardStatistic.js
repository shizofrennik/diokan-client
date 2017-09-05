import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProfileCardStatistic extends React.Component {
    render() {
        return (
             <div className="diokan-profile-statistic">
                <div className="diokan-profile-statistic__item">
                    <div className="diokan-profile-statistic__item-group">
                        <div className="diokan-profile-statistic__item-icon">
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="diokan-profile-statistic__item-title">
                            new profile views
                        </div>
                    </div>
                    <div className="diokan-profile-statistic__item-value">
                        15
                    </div>
                </div>
                <div className="diokan-profile-statistic__item">
                    <div className="diokan-profile-statistic__item-group">
                        <div className="diokan-profile-statistic__item-icon">
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </div>
                        <div className="diokan-profile-statistic__item-title">
                            followers
                        </div>
                    </div>
                    <div className="diokan-profile-statistic__item-value">
                        126
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCardStatistic 