import React from 'react';

export default ({
  input,
  label,
  className,
  type,
  toolTip,
  meta: { error, touched }
}) => {
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
        <textarea
          id={input.name}
          className={className}
          type={type}
          {...input}
        />
        <span>{touched && error}</span>
      </div>
    </div>
  );
};
