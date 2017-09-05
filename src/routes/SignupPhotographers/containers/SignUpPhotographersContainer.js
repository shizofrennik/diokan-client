import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignupInfo from '../components/SignupInfo';
import SignupForm from '../components/SignupForm';

class SignUpPhotographersContainer extends React.Component {
    render() {
        return (
            <section className="diokan-entry-page">
                <div className="container">
                    <div className="diokan-entry-page__inner">
                        <SignupForm auth={this.props.auth}/>
                        <SignupInfo/>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPhotographersContainer)