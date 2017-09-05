import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';


let FormPayPal = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={ handleSubmit } className="diokan-payment-info">
      <div className="diokan-form diokan-form-settings">
        <div className="row">
          <div className="col-md-12">
            <div className="diokan-form__header-group">
              <div className="diokan-form__header">
                Edit PayPal
              </div>
              <div className="diokan-form__header-notifications">
                <div className="diokan-form__header-link hidden">
                  <a href="" className="diokan-link diokan-link__underline diokan-link__medium">
                    Set as default payment method
                  </a>
                </div>
                <div className="diokan-notification-inner">
                  <div className="diokan-notification-inner__icon">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  </div>
                  <div className="diokan-notification-inner__description">
                    Default Payment Method
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="diokan-form-group diokan-form-group__nogap">
              <label className="diokan-form-label">
                PayPal Email Address
              </label>
              <Field
                name="PPemailAddress"
                component="input"
                type="text"
                placeholder="aneeta@armsteed@company.com"
                className="diokan-form-control"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="diokan-controls-group diokan-controls-group__between">
        <div className="diokan-controls">
          <button type="submit"
                  className="diokan-btn diokan-btn-link diokan-btn-link__underline diokan-btn-link__remove">
            Remove Account
          </button>
        </div>
        <div className="diokan-controls-right">
          <button type="submit" className="diokan-btn diokan-btn-default diokan-btn-primary__settings">
            Cancel
          </button>
          <button type="submit" className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

FormPayPal = reduxForm({
  form: 'PayPalForm',
  destroyOnUnmount: false
})(FormPayPal);

export default FormPayPal
