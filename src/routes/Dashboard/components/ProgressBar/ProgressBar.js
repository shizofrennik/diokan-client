import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="diokan-progress-bar-profile">
                <span className="diokan-progress-bar-profile-fill" style={{width: 25 }}></span>
            </div>
        );
    }
}

export default ProgressBar