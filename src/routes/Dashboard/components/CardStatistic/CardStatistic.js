import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardStatistic extends React.Component {
    render() {
        return (
            <div className="diokan-card-statistic">
                <div className="diokan-card-statistic__icon">
                    <i className="fa fa-camera-retro" aria-hidden="true"></i>
                </div>
                <div className="diokan-card-statistic__description">
                    <div className="diokan-card-statistic__value">
                        3
                    </div>
                    <div className="diokan-card-statistic__title">
                        new sessions
                    </div>
                </div>
            </div>
        );
    }
}

export default  CardStatistic