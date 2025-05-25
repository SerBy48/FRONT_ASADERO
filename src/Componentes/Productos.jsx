import { useState, useEffect} from 'react';
import '../css/productos.css';
import 'bulma/css/bulma.min.css';

const Productos = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    const datosDeCombos = [
      {
        id: 1,
        nombre: 'Perso || Planes',
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
          {
            descripcion: '1/4 pollo asado o apanado',
            precio: 12000,
            detalles: '2 arepas + 1 plátano maduro + 2 papas',
          },
          {
            descripcion: 'Presa de pollo asado o apanado',
            precio: 8000,
            detalles: '1 arepas + 1 plátano maduro + 1 papas',
          },
        ],
        
      },
      {
        id: 2,
        nombre: 'Fami || Planes',
        opciones: [
          {
            descripcion: 'Combo Ninpollo 1',
            precio: 50000,
            detalles: '1 pollo y 1/2 (asado o apanado), 6 arepas, 2 ensaladas coleslaw, 1 maduro, 6 papas, y 1 gaseosa 1.5 L',
          },
          {
            descripcion: 'Combo Ninpollazo',
            precio: 70000,
            detalles: '2 pollo y 1/2 (asado o apanado), 8 arepas, 3 ensaladas coleslaw, 2 maduro, 8 papas, y 2 gaseosa 1.5 L',
          },
          {
            descripcion: 'Combo Ninpollota',
            precio: 90000,
            detalles: '3 pollo y 1/2 (asado o apanado), 10 arepas, 4 ensaladas coleslaw, 3 maduro, 10 papas, y 3 gaseosa 1.5 L',
          },
        ],
        
      },
    ];
    setCombos(datosDeCombos);
  }, []);

  return (
    <div className="columns is-multiline m-0 p-3">
      {combos.map((combo) => (
        <div key={combo.id} className="column is-half ">
          <div className="box cajas">
            <h3 className=" is-2 has-text-centered title">{combo.nombre}</h3>
            {combo.opciones.map((opcion, index) => (
              <div key={index} className="box has-background-warning">
                <p className="has-text-weight-bold has-text-black title is-3">{opcion.descripcion} - ${opcion.precio}</p>
                <p className='has-text-black'>{opcion.detalles}</p>
                <button
                  className="boton-lo-quiero"
                  onClick={() => console.log("Ud añadió al carrito el producto: "+opcion.descripcion)}
                >
                  Lo quiero!
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;