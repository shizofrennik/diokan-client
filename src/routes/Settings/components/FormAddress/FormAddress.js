import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from 'components/RenderField';
import { formValidation as validation } from 'common';

let FormAddress = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={ handleSubmit }>
      <div className="diokan-form diokan-form-settings">
        <div className="row">
          <div className="col-md-6">
            <Field 
              name="country" 
              label="Country"
              placeholder="United States"
              component={RenderField}
              type="text"
              validate={[validation.minLength(3), validation.maxLength(100), validation.alphabetic]}
              className="diokan-form-control diokan-form-control-select">
              <option value="Belgium">Belgium</option>
              <option value="Canada">Canada</option>
              <option value="Italy">Italy</option>
            </Field>
          </div>
          <div className="col-md-6">
            <Field
              name="city"
              label="City"
              component={RenderField}
              validate={[validation.minLength(3), validation.maxLength(100), validation.alphabetic]}
              type="text"
              placeholder="Brussels"
              className="diokan-form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <Field
                name="address_1"
                label="Address"
                component={RenderField}
                validate={[validation.minLength(3), validation.maxLength(100), validation.address]}
                type="text"
                placeholder="Address Line 1"
                className="diokan-form-control diokan-placeholder-light"
              />
              <Field
                name="address_2"
                component={RenderField}
                validate={[validation.minLength(3), validation.maxLength(100), validation.address]}
                type="text"
                placeholder="Address Line 2 (Apartment #, Suite #)"
                className="diokan-form-control diokan-placeholder-light"
              />
          </div>
          <div className="col-md-3">
            <Field
              name="province"
              label="Province"
              component={RenderField}
              validate={[validation.minLength(3), validation.maxLength(100), validation.alphabetic]}
              type="text"
              placeholder="Enter Province"
              className="diokan-form-control diokan-placeholder-light"
            />
          </div>
          <div className="col-md-3">
            <Field
              name="zip_code"
              label="Zip Code"
              component={RenderField}
              validate={[validation.minLength(3), validation.maxLength(100), validation.alphaNumeric]}
              type="text"
              placeholder="Enter Zip Code"
              className="diokan-form-control diokan-placeholder-light"
            />
          </div>
        </div>
      </div>
      <div className="diokan-controls-right">
        <button type="submit" className="diokan-btn diokan-btn-primary diokan-btn-primary__settings">
          Save
        </button>
      </div>
    </form>
  )
}

FormAddress = reduxForm({
  form: 'Address',
  destroyOnUnmount: false
})(FormAddress);

export default FormAddress
