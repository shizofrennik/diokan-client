import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import AccountDropdown from '../../AccountDropdown';

class SideMenuAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    toggleDropdown(){
        this.setState({show: !this.state.show});
    }

    handleBlur(e){
      var active = e.relatedTarget || document.activeElement;
      if (!e.currentTarget.contains(active)) {
        this.setState({show: false});
      }
    }
  
    handleLinkClick() {
      this.setState({show: false});
    }

    render() {
        return (
            <div tabIndex={1} className="diokan-user-box" onBlur={this.handleBlur}>
                <div className="diokan-user-box__logo" onClick={this.toggleDropdown} >
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                </div>
                <div className="diokan-user-box__name" onClick={this.toggleDropdown} >
                  {this.props.currentUser.name}
                </div>
                {this.state.show && <AccountDropdown handleClick={this.handleLinkClick}/>}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
  return ({
    currentUser: state.user.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuAccount)