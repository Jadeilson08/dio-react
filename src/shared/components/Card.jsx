import React, { useState } from 'react';
import Button from './Button';

const Card = () => {
  const [valor, setValor] = useState(0);
  function Add() {
    setValor(valor + 1);
  }
  function Remover() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">O novo valor {valor}.</p>
        <Button onClick={Add} className="primary">
          Add
        </Button>
        <Button onClick={Remover} className="danger">
          Remover
        </Button>
      </div>
    </div>
  );
};

export default Card;
