import React from 'react';

const Input = ({ type, handleChange, tarefa }) => {
  return (
    <input
      className="form-control w-50"
      type={type}
      onChange={handleChange}
      value={tarefa}
    />
  );
};
export default Input;
