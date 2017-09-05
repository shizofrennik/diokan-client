import React from 'react';
import PropTypes from 'prop-types';
import AuthService from 'utils/AuthService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as common from 'common';
import {browserHistory} from 'react-router';
import classNames from 'classnames';

class SignupPasswordForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
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
        var isValidPass = common.validatePass(this.state.password);
        if(isValidPass) {
            this.setState({spinner: true});
            this.props.submit(this.state.password);
        }
    }

    render() {
        var isValidPass = common.validatePass(this.state.password);
        var isEmptyPass = this.state.password == '';
        return (
            <div className="diokan-form diokan-form-client-sign-up">
                <div className="diokan-form__header">
                    <h4 className="diokan-title-primary">
                        Hi Aneeta, <br/>
                        We hope you enjoyed your Diokan photo shoot.
                    </h4>
                </div>
                <div className="diokan-form__description">
                    Help us set up your account by entering a password. You will be able to log in again anytime to view and order your session photos.
                </div>
                <div className="diokan-form-group-box">
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
                    {!this.state.spinner && <span className="btn-primary__text">Continue</span>}
                    {this.state.spinner && <i className="fa fa-spinner fa-spin" style={{padding: 3}}></i>}
                </button>
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
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPasswordForm)