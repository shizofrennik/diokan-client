import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'

class HeaderDashboard extends React.Component {
    constructor(props){
        super(props)
    }
    
    getHeader() {
        let path = browserHistory.getCurrentLocation().pathname;        
        switch(path) {
            case "/":
                return "Dashboard";
            case "/portfolio":
                return "Portfolio";
            case "/billing":
                return "Billing & Payment";   
            case "/photographers":
                return "Photographers";
            case "/settings":
                return "Settings";       
        }
    }

    render() {
        return (
            <div className="diokan-header">
                <div className="diokan-header-inner">
                    <div className="diokan-header__logo">
                        <div className="diokan-header__logo-text">
                            {this.getHeader()}
                        </div>
                    </div>
                    <div className="diokan-header__action-group">
                        <div className="diokan-header__action-group-inner">
                            <div className="diokan-balance-box">
                                <div className="diokan-balance-box__title">
                                    Balance
                                </div>
                                <div className="diokan-balance-box__count">
                                    $641.77
                                </div>
                            </div>
                        </div>
                        <button className="diokan-btn diokan-btn-secondary diokan-btn-secondary_role-upload diokan-helper__coming-soon">
                            <span className="diokan-icon diokan-icon__upload">
                            </span>Upload
                        </button>
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
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDashboard)