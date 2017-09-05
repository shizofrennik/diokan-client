import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logo} from 'styles/svg/svgs.js';

class Footer extends React.Component {
    render() {
        return (
            <footer className="diokan-footer">
                <div className="diokan-footer-top">
                    <ul className="diokan-footer-menu">
                        <li className="diokan-footer-menu__item">
                            <a href="" className="diokan-footer-menu__item-link">About</a>
                        </li>
                        <li className="diokan-footer-menu__item">
                            <a href="" className="diokan-footer-menu__item-link">FAQ</a>
                        </li>
                        <li className="diokan-footer-menu__item">
                            <a href="" className="diokan-footer-menu__item-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="diokan-footer-bottom">
                    <div className="diokan-copyright">
                        © 2017 Diokan. All rights reserved.
                        <a href="" className="diokan-copyright__link">Terms and Conditions</a>
                        <a href="" className="diokan-copyright__link">Privacy</a>
                    </div>
                </div>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)