import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
import {getCurrentUser} from 'store/user';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            email: '',
            password: '',
            spinner: false,
            authError: false,
            remember: false
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClickRememberButton = this.handleClickRememberButton.bind(this);
    }

    static propTypes = {
        auth: PropTypes.instanceOf(AuthService)
    }

    handleChangeInput(e){
        if(this.state.authError != false) {
            this.setState({authError: false});
        }
        var value = e.target.value;
        var name = e.target.name;
        this.setState({[name]: value});
    }

    handleKeyPress(e){
        if (e.charCode == 13 && this.state.terms) {
            this.handleSubmit();
        }
    }

    handleClickRememberButton(){
        this.setState({remember: !this.state.remember});
    }

    handleSubmit(){
        this.setState({submitted: true});
        var isValidEmail = common.validateEmail(this.state.email);
        var isValidPass = common.validatePass(this.state.password);
        if(isValidEmail && isValidPass) {
            this.setState({spinner: true});
            this.props.auth._doAuthentication(this.state.email, this.state.password, this.state.remember).then(() => {
                this.props.getCurrentUser();
                browserHistory.push('/');
            }).catch((error) => {
                this.setState({spinner: false, authError: true});
            });
        }
    }

    renderValidationPresentErrors(){
        if(!this.state.submitted)
            return false;

        if(this.state.email != '' && this.state.password != '')
            return false;

        return(
            <div className="diokan-form-error" style={{textAlign: 'center'}}>Oops! That email / password can't be blank.</div>
        );
    }

    renderValidationErrors(){
        var isValidEmail = common.validateEmail(this.state.email);
        var isValidPass = common.validatePass(this.state.password);
        if(!this.state.submitted)
            return false;

        if(this.state.email == '' || this.state.password == '')
            return false;

        if(isValidEmail && isValidPass)
            return false;

        return(
            <div className="diokan-form-error" style={{textAlign: 'center'}}>Oops! That email / password combination is not valid.</div>
        );
    }

    renderWrongMessage(){
        if(!this.state.authError)
            return false;
        
        return(
            <div className="diokan-form-error" style={{textAlign: 'center'}}>Oops! That email / password combination is wrong.</div>
        );
    }

    render() {
        return (
            <div className="diokan-form diokan-form-login">
                <div className="diokan-form__header">
                    <h4 className="diokan-title-primary">
                        Log In
                    </h4>
                </div>
                <div className="diokan-form-group-box">
                    {this.renderValidationPresentErrors()}
                    {this.renderValidationErrors()}
                    {this.renderWrongMessage()}
                    <div className="diokan-form-group">
                        <input
                            type="email"
                            name="email"
                            className="diokan-form-control" 
                            placeholder="Email Address"
                            value={this.state.email} 
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="diokan-form-group">
                        <input
                            type="password"
                            name="password"
                            className="diokan-form-control" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="diokan-form-help-group diokan-form-help-group__inline">
                        <label className="diokan-custom-input" htmlFor="checkbox-1">
                            <input 
                                type="checkbox" 
                                id="checkbox-1" 
                                value={this.state.remember}
                                onClick={this.handleClickRememberButton}
                                className="diokan-input"
                            />
                            <span className="diokan-custom-input__checkbox"></span>
                            <span className="diokan-form-label">Remember me</span>
                        </label>
                        <Link className="diokan-link diokan-link__small" to="forgot-password">
                            Forgot password?
                        </Link>
                    </div>
                </div>
                <button 
                    className="diokan-btn diokan-btn-form-action" 
                    onClick={this.handleSubmit}
                >
                    {!this.state.spinner && <span className="btn-primary__text">Log In</span>}
                    {this.state.spinner && <i className="fa fa-spinner fa-spin" style={{padding: 3}}></i>}
                </button>
                <div className="diokan-form__delimiter">
                    <span className="diokan-form__delimiter-text">
                        or
                    </span>
                </div>
                <div className="diokan-form-social-entry">
                    <div className="diokan-form-group">
                        <div className="diokan-form-control-wrap diokan-icon diokan-icon__facebook">
                            <input className="diokan-form-control" placeholder="Log in with Facebook"/>
                        </div>
                    </div>
                    <div className="diokan-form-group">
                        <div className="diokan-form-control-wrap diokan-icon diokan-icon__twitter">
                            <input className="diokan-form-control" placeholder="Log in with Twitter"/>
                        </div>
                    </div>
                    <div className="diokan-form-group">
                        <div className="diokan-form-control-wrap diokan-icon diokan-icon__google">
                            <input className="diokan-form-control" placeholder="Log in with Google"/>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)