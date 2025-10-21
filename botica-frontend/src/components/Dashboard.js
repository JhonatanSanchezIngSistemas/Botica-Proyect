import React, { useState } from 'react';
import ProductoList from './ProductoList';
import ProductoForm from './ProductoForm';

const Dashboard = ({ role, onLogout }) => {
  const [productos, setProductos] = useState([]);
  const [editingProducto, setEditingProducto] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    onLogout();
  };

  const handleProductoAdded = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    setShowForm(false);
  };

  const handleProductoUpdated = (updatedProducto) => {
    setProductos(productos.map(p => p.id === updatedProducto.id ? updatedProducto : p));
    setEditingProducto(null);
    setShowForm(false);
  };

  const handleProductoDeleted = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const handleEdit = (producto) => {
    setEditingProducto(producto);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingProducto(null);
    setShowForm(false);
  };

  const token = localStorage.getItem('token');

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Sistema de Gestión de Botica</h1>
        <div>
          <span>Rol: {role} | </span>
          <button onClick={handleLogout} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
            Cerrar Sesión
          </button>
        </div>
      </header>

      {token && (
        <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: '4px' }}>
          <h3>JWT Token:</h3>
          <textarea readOnly value={token} rows="4" cols="50" style={{ width: '100%', padding: '8px' }} />
        </div>
      )}

      {role === 'ADMIN' && (
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setShowForm(true)}
            style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px' }}
          >
            Agregar Producto
          </button>
        </div>
      )}

      {showForm && (
        <ProductoForm
          producto={editingProducto}
          onProductoAdded={handleProductoAdded}
          onProductoUpdated={handleProductoUpdated}
          onCancel={handleCancel}
        />
      )}

      <ProductoList
        productos={productos}
        setProductos={setProductos}
        onEdit={handleEdit}
        onDelete={handleProductoDeleted}
        role={role}
      />
    </div>
  );
};

export default Dashboard;
