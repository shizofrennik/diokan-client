import React from 'react';

function renderField ({input, label, type, placeholder, meta: { touched, error, warning }}) {
  return (
  <div className="diokan-form-group">
    {label &&
    <label className="diokan-form-label">
      {label}
    </label>}
    <input {...input} placeholder={placeholder} type={type} className="diokan-form-control"/>
    {touched &&
    ((error &&
      <span className="diokan-form__error">
        {error}
      </span>) ||
      (warning &&
      <span className="diokan-form__warning">
        {warning}
      </span>))}
  </div>
  )
}

export default renderField;
