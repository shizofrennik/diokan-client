import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';


let FormDirectDeposit = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={ handleSubmit } className="diokan-payment-info">
      <div className="diokan-form diokan-form-settings">
        <div className="row">
          <div className="col-md-12">
            <div className="diokan-form__header-group">
              <div className="diokan-form__header">
                Add Direct Deposit
              </div>
              <div className="diokan-form__header-notifications">
                <div className="diokan-form__header-link">
                  <a href="" className="diokan-link diokan-link__underline diokan-link__medium">
                    Set as default payment method
                  </a>
                </div>
                <div className="diokan-notification-inner hidden">
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
            <div className="diokan-form-group">
              <label className="diokan-form-label">
                Country where bank is located
              </label>
              <Field name="countryPP" component="select" className="diokan-form-control diokan-form-control-select">
                <option value=" ">Select Country</option>
                <option value="Canada">Canada</option>
                <option value="Italy">Italy</option>
              </Field>
            </div>
          </div>
          <div className="col-md-6">
            <div className="diokan-form-group">
              <label className="diokan-form-label">
                IBAN
              </label>
              <Field
                name="IBAN"
                component="input"
                type="text"
                placeholder="Enter IBAN"
                className="diokan-form-control diokan-placeholder-light"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="diokan-form-group">
              <label className="diokan-form-label">
                Bank Name
              </label>
              <Field
                name="bankName"
                component="input"
                type="text"
                placeholder="Enter Bank Name"
                className="diokan-form-control diokan-placeholder-light"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="diokan-form-group">
              <label className="diokan-form-label">
                SWIFT / BIC
              </label>
              <Field
                name="SWIFT/BIC"
                component="input"
                type="text"
                placeholder="Enter SWIFT / BIC"
                className="diokan-form-control diokan-placeholder-light"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="diokan-controls-right">
        <button type="submit" className="diokan-btn diokan-btn-default diokan-btn-primary__settings">
          Cancel
        </button>
        <button type="submit" className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
          Save
        </button>
      </div>
    </form>
  )
}

FormDirectDeposit = reduxForm({
  form: 'Direct Diposit',
  destroyOnUnmount: false
})(FormDirectDeposit);

export default FormDirectDeposit