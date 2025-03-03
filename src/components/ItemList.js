
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'This is the description of Item 1' },
  { id: 2, name: 'Item 2', description: 'This is the description of Item 2' },
  { id: 3, name: 'Item 3', description: 'This is the description of Item 3' },
];

function ItemList() {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
