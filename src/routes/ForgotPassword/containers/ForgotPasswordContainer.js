import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

class ForgotPasswordContainer extends React.Component {
    render() {
        return (
            <section className="diokan-entry-page">
                <ForgotPasswordForm auth={this.props.auth}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)