import React from 'react';

import './FormInput.scss';

export const FormInput = ({ changeHandler, label, ...otherProps }) => (
  <div className="group">
    <input
      onChange={changeHandler}
      className="form-input"
      {...otherProps}
    />

    {
      label 
      ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> 
      : null
    }

  </div>
);