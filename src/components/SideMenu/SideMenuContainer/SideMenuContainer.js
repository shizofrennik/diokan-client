import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink, Link} from 'react-router';
import {logo} from 'styles/svg/svgs.js';
import SideMenuAccount from '../SideMenuAccount';
import SideMenuPhotographer from '../SideMenuPhotographer';
import SideMenuUser from '../SideMenuUser';

class SideMenuContainer extends React.Component {
    render() {
        return (
            <aside className="diokan-sidebar diokan-sidebar__fixed-right">
                <div className="diokan-sidebar-group">
                    <div className="diokan-sidebar__top">
                        <div className="diokan-sidebar__logo" dangerouslySetInnerHTML={{__html: logo.simpleLogo}}/>
                        <SideMenuPhotographer/>
                    </div>
                    <div className="diokan-sidebar__bottom">
                        <div className="diokan-sidebar-info">
                            {/* <button className="diokan-btn diokan-messages-box" data-message-count="3">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </button> */}
                            <SideMenuAccount/>
                        </div>
                    </div>
                </div>
            </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer)