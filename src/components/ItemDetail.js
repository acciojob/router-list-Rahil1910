
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'This is the description of Item 1' },
  { id: 2, name: 'Item 2', description: 'This is the description of Item 2' },
  { id: 3, name: 'Item 3', description: 'This is the description of Item 3' },
];

function ItemDetail() {
  const { id } = useParams(); 
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
