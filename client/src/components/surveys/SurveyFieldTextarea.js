import React from 'react';

export default ({ input, label, className, type, toolTip }) => {
  console.log(input);
  return (
    <div className="col s12 m6">
      <label>
        {label}
        <i
          className="material-icons tooltipped"
          data-position="right"
          data-delay="50"
          data-background-color="red lighten-3"
          data-tooltip={toolTip}
        >
          info_outline
        </i>
      </label>
      <textarea className={className} type={type} {...input} />
    </div>
  );
};
