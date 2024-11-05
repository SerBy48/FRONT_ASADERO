import "../css/Reservas.css";
import polloRegal from '../Img/polloRegalo.png'

const Reservas = () => {
  return (

    <div className="container">
      <div className="box1">
        {/* Primer contenedor del lado izquierdo */}
        <div className="content">
          <h2 className="title">Comparte Tu Cumpleaños con Asadero <br /><span>EL GALLITO</span></h2>
          <div className="media">
            <img
              src={polloRegal}
              alt="Pollo de regalo"
              className="image"
            />
            <div className="text">
              <h3 className="subtitle">Para el cumpleañero <span>Una pierna</span></h3>
              <h2 className="description">
                ¡¡ TOTALMENTE GRATIS !!
              </h2>
            </div>
          </div>
          <button className="btn">Reservas Mesa</button>
        </div>
        {/* Segundo contenedor del lado izquierdo */}
        <div className="content">
          <h2 className="title">Comparte Tu Cumpleaños con Asadero <br /><span>EL GALLITO</span></h2>
          <div className="media">
            <img
              src={polloRegal}
              alt="Pollo de regalo"
              className="image"
            />
            <div className="text">
              <h3 className="subtitle">Para el cumpleañero <span>Una pierna</span></h3>
              <h2 className="description">
                ¡¡ TOTALMENTE GRATIS !!
              </h2>
            </div>
          </div>
          <button className="btn">Reservas Mesa</button>
        </div>
      </div>

      <div className="box2">
        <h2>Contenedor 2</h2>
        <p>Aquí también puedes agregar más elementos.</p>
      </div>
    </div>
  );
};

export default Reservas;
