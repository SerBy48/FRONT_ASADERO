import { useState, useEffect, createContext, useContext } from 'react';
import '../css/productos.css';
import 'bulma/css/bulma.min.css';

// Crear el contexto
const CarritoContext = createContext([]);

const Productos = () => {
  const [combos, setCombos] = useState([]);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    const datosDeCombos = [
      {
        id: 1,
        nombre: 'Pollo asado || apanado',
        opciones: [
          {
            descripcion: '1 pollo asado o apanado',
            precio: 25000,
            detalles: '4 arepas + 1 plátano maduro + 4 papas',
          },
          {
            descripcion: '1/2 pollo asado o apanado',
            precio: 16000,
            detalles: '4 arepas + 1 plátano maduro + 4 papas',
          },
        ],
        color: 'is-warning', // Color de fondo
      },
      {
        id: 2,
        nombre: 'Combo familiar',
        opciones: [
          {
            descripcion: 'Combo Nimpollo 1',
            precio: 50000,
            detalles: '1 pollo y 1/2 (asado o apanado), 6 arepas, 2 ensaladas coleslaw, 1 maduro, 6 papas, y 1 gaseosa 1.5 L',
          },
        ],
        color: 'is-danger', // Color de fondo
      },
    ];
    setCombos(datosDeCombos);
  }, []);

  return (
    <div className="columns is-multiline">
      {combos.map((combo) => (
        <div key={combo.id} className="column is-half">
          <div className={`box has-background-${combo.color}`}>
            <h3 className="title is-5 has-text-centered">{combo.nombre}</h3>
            {combo.opciones.map((opcion, index) => (
              <div key={index} className="box has-background-light">
                <p className="has-text-weight-bold">{opcion.descripcion} - ${opcion.precio}</p>
                <p>{opcion.detalles}</p>
                <button
                  className="button is-primary is-small mt-2"
                  onClick={() => agregarAlCarrito(opcion)}
                >
                  Agregar al Carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// El resto de los componentes y lógica del carrito

export default Productos;

