import React from 'react';
const Item = props => {
  const { name } = props;
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action list-group-item-dark"
      >
        Item {name}
      </a>
    </>
  );
};

export default Item;
