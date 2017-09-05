import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

let FormNotification = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={ handleSubmit }>
      <div className="diokan-form diokan-form-notifications">
        <div className="row diokan-confirmation-list-group">
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-2">
                  <Field
                    name="uploadReminder"
                    component="input"
                    type="checkbox"
                    id="checkbox-2"
                    className="diokan-input"
                    checked
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Upload reminders</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me an email to remind me to upload client session photos
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-3">
                  <Field
                    name="announcements"
                    component="input"
                    type="checkbox"
                    id="checkbox-3"
                    className="diokan-input"
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Announcements</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me weekly emails with Diokan annoucements
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row diokan-confirmation-list-group">
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-4">
                  <Field
                    name="purchaseNotifications"
                    component="input"
                    type="checkbox"
                    id="checkbox-4"
                    className="diokan-input"
                    checked
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Purchase notifications</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me an email when a client makes a purchase
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-5">
                  <Field
                    name="reports"
                    component="input"
                    type="checkbox"
                    id="checkbox-5"
                    className="diokan-input"
                    checked
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Reports</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me a weekly summary report of my activities and earnings
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-6">
                  <Field
                    name="reviewNotifications"
                    component="input"
                    type="checkbox"
                    id="checkbox-6"
                    className="diokan-input"
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Client review notifications</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me an email when a client writes a review
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="diokan-confirmation-list">
              <div className="diokan-confirmation-list__item">
                <label className="diokan-custom-input" htmlFor="checkbox-7">
                  <Field
                    name="resources"
                    component="input"
                    type="checkbox"
                    id="checkbox-7"
                    className="diokan-input"
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">Resources</span>
                </label>
                <div className="diokan-confirmation-list__item-note">
                  Send me emalis when new resources are published to the Diokan blog
                </div>
              </div>
            </div>
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

FormNotification = reduxForm({
  form: 'Notifications',
  destroyOnUnmount: false
})(FormNotification);

export default FormNotification