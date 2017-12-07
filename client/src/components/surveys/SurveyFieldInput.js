import React from 'react';

export default ({ input, label, type, toolTip }) => {
  console.log(input);
  return (
    <div className="col s12 m6">
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
    </div>
  );
};
