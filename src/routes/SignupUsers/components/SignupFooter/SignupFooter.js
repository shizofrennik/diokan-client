import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';
import classNames from 'classnames';

class SignupFooter extends React.Component {
    render() {
        return (
            <div className="diokan-entry-page-helper">
                <div className="diokan-helper">
                    <div className="diokan-helper-message">
                        Want to become a Diokan photographer?
                        <a className="diokan-link">
                            Sign up
                        </a>
                    </div>
                </div>
                <div className="diokan-helper">
                    <div className="diokan-helper-message">
                        Already signed up?
                        <a className="diokan-link">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupFooter;