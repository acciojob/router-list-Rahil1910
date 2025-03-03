
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Item List</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
