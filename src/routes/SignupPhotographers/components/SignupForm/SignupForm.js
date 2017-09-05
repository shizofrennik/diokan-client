import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';
import classNames from 'classnames';
import {getCurrentUser} from 'store/user';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            email: '',
            password: '',
            spinner: false
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthService)
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
        var isValidPass = common.validatePass(this.state.password);
        if(isValidEmail && isValidPass) {
            this.setState({spinner: true});
            this.props.auth._doRegistration(this.state.email, this.state.password, 'photographer').then(() => {
                this.props.getCurrentUser();
                browserHistory.push('/');
            }).catch(() => {
                this.setState({spinner: false});
            });
        }
    }

    render() {
        var isValidEmail = common.validateEmail(this.state.email);
        var isValidPass = common.validatePass(this.state.password);
        var isEmptyEmail = this.state.email == '';
        var isEmptyPass = this.state.password == '';
        return (
            <div className="diokan-entry-page__inner-left">
                <div className="diokan-form diokan-form-sign-up">
                    <div className="diokan-form__header">
                        <h4 className="diokan-title-primary">
                            Photographer Sign Up
                        </h4>
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
                        <div className="diokan-form-group">
                            <input
                                type="password"
                                name="password"
                                className={classNames('diokan-form-control', { 'diokan-form-control__has-error' : this.state.submitted && (isEmptyPass || !isValidPass) })}
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChangeInput}
                            />
                            {this.state.submitted && isEmptyPass &&
                                <div className="diokan-form-error">Password can't be blank.</div>
                            }
                            {this.state.submitted && !isValidPass && !isEmptyPass &&
                                <div className="diokan-form-error">Password must be at least 8 characters.</div>
                            }
                        </div>
                    </div>
                    <button className="diokan-btn diokan-btn-form-action" onClick={this.handleSubmit}>
                        {!this.state.spinner && <span className="btn-primary__text">Sign Up</span>}
                        {this.state.spinner && <i className="fa fa-spinner fa-spin" style={{padding: 3}}></i>}
                    </button>
                    <div className="diokan-form__delimiter">
                        <span className="diokan-form__delimiter-text">
                            or
                        </span>
                    </div>
                    <div className="diokan-form-social-entry diokan-form-social-entry__gap-bottom">
                        <div className="diokan-form-group">
                            <div className="diokan-form-control-wrap diokan-icon diokan-icon__facebook">
                                <input className="diokan-form-control" placeholder="Sign up with Facebook"/>
                            </div>
                        </div>
                        <div className="diokan-form-group">
                            <div className="diokan-form-control-wrap diokan-icon diokan-icon__twitter">
                                <input className="diokan-form-control" placeholder="Sign up with Twitter"/>
                            </div>
                        </div>
                        <div className="diokan-form-group">
                            <div className="diokan-form-control-wrap diokan-icon diokan-icon__google">
                                <input className="diokan-form-control" placeholder="Sign up with Google"/>
                            </div>
                        </div>
                    </div>
                    <div className="diokan-form__helper">
                        By creating an account, you accept our <a href="" className="diokan-link diokan-link__small">Terms and Conditions.</a>
                    </div>
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
        getCurrentUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)