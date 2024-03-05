import React from 'react';

const InputField = ({ value, onChange, placeholder }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    id="item"
  />
)

export default InputField;
