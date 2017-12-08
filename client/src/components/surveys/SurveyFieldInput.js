import React from 'react';

export default ({ input, label, type, toolTip, meta: { error, touched } }) => {
  return (
    <div className="col s12 m6">
      <div className="form-field">
        <label htmlFor={input.name}>{label}</label>
        <i
          className="material-icons tooltipped"
          data-position="right"
          data-delay="50"
          data-tooltip={toolTip}
        >
          info_outline
        </i>
        <input id={input.name} type={type} {...input} />
        <span className="error-message">{touched && error}</span>
      </div>
    </div>
  );
};
