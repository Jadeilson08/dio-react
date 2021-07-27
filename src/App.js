import React from 'react';
import './style.css';
import Item from './shared/components/Item';
import Card from './shared/components/Card';

const name = 'Meu botão';

const App = () => {
  return (
    <>
      <h1 className="teste">Hello {name}</h1>
      <p>Start editing to see some magic happen :)</p>
      <Item name={name} />
      <Card />
    </>
  );
};
export default App;
