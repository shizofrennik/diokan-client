import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardPaymentMethod extends React.Component {
  render() {
    return (
      <div className="diokan-payment-info">
        <div className="diokan-payment-info-card">
          <div className="diokan-payment-info-card__icon diokan-payment-info-card__icon--active">
            <i className="fa fa-university" aria-hidden="true"></i>
          </div>
          <div className="diokan-payment-info-card__description">
            <div className="diokan-payment-info-card__title">
              Direct Deposit - Hello Bank! Acct # ending 7034
            </div>
            <div className="diokan-payment-info-card__remark">
              Default payment method
            </div>
          </div>
        </div>
        <div className="diokan-payment-info-card">
          <div className="diokan-payment-info-card__icon">
            <i className="fa fa-university" aria-hidden="true"></i>
          </div>
          <div className="diokan-payment-info-card__description">
            <div className="diokan-payment-info-card__title">
              Direct Deposit - Hello Bank! Acct # ending 7034
            </div>
          </div>
        </div>
        <div className="diokan-payment-info-card">
          <div className="diokan-payment-info-card__icon">
            <i className="fa fa-paypal" aria-hidden="true"></i>
          </div>
          <div className="diokan-payment-info-card__description">
            <div className="diokan-payment-info-card__title">
              PayPal - anneta.armstead@company.com
            </div>
          </div>
        </div>
        <div className="diokan-controls-right">
          <button className="diokan-btn diokan-btn-primary">
            Add Payment Method
          </button>
        </div>
      </div>
    )
  }
}

export default CardPaymentMethod