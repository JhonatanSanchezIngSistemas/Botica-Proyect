import React, { useState } from 'react';
import ProductoList from './components/ProductoList';
import ProductoForm from './components/ProductoForm';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);

  const handleProductoAdded = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestión de Botica</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <ProductoForm onProductoAdded={handleProductoAdded} />
        <ProductoList />
      </main>
    </div>
  );
}

export default App;
