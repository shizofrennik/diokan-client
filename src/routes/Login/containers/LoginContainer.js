import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

class LoginContainer extends React.Component {
    render() {
        return (
            <section className="diokan-entry-page">
                <LoginForm auth={this.props.auth}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
