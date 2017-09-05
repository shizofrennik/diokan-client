import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignupUserForm from '../components/SignupUserForm';
import SignupFooter from 'components/SignupFooter';

class SignUpUsersContainer extends React.Component {
    render() {
        return (
            <section className="diokan-entry-page">
                <div className="container">
                    <SignupUserForm auth={this.props.auth}/>
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