import React from 'react';

export default ({ input, label, type }) => {
  console.log(input);
  return (
    <div className="col s12 m6">
      <label>{label}</label>
      <input type={type} {...input} />
    </div>
  );
};
