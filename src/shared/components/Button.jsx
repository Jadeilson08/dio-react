import React, { useState } from 'react';

const Button = ({ children, className, handleClick, type }) => {
  return (
    <button
      type={type ?? 'button'}
      className={`btn btn-${className} w-25`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
