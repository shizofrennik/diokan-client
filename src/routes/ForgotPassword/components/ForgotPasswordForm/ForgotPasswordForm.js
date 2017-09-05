import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AuthService from 'utils/AuthService';
import * as common from 'common';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import classNames from 'classnames';
import toastr from 'toastr';

class ForgotPasswordForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            email: '',
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
        if(isValidEmail) {
            this.setState({spinner: true});
            this.props.auth._doChangePassword(this.state.email).then((resp) => {
                browserHistory.push('/');
                toastr.success(resp);
            }).catch((error) => {
                this.setState({spinner: false, authError: true});
                toastr.error(error);
            });
        }
    }

    render() {
        var isValidEmail = common.validateEmail(this.state.email);
        var isEmptyEmail = this.state.email == '';
        return (
            <section className="diokan-entry-page">
                <div className="container">
                    <div action="" className="diokan-form diokan-form-client-sign-up">
                        <div className="diokan-form__header">
                            <h4 className="diokan-title-primary">
                                Forgot password?
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
                        <button className="diokan-btn diokan-btn-form-action" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="diokan-entry-page-helper">
                        <div className="diokan-helper">
                            <div className="diokan-helper-message">
                                Want to become a Diokan photographer?
                                <Link className="diokan-link" to="signup">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                        <div className="diokan-helper">
                            <div className="diokan-helper-message">
                                Already signed up?
                                <Link className="diokan-link" to="login">
                                    Log in
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)