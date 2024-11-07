import React, { useState, useEffect, createContext, useContext } from 'react';
import { Card, Image, Button } from 'react-bulma-components';

// Crear el contexto
const CarritoContext = createContext([]);

const ProductoCombos = () => {
  const [combos, setCombos] = useState([]);
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Simulación de carga de datos (puedes reemplazarlo con una API real)
  useEffect(() => {
    const datosDeCombos = [
      { id: 1, nombre: 'Combo A', precio: 10 },
      { id: 2, nombre: 'Combo B', precio: 20 },
      { id: 3, nombre: 'Combo C', precio: 15 },
    ];
    setCombos(datosDeCombos);
  }, []);

  return (
    <div>
      {combos.map(combo => (
        <Card key={combo.id}>
          <Card.Content>
            <Image src="https://via.placeholder.com/150" alt={combo.nombre} />
            <h3>{combo.nombre}</h3>
            <p>Precio: ${combo.precio}</p>
            <Button onClick={() => agregarAlCarrito(combo)}>Agregar al Carrito</Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default Productos;
