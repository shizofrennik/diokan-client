import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignupEmailForm from '../components/SignupEmailForm';
import SignupPasswordForm from '../components/SignupPasswordForm';
import SignupFooter from '../components/SignupFooter';
import {browserHistory} from 'react-router';

class SignUpUsersContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            step: 1
        }
        this.submitFirstStep = this.submitFirstStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    submitFirstStep(email){
        this.setState({email: email});
        this.setState({step: 2});
    }

    handleSubmit(password){
        this.props.auth._doRegistration(this.state.email, password, 'client').then(() => {
            browserHistory.push('/');
        }).catch(() => {
            this.setState({spinner: false});
        });
    }

    renderStep(){
        if(this.state.step == 1){
            return <SignupEmailForm submit={this.submitFirstStep}/>
        } else if (this.state.step == 2){
            return <SignupPasswordForm submit={this.handleSubmit}/>
        }
    }

    render() {
        return (
            <section className="diokan-entry-page">
                <div className="container">
                    {this.renderStep()}
                    <SignupFooter/>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUsersContainer)