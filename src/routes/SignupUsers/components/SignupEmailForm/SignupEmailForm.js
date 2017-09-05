import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';
import classNames from 'classnames';

class SignupEmailForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            spinner: false,
            submitted: false
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    static propTypes = {
        submit: PropTypes.func.isRequired
    }

    handleChangeInput(e){
        var value = e.target.value;
        var name = e.target.name;
        this.setState({[name]: value});
    }

    handleKeyPress(e){
        if (e.charCode == 13 && this.state.terms) {
            this.handleSubmit();
        }
    }

    handleSubmit(){
        this.setState({submitted: true});
        var isValidEmail = common.validateEmail(this.state.email);
        if(isValidEmail) {
            this.setState({spinner: true});
            this.props.submit(this.state.email);
        }
    }

    render() {
        var isValidEmail = common.validateEmail(this.state.email);
        var isEmptyEmail = this.state.email == '';
        return (
            <div className="diokan-form diokan-form-client-sign-up">
                <div className="diokan-form__header">
                    <h4 className="diokan-title-primary">
                        Looking for your photos?
                    </h4>
                </div>
                <div className="diokan-form__description">
                    If you’ve already had a photo session with a Diokan photographer, please enter the email address you provided to us.
                </div>
                <div className="diokan-form-group-box">
                    <div className="diokan-form-group">
                        <input
                            type="email"
                            name="email"
                            className={classNames('diokan-form-control', { 'diokan-form-control__has-error' : this.state.submitted && (isEmptyEmail || !isValidEmail)})}
                            placeholder="Email Address"
                            value={this.state.email} 
                            onChange={this.handleChangeInput}
                        />
                        {this.state.submitted && isEmptyEmail &&
                            <div className="diokan-form-error">Email can't be blank.</div>
                        }
                        {this.state.submitted && !isValidEmail && !isEmptyEmail &&
                            <div className="diokan-form-error">Please enter a valid email address.</div>
                        }
                    </div>
                </div>
                <button className="diokan-btn diokan-btn-form-action" onClick={this.handleSubmit}>
                    {!this.state.spinner && <span className="btn-primary__text">Continue</span>}
                    {this.state.spinner && <i className="fa fa-spinner fa-spin" style={{padding: 3}}></i>}
                </button>
            </div> 
        );
    }
}

export default SignupEmailForm;