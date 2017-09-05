import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CheckList extends React.Component {
    render() {
        return (
            <div className="diokan-check-list">
                <div className="diokan-check-list__header">
                    <div className="diokan-title-secondary">
                        Tasks
                        <span className="diokan-counter">0/2</span>
                    </div>
                </div>
                 <div className="diokan-check-list__item">
                    <div className="diokan-check-list__item-title-wrap">
                        <label className="diokan-custom-input" htmlFor="checkbox-1">
                            <input type="checkbox" id="checkbox-1" className="diokan-input"/>
                            <span className="diokan-custom-input__checkbox"></span>
                            <span className="diokan-check-list__item-title">Confirm your identity</span>
                        </label>
                    </div>
                    <div className="diokan-check-list__item-description">
                        <p>
                            Before you can start earning money, we
                            need to verify your identity. It keeps your
                            work safe and helps speed up the payment
                            process.
                        </p>
                        <p>
                            Please add a full size image of your passport,
                            driver’s license, or state identification.
                        </p>
                    </div>
                    <div className="diokan-check-list__action-group">
                        <a href="" className="diokan-link diokan-link__small">Upload</a>
                        <a href="" className="diokan-link diokan-link__small">Find out more</a>
                    </div>
                </div>
                 <div className="diokan-check-list__item">
                    <div className="diokan-check-list__item-title-wrap">
                        <label className="diokan-custom-input" htmlFor="checkbox-2">
                            <input type="checkbox" id="checkbox-2" className="diokan-input"/>
                            <span className="diokan-custom-input__checkbox"></span>
                            <span className="diokan-check-list__item-title">Upload 10 portfolio photos</span>
                        </label>
                    </div>
                    <div className="diokan-check-list__item-description">
                        <p>
                            We can’t wait to see your best work. Please
                            upload your 10 best images so we can
                            approve your account. Please allow 1-2
                            business days for us to review.
                        </p>
                    </div>
                    <div className="diokan-check-list__action-group">
                        <a href="" className="diokan-link diokan-link__small">Upload</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default  CheckList