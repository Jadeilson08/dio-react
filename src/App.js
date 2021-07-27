import React, { useState } from 'react';
import './style.css';
import Form from './shared/components/Form';

const name = 'Meu botão';

const App = () => {
  const [valor, setValor] = useState('');

  const handleInputChange = event => {
    setValor(event.target.value);
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Lista de tarefas</h1>
      <Form />
    </>
  );
};
export default App;
