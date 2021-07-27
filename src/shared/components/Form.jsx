import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const [tarefa, setTarefa] = useState('');

  const handleChange = event => {
    setTarefa(event.targe.value);
    console.log(value);
    console.log('bar');
  };
  const handleClick = () => {
    console.log(value);
    console.log('foo');
  };

  return (
    <form action="" className="d-flex justify-content-center ">
      <Input type="text" onChange={handleChange} value={tarefa} />
      <Button className="primary" onClick={handleClick}>
        Salvar
      </Button>
    </form>
  );
};
export default Form;
