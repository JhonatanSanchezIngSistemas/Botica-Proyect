import React, { useState, useEffect } from 'react';
import { productoService } from '../services/api';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await productoService.getAll();
      setProductos(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar productos');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await productoService.delete(id);
        setProductos(productos.filter(p => p.id !== id));
      } catch (err) {
        setError('Error al eliminar producto');
      }
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Precio</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Stock</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Categoría</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{producto.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{producto.nombre}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{producto.descripcion}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>S/ {producto.precio}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{producto.stock}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{producto.categoria}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;
