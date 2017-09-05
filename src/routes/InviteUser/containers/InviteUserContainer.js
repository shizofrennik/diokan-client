import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignupPasswordForm from '../components/SignupPasswordForm';
import SignupFooter from 'components/SignupFooter';
import {browserHistory} from 'react-router';

class InviteUserContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(password){
    this.props.auth._doRegistration(this.state.email, password, 'client').then(() => {
      browserHistory.push('/');
    }).catch(() => {
      this.setState({spinner: false});
    });
  }

  render() {
    return (
      <section className="diokan-entry-page">
        <div className="container">
          <SignupPasswordForm submit={this.handleSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(InviteUserContainer)