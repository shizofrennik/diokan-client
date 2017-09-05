import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ListWithIcon extends React.Component {
    render() {
        return (
            <ul className="diokan-list diokan-list-with-icon">
                <li className="diokan-list__item">
                    <div className="diokan-list__item-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <div className="diokan-list__item-text">
                        Confirm email address <span className="diokan-list__item-text_colored">(+5%)</span>
                    </div>

                </li>
                <li className="diokan-list__item">
                    <div className="diokan-list__item-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <div className="diokan-list__item-text">
                        Add photos to your portfolio <span className="diokan-list__item-text_colored">(+10%)</span>
                    </div>
                </li>
                <li className="diokan-list__item">
                    <div className="diokan-list__item-icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <div className="diokan-list__item-text">
                        Confirm your identity <span className="diokan-list__item-text_colored">(+10%)</span>
                    </div>
                </li>
            </ul>
        );
    }
}

export default ListWithIcon