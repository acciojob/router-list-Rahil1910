
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];

function ItemDetail() {
  const { id } = useParams(); // Extract item ID from the URL
  const item = items.find(item => item.id === parseInt(id)); // Find the item by ID

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>{item.name}</h1> {/* Render item name inside an h1 tag */}
      <p>{item.description}</p> {/* Render item description */}
    </div>
  );
}

export default ItemDetail;
