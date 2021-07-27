import React, { useState } from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button type="button" className={`btn btn-${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
