import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm, change} from 'redux-form';
import RenderField from 'components/RenderField';
import { formValidation as validation } from 'common';

class FormAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewUrl: '',
      idUploaded: false
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        idUploaded: true
      });
    };
    this.props.change('Account', 'identification_url', file);

    reader.readAsDataURL(file)
  }

  handleImageDelete() {
    this.setState({
      file: '',
      imagePreviewUrl: '',
      idUploaded: false
    })
    this.props.change('Account', 'identification_url', null);
  }
  
  getIdThumbnail() {
    return (
      <div className="col-md-3">
        <div className="diokan-account-upload">
          <div className="diokan-form-label">
            Identification
          </div>
          <div className="diokan-account-upload__id-wrapper">
            <div className="diokan-account-upload__img-preview">
              <img src={this.props.identification_url} alt="user id"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getIdUpload() {
    if (this.state.idUploaded) {
      return (
        <div className="col-md-3">
          <div className="diokan-account-upload">
            <div className="diokan-form-label">
              Identification
            </div>
            <div className="diokan-account-upload__id-wrapper">
              <div className="diokan-account-upload__img-preview">
                <img src={this.state.imagePreviewUrl} alt="user id"/>
              </div>
              <button
                className="diokan-btn diokan-btn-link diokan-btn-link__underline"
                onClick={this.handleImageDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-md-3">
          <div className="diokan-account-upload">
            <div className="diokan-form-label">
              Identification
            </div>
            <Field
              type="file"
              component="input"
              accept="image/jpeg"
              onChange={this.handleImageChange}
              name="identification_url"
              style={{display: "none"}}
              id="file"/>
            <label
              htmlFor="file"
              className="diokan-account-upload__description">
              Upload
            </label>
          </div>
        </div>
      )
    }
  }
  
  render() {
    const {handleSubmit, identification_url} = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <div className="diokan-form diokan-form-settings">
          <div className="row">
            <div className="col-md-3">
              <Field
                name="name"
                component={RenderField}
                label="Full Name"
                type="text"
                placeholder="Trisha Hensley"
                className="diokan-form-control"
                validate={[validation.alphabetic, validation.minLength(3), validation.maxLength(100) ]}
              />
            </div>
            <div className="col-md-3">
              <Field
                name="display_name"
                component={RenderField}
                label="Display Name"
                type="text"
                placeholder="Trisha H"
                className="diokan-form-control"
                validate={[validation.minLength(3), validation.maxLength(100)]}
              />
            </div>
            <div className="col-md-6">
              <Field
                name="email"
                component={RenderField}
                label="Email"
                type="text"
                placeholder="anneta.armstrad@company.com"
                className="diokan-form-control"
                validate={[validation.email]}
              />
            </div>
          </div>
          <div className="row diokan-blocks-equal">
            <div className="col-md-3">
              <Field
                name="company_name"
                component={RenderField}
                type="text"
                label="Company Name"
                placeholder="Hensley Photography"
                className="diokan-form-control"
                validate={[validation.minLength(3), validation.maxLength(50)]}
              />
            </div>
            <div className="col-md-3">
              <Field
                name="tax"
                component={RenderField}
                label="Tax #"
                type="text"
                placeholder="1579 4458001"
                className="diokan-form-control"
                validate={[validation.minLength(3), validation.maxLength(20), validation.alphaNumeric]}
              />
            </div>
            <div className="col-md-3">
              <Field
                name="phone"
                label="Phone"
                component={RenderField}
                type="text"
                placeholder="555-435-8564"
                className="diokan-form-control"
              />
            </div>
            {(identification_url) ? this.getIdThumbnail() : this.getIdUpload()}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="diokan-confirmation">
                <label className="diokan-custom-input diokan-custom-input__big" htmlFor="checkbox-1">
                  <Field
                    name="available"
                    component={RenderField}
                    type="checkbox"
                    id="checkbox-1"
                    className="diokan-input"
                  />
                  <span className="diokan-custom-input__checkbox"></span>
                  <span className="diokan-form-label">I’m available for custom photography jobs</span>
                </label>
                <div className="diokan-confirmation__note">
                  Clients will be able to find your profile and contact you to book a photo session
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
}

const mapStateToProps = (state, props) => {
  return ({
    identification_url: state.user.currentUser.identification_url
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    change
  }, dispatch);
}

FormAccount = connect(mapStateToProps, mapDispatchToProps)(FormAccount);

export default reduxForm({
  form: 'Account',
  destroyOnUnmount: false
})(FormAccount);

